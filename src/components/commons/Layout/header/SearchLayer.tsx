import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  StyledInnerLayer,
  StyledSearchLayer,
  StyledSearchResultEsc,
  StyledSearchTabLeft,
  StyledSearchTabRight,
  StyledTabContent,
  StyledTabContentItem,
  StyledTabContentList,
  StyledTabContentNodata,
} from './SearchLayer.styles'

interface ISearchProps {
  searchValue: string
}

const SearchLayer = ({ searchValue }: ISearchProps) => {
  const [searchHistory, setSearchHistory] = useState<string[]>([])
  useEffect(() => {
    if (searchValue) {
      setSearchHistory((prev) => [searchValue, ...prev])
    }
  }, [searchValue])
  return (
    <StyledSearchLayer>
      <StyledInnerLayer>
        <StyledSearchTabLeft>최근 검색어</StyledSearchTabLeft>
        <StyledTabContent>
          <StyledTabContentList>
            {searchHistory.map((item) => (
              <StyledTabContentItem key={uuidv4()}>
                <a>{item}</a>
                <StyledSearchResultEsc />
              </StyledTabContentItem>
            ))}
            {searchHistory.length === 0 && (
              <StyledTabContentNodata>최근 검색한 기록이 없습니다.</StyledTabContentNodata>
            )}
          </StyledTabContentList>
        </StyledTabContent>
        <StyledSearchTabRight>급상승 검색어</StyledSearchTabRight>
      </StyledInnerLayer>
    </StyledSearchLayer>
  )
}
export { SearchLayer }
