import { KeywordBanner } from "../Banner/KeywordBanner"
import { MainBanner } from "../Banner/MainBanner"
import { MidBanner } from "../Banner/MidBanner"
import { WeeklyBanner } from "../Banner/WeeklyBanner"
import { Curation } from "../Curation"
import { HealthyLife } from "../HealthyLife"
import { MainBrand } from "../MainBrand"
import { MainPlan } from "../MainPlan"
import { MainRecomm } from "../MainRecomm"
import { OnlyOneBanner } from "../OnlyOne"

const MainContent = () => {
  return (
    <>
      <MainBanner />
      <MidBanner />
      <Curation />
      <WeeklyBanner />
      <MainPlan />
      <KeywordBanner />
      <OnlyOneBanner />
      <MainRecomm />
      <HealthyLife />
      <MainBrand />
    </>
  )
}
export { MainContent }
