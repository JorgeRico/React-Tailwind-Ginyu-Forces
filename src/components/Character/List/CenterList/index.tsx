import CenterBox from '../../CenterBox'
import { Ginyu, Frieza, Recoome, Jeice, Guldo, Burter } from '../../../../types/types'

function CenterList() {

  return (
    <>
        <CenterBox item={Frieza} />
        <CenterBox item={Recoome} />
        <CenterBox item={Ginyu} />
        <CenterBox item={Burter} />
        <CenterBox item={Jeice} />
        <CenterBox item={Guldo} />
    </>
  )
}

export default CenterList;
