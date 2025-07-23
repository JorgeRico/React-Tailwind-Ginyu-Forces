import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home'

function App() {

  return (
    <>
        <Header></Header>
        <main>
            <div className="min-h-screen w-full bg-gradient-to-br from-sky-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="border w-auto text-center flex flex-items justify-center">
                    <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">
                        Hello Tailwind v4!!
                    </h1>
                    <span className="ml-2">✨</span>
                </div>
            </div>
            <div className="min-h-screen w-full bg-gradient-to-br from-sky-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="flex flex-items justify-center w-auto">
                    <Home></Home>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </>
  )
}

export default App
