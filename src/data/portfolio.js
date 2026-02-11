const about = {
  title: "Hi 👋 , I am Enmanuel Jirón",
  description:
    "I'm Js/Typescript Full Stack Developer with a strong focus on building reliable, efficient, and user-centered web applications. Passionate about solving real-world problems through clean architecture, thoughtful design, and modern practices.",
  github: "https://github.com/jironDev",
  linkedin: "https://www.linkedin.com/in/enmanuel-jiron/",
  cv: "#",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "Backend Coffee Crm",
      short:
        "Features JWT authentication, Bcrypt password hashing, full CRUD operations.",
      description:
        "A backend CRM platform designed to streamline client and sales management for businesses. Features include secure user authentication and authorization, customer record and lead management, activity tracking, sales pipeline management, and data-driven reporting. Built full CRUD operations with scalability and data integrity in mind, the application leverages modern development practices for performance and maintainability.",
      technologies: ["#TypeScript", "#Node.js", "#Express.js", "#PostgreSQL", "#Prisma", "#JWT", "#exceljs", ],
      github: "#",
      demo: "#",
    },
    {
      title: "Frontend Coffee Crm",
      short:
        "Features JWT authentication, import and export excel files, responsive design.",
      description:
        "A modern and scalable React application serving as the user interface for Coffee CRM—a sales and client management platform optimized for businesses handling digital accounts (e.g., streaming subscriptions, SaaS tools). Integrates secure JWT-based authentication, intuitive dashboards, automated invoicing, supplier and reseller reporting, debt tracking, and alerting. Designed for professional usability with Bootstrap and Material UI, enabling real-time data interaction and efficient workflows.",
      technologies: ["#TypeScript", "#React.js", "#CSS", "#Bootstrap", "#MUI", "#Vite", "#React Router", "#JWT"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Application Frontend",
      short:
        "Responsive design, Features asynchronous API consumption, input management and error handling.",
      description:
        "A responsive React app for real-time weather information, allowing users to search cities and view current conditions, temperature, and weather icons via the OpenWeatherMap API. Developed with React and Vite for fast performance, with custom CSS for mobile-friendly design. Features asynchronous API consumption, input management, error handling, and a clean, modern interface.",
      technologies: [
        "#JavaScript",
        "#React.js",
        "#CSS",
        "#Vite",    
        ],
      github: "#",
      demo: "#",
    },
  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "Frontend Developer",
      company: "XYZ Company",
      duration: "Mar 2021 - Present",
      description:
        "I am currently working as a frontend developer at XYZ Company. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi incidunt, repellendus doloribus voluptates debitis porro ut illo eaque repudiandae corporis tenetur unde quae consectetur obcaecati iusto nostrum expedita iste! ",
    },
  ],
};

const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Languages & Frameworks",
      skills: [
        "#HTML",
        "#CSS",
        "#JavaScript",
        "#TypeScript",
        "#React.js",
        "#Next.js",
        "#MUI",
        "#Node.js",
        "#Express.js",
      ],
    },
    {
      title: "Databases",
      skills: ["#MongoDB", "#PostgreSQL", "#Firebase"],
    },
    {
      title: "Others",
      skills: ["#Git", "#Jest", "#CI/CD", "#AdobeXD"],
    },
  ],
};

export { about, projects, experience, skills };
