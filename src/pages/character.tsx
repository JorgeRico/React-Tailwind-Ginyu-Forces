import { useParams } from 'react-router-dom';
import Layout from './layout'
import { Ginyu, Frieza, Recoome, Jeice, Guldo, Burter } from '../types/types';
import CommonCharacter from './forces/common.tsx';
import FriezaCharacter from './forces/frieza.tsx';

function Character() {
    const { name } = useParams();
    let item       = null;

    switch(name) {
        case Ginyu.name:
            item = Ginyu;
            break;
        case Frieza.name:
            item = Frieza;
            break;
        case Recoome.name:
            item = Recoome;
            break;
        case Jeice.name:
            item = Jeice;
            break;
        case Guldo.name:
            item = Guldo;
            break;
        case Burter.name:
            item = Burter;
            break;
        default:
            item = Frieza; // Default to Frieza if no match 
            break
    }

    return (
        <>
            <Layout>
                <div className="mt-15 mb-20 flex flex-wrap items-center justify-start gap-4 px-10 py-15 w-5xl bg-blue-200/30 rounded-md">
                    {item && item.name !== 'Frieza' && 
                        <CommonCharacter item={item}></CommonCharacter>
                    }
                    {item && item.name === 'Frieza' && 
                        <FriezaCharacter item={item}></FriezaCharacter>
                    }
                </div>
            </Layout>
        </>
    )
}

export default Character;