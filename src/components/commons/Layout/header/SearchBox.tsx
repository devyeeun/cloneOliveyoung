import React, { useRef, useState } from 'react'
import _ from 'lodash'
import { SearchLayer } from './SearchLayer'

import {
  StyledInputArea,
  StyledSearchBox,
  StyledSearchButton,
  StyledSearchInput,
  StyledSearchLabel,
} from './Header.styles'

const SearchBox = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const [searchValue, setSearchValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [openHidden, setOpenHidden] = useState(false)

  const handleSearchClick = () => {
    setIsOpen(true)
    setOpenHidden(true)
  }

  const handleSearchBlur = () => {
    setIsOpen(false)
    if (searchRef.current?.value === null) setOpenHidden(false)
  }

  const handleSearchSubmit = _.debounce((event) => {
    const inputValue = searchRef.current?.value

    console.log(event)

    if (event.key === 'Enter') {
      if (inputValue) {
        setSearchValue(inputValue)
      }
    }
    // 검색어 입력 후 기존 입력값 지우기
    if (searchRef.current) {
      searchRef.current.value = ''
    }
  }, 500)

  //   const onChangeWord = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     getDebounce(event.currentTarget.value)
  //   }

  return (
    <>
      <StyledSearchBox>
        <StyledInputArea>
          {/* <StyledSearchLabel openHidden={openHidden}>검색어를 입력해주세요.</StyledSearchLabel> */}
          <StyledSearchInput
            ref={searchRef}
            type='text'
            placeholder='검색어를 입력해주세요.'
            onClick={handleSearchClick}
            onBlur={handleSearchBlur}
            onKeyDown={handleSearchSubmit}
          />
        </StyledInputArea>
        <StyledSearchButton onClick={handleSearchSubmit} />

        {/* 상단 검색 레이어 영역 */}
        {isOpen && <SearchLayer searchValue={searchValue} />}
      </StyledSearchBox>
    </>
  )
}

export { SearchBox }
