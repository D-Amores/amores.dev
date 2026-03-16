import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import About from "@/components/sections/About"
import Hero from "@/components/sections/Hero"
import Skills from "@/components/sections/Skills"

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  )
}

export default Home