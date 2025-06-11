import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import StarBackground from "@/components/StarBackground"
import ThemeToggle from "@/components/ThemeToggle"

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Background effects */}

        <StarBackground/>


        {/* Theme toggle */}
        <ThemeToggle/>
        {/* Navbar */}

        <Navbar/>


        {/* Main Content */}
        <main>
          <HeroSection/>
          <AboutSection/>
        </main>

         
      
    </div>
  )
}

export default Home
