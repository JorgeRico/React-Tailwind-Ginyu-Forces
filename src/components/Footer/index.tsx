function Footer() {
    return (
        <>
            <div className="bg-black text-white p-10 w-full flex items-center justify-center flex-col">
                <h2 className="mt-5 mb-15 text-3xl">Sponsors</h2>
                <div className="flex flex-wrap flex-items justify-center gap-10 mb-15 w-5xl max-md:w-full">
                    <img src="../assets/sponsors/yamcha.png" alt="Yamcha" className="h-20 mr-4 bg-white p-3 hover:scale-115 transform transition-all" />
                    <img src="../assets/sponsors/capsulecorp.png" alt="Capsule Corp" className="h-20 mr-4 bg-white p-3 hover:scale-115 transform transition-all" />
                    <img src="../assets/sponsors/ribbon.png" alt="Red Ribbon" className="h-20 mr-4 bg-white p-3 hover:scale-115 transform transition-all" />
                    <img src="../assets/sponsors/babidi.png" alt="Babidi" className="h-20 mr-4 bg-white p-3 hover:scale-115 transform transition-all" />
                    <img src="../assets/sponsors/roshi.png" alt="Mutenroshi" className="h-20 mr-4 bg-white p-3 hover:scale-115 transform transition-all" />
                    <img src="../assets/sponsors/muten.png" alt="King Mutenroshi" className="h-20 mr-4 bg-white p-3 hover:scale-115 transform transition-all" />
                </div>
            </div>
            <div className="bg-black/90 text-white px-10 py-3 w-full flex items-center justify-center">
                <small>copyright &copy; 2025 Ginyu Forces. All rights reserved.</small>
            </div>
        </>
    )
}

export default Footer;