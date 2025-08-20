import Header from './../components/Header'
import Footer from './../components/Footer'

type LayoutProps = {
    children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>
                <div className="bg-theme-image min-h-screen w-full flex items-center justify-center flex-col">
                    <div className="flex flex-wrap justify-center items-center w-full">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Layout
