import './module.css';
import { NavLink } from 'react-router-dom';
import SectionBox from './section.tsx';

type Character = {
    id          : string,
    name        : string,
    profile_img : string,
    description : string,
    gender      : string,
    age         : string,
    role        : string,
    height      : string,
}

interface SmallBoxProps {
    item : Character;
}

function StatsBox({ item }: SmallBoxProps) { 
    return (
        <div data-id={item.id} className="hidden flex-wrap items-center">
            <img src={item.profile_img} alt={item.description} className={`w-auto ${item.height} delayedShow`} />
            <div className="rounded-full items-center justify-center text-white text-xl bg-blue-400/50 border-blue-300 border-1 w-9 h-9 top-30 absolute right-8 hidden max-md:flex animate-pulse">
                <NavLink to={`/character/${item.name}`}>
                    <strong>i</strong>
                </NavLink>
            </div>
            <div className="bg-gray-400/30 text-white rounded-md px-7 overflow-hidden animateCustom border-emerald-600 border-b-3 border-t-3 max-w-96 max-h-70 max-md:hidden">
                <SectionBox
                    image="./assets/balls/ball1.png"
                    text="Name:"
                    name={item.name}
                />
                <SectionBox 
                    image="./assets/balls/ball2.png"
                    text="Gender:"
                    name={item.gender}
                />
                <SectionBox 
                    image="./assets/balls/ball3.png"
                    text="Age:"
                    name={item.age}
                />
                <SectionBox
                    image="./assets/balls/ball4.png"
                    text="Role:"
                    name={item.role}
                />
                <section className="flex flex-wrap mt-4 mb-7">
                    <NavLink to={`/character/${item.name}`} className="flex flex-wrap items-justify items-center hover:underline text-black">
                        <img src="./assets/balls/balls-online.png" className="w-20"></img>
                        <span className="ml-3.5 w-50 text-emerald-700">+ Click for more info</span>
                    </NavLink>
                </section>
            </div>
        </div>
    );
};



export default StatsBox;