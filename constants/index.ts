import { Code2, Database, Smartphone, Server, Code } from "lucide-react";

// Navigation
export const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#tech", label: "Tech Stack" },
    // { href: "#portfolio", label: "Portfolio" },
    // { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
];

// Stats
export const stats = [
    { value: 100, suffix: "+", label: "Projects Delivered" },
    { value: 50, suffix: "+", label: "Happy Clients" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 99, suffix: "%", label: "Client Satisfaction" },
];

// Services

export const services = [
    {
        title: "Elixir Development",
        description: "Real-time, fault-tolerant systems built with Elixir and Phoenix for unmatched scalability.",
        icon: Server,
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "MERN/MEAN Development",
        description: "Full-stack applications using MongoDB, Express, React/Angular, and Node.js.",
        icon: Code2,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Laravel Development",
        description: "Robust PHP applications with Laravel framework for rapid development.",
        icon: Database,
        gradient: "from-red-500 to-orange-500",
    },
    {
        title: "React Native Apps",
        description: "Cross-platform mobile applications with native performance and smooth UX.",
        icon: Smartphone,
        gradient: "from-indigo-500 to-purple-500",
    },
    {
        title: "Python/Flask Development",
        description: "Scalable Python applications with Flask framework for rapid API development and microservices.",
        icon: Code,
        gradient: "from-yellow-500 to-orange-500",
    },
];

// Tech Stack Categories
export const techCategories = [
    {
        category: "Backend",
        techs: ["Elixir", "Phoenix", "Python", "Flask", "Laravel", "Node.js", "NestJS"],
    },
    {
        category: "Frontend",
        techs: ["React", "Angular", "Next.js", "Tailwind"],
    },
    {
        category: "Mobile",
        techs: ["React Native"],
    },
    {
        category: "Databases",
        techs: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
        category: "Cloud/Infra",
        techs: ["Docker", "Kubernetes", "AWS"],
    },
];

// Why REZON Statements
export const whyRezonStatements = [
    "Full-service software partner across Php/Laravel, MEAN, MERN, Elixir/Phoenix, React Native, and Python/Flask.",
    "We design, build, update, and maintain systems for the long term—not quick patches.",
    "We write clean, maintainable code that future teams can confidently extend.",
    "We ship production-ready systems that scale with your product and business.",
];

// Project Portfolio
export interface Project {
    id: number;
    name: string;
    description: string;
    clientName: string;
    image: string;
    techStack: string[];
    category: string;
    liveUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        name: "NorthStar Payments",
        description:
            "Enterprise-grade payment processing platform handling 15M+ transactions daily with 99.99% uptime. Built for a leading financial services company serving 500+ banks and credit unions across North America.",
        clientName: "NorthStar Financial Group",
        image: "/projects/finflow.jpg",
        techStack: ["Elixir", "Phoenix", "PostgreSQL", "React", "Next.js"],
        category: "Fintech",
        liveUrl: "https://paystream-core.com",
    },
    {
        id: 2,
        name: "Regional Health Portal",
        description:
            "HIPAA-compliant telemedicine platform serving 200K+ patients monthly. Features secure video consultations, electronic health records integration, and automated appointment scheduling. Trusted by 50+ healthcare networks.",
        clientName: "Regional Health Systems",
        image: "/projects/healthcare.jpg",
        techStack: ["Node.js", "NestJS", "MongoDB", "React", "WebRTC"],
        category: "Healthcare",
        liveUrl: "https://medilink-telehealth.com",
    },
    {
        id: 3,
        name: "Global Retail Marketplace",
        description:
            "Multi-vendor e-commerce marketplace processing $50M+ in annual GMV. Features advanced inventory management, AI-powered recommendations, and real-time analytics. Powers 1,200+ merchants across 15 countries.",
        clientName: "Global Retail Partners",
        image: "/projects/ecommerce.jpg",
        techStack: ["Laravel", "PostgreSQL", "React", "Tailwind", "Redis"],
        category: "E-Commerce",
        liveUrl: "https://marketplace-pro.com",
    },
    {
        id: 4,
        name: "Workflow Enterprise",
        description:
            "Enterprise project management and collaboration platform used by Fortune 500 companies. Features real-time collaboration, automated workflows, and advanced analytics. Serves 50,000+ active users daily.",
        clientName: "Strategic Business Solutions",
        image: "/projects/taskmaster.jpg",
        techStack: ["Python", "Flask", "PostgreSQL", "Angular", "Docker"],
        category: "SaaS",
        liveUrl: "https://workflow-enterprise.com",
    },
    {
        id: 5,
        name: "Urban Food Delivery",
        description:
            "Food delivery platform with 500K+ active users across 25 cities. Features real-time GPS tracking, intelligent route optimization, and multi-restaurant ordering. Processes 10,000+ orders daily with 95% on-time delivery rate.",
        clientName: "Urban Food Network",
        image: "/projects/foodie.jpg",
        techStack: ["React Native", "Node.js", "MongoDB", "AWS"],
        category: "Mobile",
        liveUrl: "https://quickbite-delivery.com",
    },
    {
        id: 6,
        name: "InfraScale Cloud",
        description:
            "Enterprise cloud infrastructure orchestration platform managing $2M+ in monthly cloud spend. Automated scaling, cost optimization, and monitoring reduced infrastructure costs by 45% while improving performance by 60%.",
        clientName: "Enterprise Cloud Services",
        image: "/projects/cloudsync.jpg",
        techStack: ["Elixir", "Phoenix", "Kubernetes", "AWS", "Docker"],
        category: "DevOps",
        liveUrl: "https://infrascale-cloud.com",
    },
];

