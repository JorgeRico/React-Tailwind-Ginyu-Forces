import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <Header></Header>
        <main>
            <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="w-5xl text-center flex flex-items justify-center text-6xl">
                    <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">
                        Hello Tailwind v4!!
                    </h1>
                    <span className="ml-2">✨</span>
                </div>
            </div>     
        </main>
        <Footer></Footer>
    </>
  )
}

export default App
