import "./styles/App.css"
import NavBar from "./components/NavBar"
import LandPage from "./components/LandPage"
import About from "./components/About"
import Technologies from "./components/Technologies"



const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <LandPage/>
      {/* <About/> */}
      <Technologies/>
    </div>
  )
}

export default App
