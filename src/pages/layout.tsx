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
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Layout
