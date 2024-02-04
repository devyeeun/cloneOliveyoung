import { useAtom } from 'jotai'
import { MouseEvent, MutableRefObject, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { MainRecommSelectedPageAtom } from '../../../..'

import { StyledPagingButton, StyledPagingList } from '../../../commons/PagingDots/PagingDots.styles'
import { StyledMainRecommList, StyledMainRecommPaging } from './MainRecomm.styles'

interface IMainRecommPagingProps {
  mainRecommRef: MutableRefObject<React.ElementRef<typeof StyledMainRecommList> | null>
}

const MainRecommPaging = ({ mainRecommRef }: IMainRecommPagingProps) => {
  const [selectedPage, setSelectedPage] = useAtom(MainRecommSelectedPageAtom)

  const handleClickPage = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const pageIndex = parseInt(event.currentTarget.id)
      setSelectedPage(pageIndex)

      if (mainRecommRef?.current) {
        if (pageIndex < selectedPage) {
          mainRecommRef.current.slickPrev()
          
        } else if (pageIndex > selectedPage) {
          mainRecommRef.current.slickNext()
        }
      }
    },
    [selectedPage, setSelectedPage, mainRecommRef]
  )

  return (
    <StyledMainRecommPaging>
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
    </StyledMainRecommPaging>
  )
}

export { MainRecommPaging }
