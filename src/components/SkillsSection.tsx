import { categories, skills } from "@/lib"
import { cn } from "@/lib/utils";
import { useState } from "react"


const SkillsSection = () => {
  const [activeCategory,setActiveCategory]=useState("all");

  const filteredSkills= skills.filter((skill)=> activeCategory === "all" || activeCategory === skill.category);
  return (
    <section 
    id="skills"
    className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Categories selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category,key)=>(
              <button key={key} 
              onClick={()=>setActiveCategory(category)}
              className={ cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category ? "bg-primary text-primary-foreground": "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              >{category}</button>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill,key)=>(
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                 <div style={{width: skill.level + "%"}} className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"/>
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>

            </div>
          ))}

        </div>
      </div>
        
    </section>
  )
}

export default SkillsSection
