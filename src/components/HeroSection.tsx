import { ArrowDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id='hero' className=' relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-3xl md:text-5xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'> Aime Pacifique</span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>{" "} Abayisenga</span>
                </h1>

                <p className='text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                    I'm a results-driven full-stack software
                     developer dedicated to delivering high-quality software solutions.

                     I create amazing and beautiful web, mobile and decentralised applications using modern technologies
                     with high level of proficiency in both back-end and front-end development.

                </p>
            <div className='opacity-0 animate-fade-in-delay-4'>

                <a href="#projects" className='cosmic-button'>
                    View My Work
                </a>
            </div>
            </div>
        </div>

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
        <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
        <ArrowDown className='h-5 w-5 text-primary cursor-pointer'/>
        </div>

    </section>
  )
}

export default HeroSection
 