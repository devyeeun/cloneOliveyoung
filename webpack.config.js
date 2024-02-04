// 절대 경로를 참조하기 위해 path를 불러옴
const path = require('path')
const webpack = require('webpack')

// HTML 파일을 생성하고 번들된 자원을 자동으로 추가하는 플러그인
const HtmlWebpackPlugin = require('html-webpack-plugin')

// webpack 빌드 시 이전 빌드 결과물을 정리하는 플러그인
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// CSS파일을 분리하여 별도의 파일로 추출하는 플러그인
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// JS 코드를 난독화하고 debugger 구분을 제거
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'development',
  target: 'web',

  // 번들링을 시작할 파일(웹팩이 파일을 읽어들이기 시작하는 부분)
  entry: { vendor: ['react', 'react-dom'], bundle: ['./src/index.js'] },

  // 번들링 된 파일이 생성될 위치 설정
  output: {
    path: path.resolve(__dirname, 'dist'), // output으로 나올 파일이 저장될 경로
    publicPath: '/', // 파일들이 위치할 서버 상의 경로
    filename: '[name].[hash].js',
  },

  // 웹팩이 모듈을 처리하는 방식을 설정하는 속성
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  // 다양한 모듈들(js, image, css 등)을 처리하는 방법 결정
  module: {
    rules: [
      {
        // 어떤 파일에 적용할지 확장자 작성
        test: /\.(js|jsx|tsx|ts)$/,

        // 이 모듈에 사용할 loader
        use: ['babel-loader'],

        // 제외할 파일들
        exclude: /node_modules/,
      },
      {
        test: /\.(sc|c|sa)ss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './public/images',
            },
          },
        ],
      },
    ],
  },

  // 빠르게 개발할 수 있도록 개발서버 제공
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
    hot: true, // 모듈의 변화만 자동으로 로드하는 HTR 기능 활성화
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        // 특정 조건에 따라 청크파일을 생성하겠다
        // node_vendors라는 청크 그룹을 생성
        node_vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router)[\\/]/, // 분리할 대상이 되는 파일
          name: 'vendors', // 청크로 분리할 때 이름으로 사용될 파일명
          filename: '[name].[chunkhash].js',
          chunks: 'all', // 모듈의 종류에 따라 청크에 포함할지 말지를 결정하는 옵션
          // (node_modules폴더 아래에 있는 모든 파일들을 포함시켜라)
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 콘솔 로그 제거
          },
        },
      }),
    ],
  },

  // 적용할 플러그인 목록
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: `public/index.html`, minify: true }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css'}),

    // React를 명시적으로 import 하지 않고 사용할 수 있도록 해주는 플러그인
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}
