import {
  AboutData,
  BaseInfos,
  ProjectData,
  servicesDatas,
  skills,
} from "@/types/types";

export const BaseInfo: BaseInfos = {
  name: "Prabhat Kumar",
  position: "Full Stack Web Developer",
  description:
    "I’m a full-stack web developer skilled in the MERN stack and modern tools like Next.js, Tailwind CSS, and React Native. Passionate about building scalable, user-friendly applications, I aim to deliver innovative solutions. Currently pursuing a B.Tech in Computer Science, I’m always learning and growing in the tech world.",
  profilePic: "/images/hero.png",
};

export const aboutInfo: AboutData = {
  title: "Crafting Web Application with Passion and Precision",
  description:
    "I am a full-stack web developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) with expertise in Next.js, Tailwind CSS, and React Native. I build scalable, responsive applications and use tools like GitHub, VS Code, and Vercel for seamless development and deployment. Currently pursuing a B.Tech in Computer Science, I focus on creating high-quality, user-centric solutions while continuously evolving my skills to keep up with industry trends",

  skills: [
    {
      name: "Frontend Development",
      color: "bg-blue-800",
    },
    {
      name: "Backend Development",
      color: "bg-red-800",
    },
    {
      name: "Full Stack Development",
      color: "bg-green-800",
    },
    {
      name: "Mobile App Development",
      color: "bg-yellow-800",
    },
  ],
  stats: [
    {
      name: "Experience",
      value: "3+",
      description: "Months of Industrial Experience",
      image: "/images/experience.png",
    },
    {
      name: "Projects",
      value: "10+",
      description: "Projects",
      image: "/images/completed.png",
    },
  ],
};

export const servicesData: servicesDatas[] = [
  {
    id: 1,
    title: " Web Applications",
    description: "Tailored web apps built with the latest technologies.",
    icon: "/images/s1.png",
  },
  {
    id: 2,
    title: "E-commerce Websites",
    description:
      "Secure online stores with user-friendly shopping and payments.",
    icon: "/images/s2.png",
  },
  {
    id: 3,
    title: "API Integration",
    description:
      "Seamless integration for smooth data sharing and functionality.",
    icon: "/images/s3.png",
  },
  {
    id: 4,
    title: "User Interfaces",
    description:
      "Engaging, responsive front-end designs for better user experiences.",
    icon: "/images/s4.png",
  },
  {
    id: 5,
    title: "Mobile Applications",
    description: "Cross-platform mobile apps for iOS and Android devices.",
    icon: "/images/smartphone.png",
  },
  {
    id: 6,
    title: "Real-Time Features",
    description: "Add live chat, notifications, and real-time data updates.",
    icon: "/images/s6.png",
  },
  {
    id: 7,
    title: "Speed Optimization",
    description: "Boost performance with faster load times and optimization.",
    icon: "/images/s7.png",
  },
  {
    id: 8,
    title: "Website Management",
    description: "Easy content management systems with flexible controls.",
    icon: "/images/s8.png",
  },
];

export const projectData: ProjectData[] = [
  {
    id: 1,
    name: "Full Stack Quiz App",
    url: "https://quiz-app-frontend-prabhat.vercel.app/",
  },
  {
    id: 4,
    name: "3D Solar System",
    url: "https://nasa-space-app-challenge-beta.vercel.app/",
  },
  {
    id: 2,
    name: "Cryptoverse",
    url: "https://crypto-two-fawn.vercel.app/",
  },

  {
    id: 5,
    name: "Weather App",
    url: "https://weatherio-prabhat.vercel.app/#/current-location",
  },
  {
    id: 3,
    name: "Bubble Game",
    url: "https://bubblegame-prabhat.vercel.app/",
  },
];

export const skillsData: skills[] = [
  {
    id: 1,
    title: "React",
    image: "/images/react.svg",
  },
  {
    id: 2,
    title: "CSS",
    image: "/images/css.svg",
  },
  {
    id: 3,
    title: "JavaScript",
    image: "/images/js.svg",
  },
  {
    id: 4,
    title: "TypeScript",
    image: "/images/ts.svg",
  },
  {
    id: 5,
    title: "HTML",
    image: "/images/html.svg",
  },
  {
    id: 6,
    title: "Node JS",
    image: "/images/node.svg",
  },
  {
    id: 7,
    title: "MongoDB",
    image: "/images/mongo.svg",
  },

  {
    id: 8,
    title: "Express JS",
    image: "/images/expressjs.png",
  },
  {
    id: 9,
    title: "Tailwind CSS",
    image: "/images/tailwind.svg",
  },
  {
    id: 10,
    title: "Next JS",
    image: "/images/nextjs.png",
  },
  {
    id: 11,
    title: "React Native",
    image: "/images/react.svg",
  },
  {
    id: 12,
    title: "C",
    image: "/images/c.svg",
  },

  {
    id: 13,
    title: "Prisma",
    image: "/images/prisma.png",
  },
  {
    id: 14,
    title: "Redux",
    image: "/images/redux.svg",
  },
  {
    id: 15,
    title: "REST API",
    image: "/images/restapi.svg",
  },
  {
    id: 16,
    title: "Git",
    image: "/images/git.png",
  },
  {
    id: 17,
    title: "GitHub",
    image: "/images/github.png",
  },
  {
    id: 18,
    title: "VS Code",
    image: "/images/vscode.png",
  },
  {
    id: 19,
    title: "Vercel",
    image: "/images/vercel.png",
  },

  {
    id: 21,
    title: "Netlify",
    image: "/images/netlify.png",
  },
  {
    id: 22,
    title: "Cpp",
    image: "/images/cpp.svg",
  },
  {
    id: 23,
    title: "GitLab",
    image: "/images/gitlab.svg",
  },
];

export const clientReviews = [
  {
    name: "John Doe",
    review:
      "Exceptional service! The team delivered exactly what we needed on time. Very professional",
    rating: 5,
    profession: "Marketing Manager",
    image: "/images/u1.jpg",
  },
  {
    name: "Jane Smith",
    review:
      "Highly skilled developers who understand the client's vision and execute perfectly.",
    rating: 4.8,
    profession: "Business Owner",
    image: "/images/u2.jpg",
  },
  {
    name: "Michael Johnson",
    review:
      "Great communication and excellent results. Our new site performs beautifully.",
    rating: 4.6,
    profession: "Project Coordinator",
    image: "/images/u3.jpg",
  },
  {
    name: "Emily Brown",
    review:
      "Professional, efficient, and highly knowledgeable. Would definitely recommend their services!",
    rating: 4.9,
    profession: "Creative Director",
    image: "/images/u4.jpg",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Top Web Development Trends to Watch in 2024",
    summary:
      "Explore the key web development trends for 2024 and their impact on your business.",
    date: "August 18, 2024",
    image: "/images/b1.jpg",
  },
  {
    id: 2,
    title: "Why Your Business Needs a Custom Web Application",
    summary:
      "Discover why custom web applications are crucial for driving business growth and efficiency.",
    date: "August 10, 2024",
    image: "/images/b2.jpg",
  },
  {
    id: 3,
    title: "The Importance of Website Speed Optimization",
    summary:
      "Understand how website speed impacts user experience and learn essential optimization tips.",
    date: "July 25, 2024",
    image: "/images/b3.jpg",
  },
];

export const contactData = {
  linkedIn: "https://www.linkedin.com/in/real-prabhat/",
  email: "pk993105@gmail.com",
  linkerTree: "https://linktr.ee/real_prabhat",
};
