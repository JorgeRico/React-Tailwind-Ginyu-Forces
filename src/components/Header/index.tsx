function Header() {
    return (
        <>
            <div className="bg-black text-white p-3 flex justify-center">
                <div className="flex justify-start w-5xl bg-black text-white">
                    <div className="text-center w-32 flex flex-wrap justify-center items-center gap-2">
                        <img className="h-14 top-1 relative" src="./src/assets/logo.png" alt="Ginyu Forces"></img>
                        <span className="font-light text-sm -top-1 relative">The Ginyu Forces</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;