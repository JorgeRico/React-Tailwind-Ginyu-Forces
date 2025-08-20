import StatsBox from '../../StatsBox'
import { Ginyu, Frieza, Recoome, Jeice, Guldo, Burter } from '../../../../types/types'

function CenterImageList() {

  return (
    <>
        <StatsBox item={Frieza} />
        <StatsBox item={Recoome} />
        <StatsBox item={Ginyu} />
        <StatsBox item={Burter} />
        <StatsBox item={Jeice} />
        <StatsBox item={Guldo} />
    </>
  )
}

export default CenterImageList;
