import { v4 as uuidv4 } from 'uuid'
import { MAIN_PLAN_ITEMS } from './mainPlanItem'

import { StyledMainPlanProductWrap, StyledMainProductList } from './MainPlan.styles'
import { CurationCard } from '../../../commons/Card'
import { useMemo, useState } from 'react'

interface IMainPlanPrdProps {
  bannerKey: string
}

const MainPlanProduct = ({ bannerKey }: IMainPlanPrdProps) => {
  const getCurrentItems = () => {
    return MAIN_PLAN_ITEMS.filter((item) => item.key === String(bannerKey))
  }

  return (
    <>
      <StyledMainPlanProductWrap>
        {getCurrentItems().map((el) => (
          <StyledMainProductList key={uuidv4()}>
            <CurationCard
              src={el.src}
              width={el.width}
              height={el.height}
              brandName={el.brandName}
              name={el.name}
              OriginPrice={el.OriginPrice}
              CurPrice={el.CurPrice}
              flagStatus={el.flagStatus}
            />
          </StyledMainProductList>
        ))}
      </StyledMainPlanProductWrap>
    </>
  )
}

export { MainPlanProduct }
