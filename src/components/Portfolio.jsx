import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"


const Portfolio = () => {
  return (
    <section className='wrapper'>
       <Header/>
       <Home/>
       <About/>
       <Projects/>
       <Contact/>
       <Footer/>
    </section>
  )
}

export default Portfolio
