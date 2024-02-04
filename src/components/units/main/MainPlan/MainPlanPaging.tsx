import { useAtom } from 'jotai'
import { MouseEvent, MutableRefObject, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { MainPlanSelectedPageAtom } from '../../../..'

import { StyledPagingButton, StyledPagingList } from '../../../commons/PagingDots/PagingDots.styles'
import { StyledMainBannerList, StyledMainPlanPaging } from './MainPlan.styles'

interface IMainPlanPagingProps {
  sliderRef: MutableRefObject<React.ElementRef<typeof StyledMainBannerList> | null>
}

const MainPlanPaging = ({ sliderRef }: IMainPlanPagingProps) => {
  // 페이지네이션을 위한 Read-Write-Atom 사용
  const [selectedPage, setSelectedPage] = useAtom(MainPlanSelectedPageAtom)

  const handleClickPage = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const pageIndex = parseInt(event.currentTarget.id)
      setSelectedPage(pageIndex)

      if (sliderRef?.current) {
        if (pageIndex < selectedPage) {
          sliderRef.current.slickPrev()
        } else if (pageIndex > selectedPage) {
          sliderRef.current.slickNext()
        }
      }
    },
    [selectedPage]
  )

  return (
    <StyledMainPlanPaging>
      <StyledPagingList>
        {new Array(2).fill(null).map((_, index) => (
          <li key={uuidv4()}>
            <StyledPagingButton
              id={String(index + 1)}
              onClick={handleClickPage}
              pageClick={selectedPage === index + 1 ? 'true' : undefined}
            >
              {index + 1}
            </StyledPagingButton>
          </li>
        ))}
      </StyledPagingList>
    </StyledMainPlanPaging>
  )
}

export { MainPlanPaging }
