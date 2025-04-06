import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./pages/Main"
import CardsSingle from "./pages/CardsSingle"

function App() {
  return (
    <div>
      <Header />
      <div className="main_wrapper">
        <Routes>
          <Route path="/" index element={<Main />} />
          <Route path="/courses/:id" element={<CardsSingle />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
