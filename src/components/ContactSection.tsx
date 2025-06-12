import { cn } from "@/lib/utils";
import {
  Instagram,
  Linkedin,

  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";


const ContactSection = () => {
   
    const [isSubmitting,setIsSubmitting]=useState(false)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

         setIsSubmitting(true)

        setTimeout(()=>{
          toast("Message sent!")
          setIsSubmitting(false)
        },1500)

    }
  return (
    <section id="contacts" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    className="text-muted-foreground  hover:text-primary transition-colors duration-300"
                    href="tel:paccy7002@gmail.com"
                  >
                    paccy7002@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    className="text-muted-foreground  hover:text-primary transition-colors duration-300"
                    href="tel:+250796168499"
                  >
                    +250796168499
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground  hover:text-primary transition-colors duration-300">
                    Kigali,Rwanda
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input type="text" name="name" id="name" required 
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Paccy..."
                />
              </div>
               <div className="">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input type="email" name="email" id="email" required 
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="paccy@gmail.com"
                />
              </div>
              <div className="">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea  name="message" id="message" required 
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your message here..."
                />
              </div>

              <button 
              type="submit" 
              disabled={isSubmitting}
              className={cn("cosmic-button cursor-pointer w-full flex items-center justify-center gap-2",

              )}>
                 {isSubmitting ? "Sending...": "Send Message"}
                 <Send size={16}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