// Testimonials
export interface Testimonial {
    id: number;
    clientName: string;
    company: string;
    role: string;
    feedback: string;
    rating: number;
    projectName: string;
    techStack: string[];
    avatar?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        clientName: "James Mitchell",
        company: "NorthStar Financial Group",
        role: "Chief Technology Officer",
        feedback:
            "REZON transformed our payment infrastructure with their Elixir and Phoenix expertise. We now process 15M+ transactions daily with 99.99% uptime—something we never thought possible. Their deep understanding of real-time systems and fault tolerance is exceptional. The platform has been running flawlessly for 18 months with zero critical incidents.",
        rating: 5,
        projectName: "NorthStar Payments",
        techStack: ["Elixir", "Phoenix", "React"],
    },
    {
        id: 2,
        clientName: "Dr. Patricia Martinez",
        company: "Regional Health Systems",
        role: "Chief Medical Information Officer",
        feedback:
            "Working with REZON on our telemedicine platform was a game-changer. They built a HIPAA-compliant system that handles 200K+ patient consultations monthly. The platform is incredibly fast, secure, and user-friendly. Our patient satisfaction scores increased by 35%, and we've expanded to serve 50+ healthcare networks. REZON's attention to security and compliance is outstanding.",
        rating: 5,
        projectName: "Regional Health Portal",
        techStack: ["Node.js", "NestJS", "React"],
    },
    {
        id: 3,
        clientName: "Michael Chen",
        company: "Global Retail Partners",
        role: "VP of Digital Commerce",
        feedback:
            "REZON built our multi-vendor marketplace that now processes $50M+ in annual GMV. The platform handles peak traffic effortlessly during Black Friday and holiday seasons. Their Laravel and React implementation is rock-solid. Our merchant base grew from 200 to 1,200+ in just 12 months. The team's expertise in e-commerce architecture is world-class.",
        rating: 5,
        projectName: "Global Retail Marketplace",
        techStack: ["Laravel", "React", "PostgreSQL"],
    },
    {
        id: 4,
        clientName: "Sarah Williams",
        company: "Strategic Business Solutions",
        role: "VP of Product Engineering",
        feedback:
            "The WorkFlow Enterprise platform REZON built using Python and Flask has revolutionized how our Fortune 500 clients collaborate. Real-time features work flawlessly with 50,000+ concurrent users. Automated workflows have saved our clients thousands of hours. REZON's team is professional, responsive, and truly understands enterprise requirements.",
        rating: 5,
        projectName: "Workflow Enterprise",
        techStack: ["Python", "Flask", "Angular"],
    },
    {
        id: 5,
        clientName: "David Rodriguez",
        company: "Urban Food Network",
        role: "Co-Founder & CEO",
        feedback:
            "REZON created our food delivery app with React Native, and it's been phenomenal. The app is smooth, fast, and has incredible UX. We've grown from 50K to 500K+ active users in 18 months. The real-time GPS tracking and route optimization features are industry-leading. REZON understood our vision and delivered beyond expectations.",
        rating: 5,
        projectName: "Urban Food Delivery",
        techStack: ["React Native", "Node.js"],
    },
    {
        id: 6,
        clientName: "Robert Anderson",
        company: "Enterprise Cloud Services",
        role: "Director of Infrastructure",
        feedback:
            "REZON's InfraScale Cloud platform built with Elixir and Kubernetes is exceptional. They reduced our infrastructure costs by 45% while improving performance by 60%. Managing $2M+ in monthly cloud spend is now effortless. Their DevOps expertise and understanding of cloud economics is top-tier. This platform has been a game-changer for our operations.",
        rating: 5,
        projectName: "InfraScale Cloud",
        techStack: ["Elixir", "Kubernetes", "AWS"],
    },
];

// Project Submission Form
export const roleTypes = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "devops", label: "DevOps" },
    { value: "fullstack", label: "Fullstack" },
];

export const availableTechStacks = [
    "Elixir / Phoenix",
    "Python / Flask",
    "PHP / Laravel",
    "Node.js / NestJS",
    "React / Next.js",
    "React Native",
    "Angular",
    "Tailwind",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker / Kubernetes",
    "AWS",
    "Not sure / Need consultation",
];

