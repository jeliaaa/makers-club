import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./pages/Main"

function App() {
  return (
    <div className="mb-1000">
      <Header />
      <div className="main_wrapper">
        <Routes>
          <Route path="/" index element={<Main />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
