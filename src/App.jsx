import "./styles/App.css"
import NavBar from "./components/NavBar"
import LandPage from "./components/LandPage"
import Technologies from "./components/Technologies"
import Contact from "./components/Contact"



const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <LandPage/>
      <Technologies/>
      <Contact/>
    </div>
  )
}

export default App
