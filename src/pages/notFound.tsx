import Layout from './layout'
import { NavLink } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <Layout>
                <div className="min-h-screen w-full flex items-center justify-center flex-col">
                    <div className="mb-20 px-10 py-5 w-4xl top-20 max-md:w-full">
                        <p className="text-3xl font-bold text-center mb-10 animate-pulse">
                            Oops! The page you are looking for does not exist.  
                        </p>
                        <img src="../assets/shenron.png" alt="Not Found" className="w-3xl" />
                        <NavLink to="/" className="flex justify-center underline font-bold mt-10">
                            back to home page
                        </NavLink>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default NotFound;