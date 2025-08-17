import CharacterList from '../components/Character/List/SmallList'
import CenterList from '../components/Character/List/CenterList';


function Home() {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center w-full">
                <div className=" flex flex-wrap items-center justify-center gap-4 px-8 w-full h-130 max-sm:hidden">
                    <img data-id="0" src="./assets/ginyu-forces.png" alt="Ginyu forces main image" className="w-auto h-130" />
                    <CenterList></CenterList>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 px-8 w-full">
                    <CharacterList></CharacterList>
                </div>
                <div className="flex flex-wrap flex-col justify-center items-center w-auto p-8 text-black-800 hover:text-shadow-black-800 hover:scale-150 transition-all duration-300">
                    <h1 className="text-3xl font-bold text-center mb-2">Ginyu Force</h1>
                    <p className="text-center text-lg mb-4">Click on a character to see more details</p>
                </div>
            </div>
        </>
    )
}

export default Home;
