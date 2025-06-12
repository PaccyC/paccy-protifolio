

export const navLinks = [
    {
        name: "Home",
        href: "#hero"
    },
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Skills",
        href: "#skills"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "Contact",
        href: "#contacts"
    }
]

export const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 85, category: "backend" },
    { name: "GraphQL", level: 70, category: "backend" },
    { name: "Django", level: 80, category: "backend" },
    { name: "Springboot", level: 90, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "Figma", level: 45, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "JetBrains IDEs", level: 90, category: "tools" },
];


export const categories= ["all","frontend","backend","tools"]


export const projects = [
  {
    id: 1,
    title: "Etix",
    description: "A mobile application that aims at solving problems in transport by allowing the users to book buses for their journeys and are able to track the buses they have booked.",
    image: "/images/etix.png",
    tags: ["React Native", "TailwindCSS", "Socket.io","Google Maps"],
    demoUrl: "https://etix.vercel.app/",
    githubUrl: "https://github.com/ETix-org/ETix-mobile",
  },
  {
    id: 2,
    title: "Finebank",
    description:
      "A web application that helps performing banking activities like depositing,withdrawing,sending and receiving money and other bank transactions.",
    image: "/images/finebank.png",
    tags: ["Springboot", "Docker", "React","Kubernetes","Typescript"],
    demoUrl: "#",
    githubUrl: "https://github.com/PaccyC/banking-system-springboot-microservices-kafka-zipkin",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/images/ecommerce.png",
    tags: ["Nextjs", "Sanity", "Stripe","UI/UX"],
    demoUrl: "https://ecommerce-app-ivory-beta.vercel.app/",
    githubUrl: "https://github.com/PaccyC/ecommerce-app",
  },
   {
    id: 4,
    title: "Petia",
    description:
      "Mobile application that helps Pet carers to connect with doctors, see the upcoming events where they can take their pets and see some advices that they can put into action to improve their pets' lives.",
    image: "/images/petia.png",
    tags: ["React Native", "NativeWind"],
    demoUrl: "#",
    githubUrl: "https://github.com/PaccyC/petia-react-native-main",
  },
   {
    id: 5,
    title: "Snapgram",
    description:
      "A social media application that includes functionalities found in the other social media apps like Instagram",
    image: "/images/snapgram.png",
    tags: ["React", "TailwindCSS", "Shadcn"],
    demoUrl: "#",
    githubUrl: "https://github.com/PaccyC/socialmedia-app-react-appwrite-react-query",
  },
   {
    id: 6,
    title: "Vita",
    description:
      "A mobile application that can allow the patients with mental health problems talk to their doctors, schedule appointments and be able to see the available doctors that can help him/her.",
    image: "/images/vita.png",
    tags: ["React Native", "Nativewind"],
    demoUrl: "#",
    githubUrl: "https://github.com/PaccyC/vita-mobile-app",
  },
];