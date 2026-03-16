import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import { Separator } from '@/components/ui/separator'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Separator className="bg-zinc-800" />
        <About />
        <Separator className="bg-zinc-800" />
        <Skills />
        <Separator className="bg-zinc-800" />
        <Projects />
        <Separator className="bg-zinc-800" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home