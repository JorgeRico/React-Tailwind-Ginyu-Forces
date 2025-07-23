import SmallBox from './../SmallBox'
import { Ginyu, Frieza, Recoome, Jeice, Guldo, Burter } from './../../../types/types'

function CharacterList() {

  return (
    <>
        <div className="flex flex-wrap justify-center w-full">
            <div className="flex flex-wrap items-center justify-center gap-4 p-8 w-full">
                <SmallBox 
                    name={Frieza.name}
                    image={Frieza.head_img}
                />
                <SmallBox 
                    name={Ginyu.name}
                    image={Ginyu.head_img}
                />
                <SmallBox 
                    name={Burter.name} 
                    image={Burter.head_img}
                />
                <SmallBox 
                    name={Jeice.name}
                    image={Jeice.head_img}
                />
                <SmallBox 
                    name={Guldo.name}
                    image={Guldo.head_img}
                />
                <SmallBox 
                    name={Recoome.name} 
                    image={Recoome.head_img}
                />
            </div>
        </div>
    </>
  )
}

export default CharacterList;
