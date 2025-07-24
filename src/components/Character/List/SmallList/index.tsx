import SmallBox from '../../SmallBox'
import { Ginyu, Frieza, Recoome, Jeice, Guldo, Burter } from '../../../../types/types'

function CharacterList() {

  return (
    <>
        <SmallBox item={Frieza} />
        <SmallBox item={Recoome} />
        <SmallBox item={Ginyu} />
        <SmallBox item={Burter} />
        <SmallBox item={Jeice} />
        <SmallBox item={Guldo} />
    </>
  )
}

export default CharacterList;
