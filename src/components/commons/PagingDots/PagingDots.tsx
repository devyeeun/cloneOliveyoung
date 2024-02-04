// import { useAtom, useAtomValue, useSetAtom } from 'jotai'
// import { MouseEvent, useCallback, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import { StyledMainBannerList } from '../../units/main/MainPlan/MainPlan.styles'
// import { StyledPagingButton, StyledPagingList } from './PagingDots.styles'

// interface IPagingProps {
//   dotIndex: number
//   sliderRef?: React.RefObject<React.ElementRef<typeof StyledMainBannerList> | null>
// }

// const PagingDots = ({ dotIndex, sliderRef }: IPagingProps) => {
//   // 페이지네이션을 위한 Read-Write-Atom 사용
//   const [selectedPage, setSelectedPage] = useAtom(SelectedPageAtom)

//   const handleClickPage = useCallback(
//     (event: MouseEvent<HTMLButtonElement>) => {
//       const pageIndex = parseInt(event.currentTarget.id)
//       setSelectedPage(pageIndex)

//       if (sliderRef?.current) {
//         if (pageIndex < selectedPage) {
//           sliderRef.current.slickPrev()
//         } else if (pageIndex > selectedPage) {
//           sliderRef.current.slickNext()
//         }
//       }
//     },
//     [selectedPage, setSelectedPage, sliderRef]
//   )

//   return (
//     <StyledPagingList>
//       {new Array(dotIndex).fill(null).map((_, index) => (
//         <li key={uuidv4()}>
//           <StyledPagingButton
//             id={String(index + 1)}
//             onClick={handleClickPage}
//             pageClick={selectedPage === index + 1 ? 'true' : undefined}
//           >
//             {index + 1}
//           </StyledPagingButton>
//         </li>
//       ))}
//     </StyledPagingList>
//   )
// }

// export { PagingDots }
