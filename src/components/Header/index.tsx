import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="bg-black text-white p-3 flex justify-center w-full z-10">
                <div className="flex flex-row w-5xl bg-black text-white flex-start justify-between max-md:w-full">
                    <NavLink to="/" className="flex flex-col items-center justify-center gap-2 w-36">
                        <img className="h-16 relative" src="../assets/header/logo.png" alt="Ginyu Forces"></img>
                    </NavLink>
                    <div className="gap-1 text-sm w-auto flex items-end justify-center group hover:underline hover:gap-2 px-4">
                        <img className="relative h-8 bottom-1 group-hover:bottom-2 group-hover:scale-135" src="../assets/header/frieza.png" alt="Ginyu Forces"></img>
                        <NavLink to="/contact" className="relative bottom-2 group-hover:bottom-3 group-hover:scale-115 uppercase">hire us</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;