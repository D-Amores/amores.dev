import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import About from "@/components/sections/About"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default Home