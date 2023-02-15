import Header from "./Components/Home/Header"
import Home from "./Components/Home/Home"
import "./sass/style.scss"
import { BrowserRouter as Router , Routes , Route  } from "react-router-dom"
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills"
import Contact from "./Components/Contact/Contact"
import Service from "./Components/Service/Service"
import Footer from "./Components/Footer/Footer"

export default function App() {
  return (
    <>
      <Router>
      <Header />
         <Routes>
          <Route path="/" index element={<><Home /><About /> </>} />
          <Route path="/skills" element={<Skills /> } />
          <Route path="/Contact" element={<Contact /> } />
          <Route path="/Service" element={<Service /> } />
         </Routes>
         <Footer />
      </Router>
    </>
  )
}
