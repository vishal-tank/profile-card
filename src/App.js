import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"
import Interest from "./components/Interest"

const App=()=> {
  return(
    <div className="container">
      <div className="border">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  )
}

export default App;
 