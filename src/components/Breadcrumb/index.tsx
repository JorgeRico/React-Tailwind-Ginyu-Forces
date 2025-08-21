import { NavLink } from 'react-router-dom';

interface BreadcrumbProps {
    name: string;
}

function Breadcrumb({ name } : BreadcrumbProps) {

    return (
        <>
            <div className="mt-5 mb-5 flex justify-start items-center gap-1 px-10 py-3 w-5xl max-md:w-full">
                <NavLink to="/" className="flex items-center gap-2 underline">
                    <img className="h-5 font-light text-sm" src="../assets/header/logo_rounded.png" alt="Ginyu Forces" />
                </NavLink>
                /
                <NavLink to="/" className="flex items-center gap-2 underline">
                    Home
                </NavLink>
                / {name}
            </div>
        </>
    )
}

export default Breadcrumb;