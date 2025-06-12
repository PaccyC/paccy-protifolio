import { Briefcase, Code, User } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Full-Stack Developer & Tech Enthusiast</h3>
            <p className="text-muted-foreground">
              With over 3 years of experience in web,mobile and blockchain development,
              I specialize in creating the applications with responsive UIs,but also with strong backe-end support
              using modern technologies and programming best practices.
            </p>

            <p className="text-muted-foreground">I am passionate about solving world's problems using Tech and I keep learning new things 
              so that I don't get behind in this tech industry.
            </p>

            <div className=" flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
               <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </a>
            </div>

          </div>
          <div className=" grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className=" flex items-start gap-4">
                <div className=" p-4 rounded-full bg-primary/10">
                <Code className="w-6 h-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">Creating responsive websites and applications using modern frameworks</p>
                </div>
              </div>
            </div>
             <div className="gradient-border p-6 card-hover">
                <div className=" flex items-start gap-4">
                <div className=" p-4 rounded-full bg-primary/10">
                <User className="w-6 h-6 text-primary"/>
                </div>
                 <div className="text-left">
                  <h4 className="text-lg font-semibold">UI/UX Design</h4>
                  <p className="text-muted-foreground">Designing intuitive user interfaces and seamless user experiences</p>
                </div>
              </div>
             </div>
              <div className="gradient-border p-6 card-hover">
                  <div className=" flex items-start gap-4">
                <div className=" p-4 rounded-full bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary"/>
                </div>
                 <div className="text-left">
                  <h4 className="text-lg font-semibold">Project Management</h4>
                  <p className="text-muted-foreground">Leading projects from ideation to completion with agile methodologies</p>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
        
    </section>
  )
}

export default AboutSection
