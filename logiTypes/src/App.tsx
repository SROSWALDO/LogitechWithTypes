import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Categories from "./components/Categories"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categories/:category" element={<Categories/>} />
      </Routes>
    </>
  )
}

export default App
