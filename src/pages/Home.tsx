import StarBackground from "@/components/StarBackground"
import ThemeToggle from "@/components/ThemeToggle"

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme toggle */}
        <ThemeToggle/>

        {/* Background effects */}

        <StarBackground/>


        {/* Navbar */}

        {/* Main Content */}

         
      
    </div>
  )
}

export default Home
