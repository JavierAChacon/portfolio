import "./styles/App.css"
import NavBar from "./components/NavBar"
import LandPage from "./components/LandPage"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Contact from "./components/Contact"



const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <LandPage/>
      {/* <About/> */}
      <Technologies/>
      <Contact/>
    </div>
  )
}

export default App
