// import images
import Hero_person from "./assets/images/Hero/HenmaScriptDraw.png";

import javascript from "./assets/images/Skills/javascript.png";
import typescript from "./assets/images/Skills/typescript.png";
import aws from "./assets/images/Skills/aws.png";
import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import cloud from "./assets/images/Services/cloud.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/HenmaScriptDraw.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/HenmaScriptDraw.png";
import Hireme_person2 from "./assets/images/Hireme/HenmaScriptDraw.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Architect",
    firstName: "Henmanuel",
    LastName: "Vargas",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Expense in Software Architecture",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "JavaScript",
        para: "Experienced JavaScript Developer Empowering Dynamic Web Solutions",
        logo: javascript,
        list: "With a strong background in JavaScript, I am equipped to develop innovative and scalable solutions in the field of web development. My in-depth knowledge of this programming language allows me to create interactive and dynamic applications, providing an exceptional user experience. I constantly stay updated on the latest trends and practices in JavaScript to deliver high-quality results and meet the specific needs of my clients.",
      },
      {
        name: "TypeScript",
        para: "Skilled TypeScript Developer Enhancing Scalable and Type-Safe Solutions",
        logo: typescript,
        list: "With extensive experience in Python, I am proficient in developing efficient and versatile solutions that meet diverse project requirements. Leveraging the power of Python, I create robust and scalable applications that streamline workflows and drive productivity. My expertise in Python allows me to leverage its extensive library ecosystem, enabling me to develop solutions with enhanced functionality and performance. Whether it's web development, data analysis, or automation, I leverage Python to deliver high-quality and effective solutions.",
      },
      {
        name: "Python",
        para: "Proficient Python Developer Delivering Efficient and Versatile Solutions",
        logo: python,
        list: "With extensive experience in TypeScript, I excel in developing robust and type-safe applications that enhance scalability and maintainability. Leveraging my expertise in TypeScript, I ensure the codebase is more structured and less prone to errors, resulting in efficient development and improved software quality. My proficiency in TypeScript enables me to create scalable web solutions with enhanced code maintainability, providing a seamless user experience.",
      },
      {
        name: "AWS",
        para: "AWS Cloud Architect Empowering Scalable and Secure Solutions",
        logo: aws,
        list: "As a skilled AWS Cloud Architect, I specialize in designing and implementing scalable and secure cloud solutions. Leveraging the power of Amazon Web Services (AWS), I help organizations optimize their infrastructure, reduce costs, and achieve high availability. With expertise in AWS services such as EC2, S3, Lambda, and CloudFormation, I architect robust and scalable cloud environments tailored to the unique requirements of each project. By implementing best practices in security, monitoring, and automation, I ensure data protection and efficient resource utilization. Collaborating with cross-functional teams, I provide strategic guidance and technical leadership throughout the cloud migration and deployment processes. With a focus on innovation and continuous improvement, I empower businesses to leverage the full potential of AWS and drive their digital transformation journey."
      },
      {
        name: "Node js",
        para: "Node.js Developer Driving Scalable and High-Performing Applications",
        logo: nodejs,
        list: "As a skilled Node.js developer, I specialize in building scalable and high-performing applications. Leveraging the power of Node.js, I design and develop server-side solutions that handle large volumes of concurrent requests and deliver optimal performance. With expertise in Node.js frameworks like Express and Nest.js, I create robust APIs and microservices that power modern web and mobile applications. By utilizing the event-driven, non-blocking architecture of Node.js, I ensure seamless and efficient communication between different components of the application, resulting in enhanced speed and responsiveness."
      },
      {
        name: "Figma",
        para: "Figma Designer Crafting Stunning and User-Centric Experiences",
        logo: figma,
        list: "As a talented Figma designer, I specialize in creating stunning and user-centric experiences. Leveraging the powerful features of Figma, I design intuitive and visually appealing interfaces for web and mobile applications. With a deep understanding of user experience (UX) principles, I create seamless workflows, captivating visuals, and interactive prototypes that bring ideas to life. Collaborating closely with development teams, I ensure smooth handoffs and pixel-perfect implementations. By utilizing Figma's collaborative features, I foster effective communication and streamline the design process, resulting in efficient and visually captivating products."
      },
      {
        name: "React js",
        para: "React.js Developer Building Powerful and Dynamic Web Applications",
        logo: reactjs,
        list: "As a skilled React.js developer, I specialize in building powerful and dynamic web applications. With expertise in React.js, I leverage its component-based architecture to create highly responsive and interactive user interfaces. Through the use of state management libraries like Redux or MobX, I ensure seamless data flow and efficient application performance. With a deep understanding of React.js best practices, I optimize code for reusability, maintainability, and scalability. Collaborating closely with cross-functional teams, I contribute to the development of robust and feature-rich applications that deliver exceptional user experiences."
      }
      ,
      {
        name: "React Native",
        para: "React Native Developer Building Cross-Platform Mobile Applications",
        logo: reactjs,
        list: "As an experienced React Native developer, I specialize in building cross-platform mobile applications. Leveraging the power of React Native, I create high-performance and visually appealing apps that work seamlessly on both iOS and Android platforms. With a deep understanding of React Native's component-based architecture, I develop reusable UI components that ensure consistency and efficiency across different devices. By utilizing popular libraries and tools like Redux and React Navigation, I implement robust state management and smooth navigation within the app. Collaborating with designers and backend developers, I deliver intuitive and user-friendly mobile experiences that meet the unique needs of clients and end-users."
      }
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web and Mobile Development",
        para: "Boost your online presence with customized, high-performance websites and mobile applications. I use technologies like React.js, Angular, and React Native to provide intuitive and engaging solutions that captivate your users.",
        logo: services_logo1,
      },
      {
        title: "Cloud Architecture and Automation",
        para: "Optimize your technology infrastructure by migrating to the cloud and automating key processes. As an AWS expert, I design scalable and secure architectures, while task automation saves time and enhances your business efficiency.",
        logo: cloud,
      },
      {
        title: "User Interface Design and Project Management",
        para: "Stand out with visually appealing and functional designs that deliver an exceptional user experience. I leverage tools like Figma to create intuitive interfaces, and with my agile project management approach, I ensure successful deliveries and effective communication.",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Henmanuel's expertise as an AWS Cloud Architect surpassed our expectations. Highly recommended for delivering scalable and secure cloud solutions.”",
        img: avatar1,
        name: "JOHNNY GUZMAN",
      },
      {
        review:
          "“Henmanuel's proficiency in React Native impressed us. Highly recommended for top-notch solutions in mobile app development.”",
        img: avatar2,
        name: "Alex Din",
      },
      {
        review:
          "“We are grateful for Henmanuel's exceptional design skills in Figma. Highly recommended for visually stunning and user-friendly designs.”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“Henmanuel's expertise in TypeScript elevated our web development projects. Highly recommended for clean and scalable coding.”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I'm Henmanuel, a passionate solutions architect and developer with extensive experience in technologies such as AWS, React Native, Figma, TypeScript, and Node.js. I offer high-quality, efficient, and creative technological solutions to help you achieve your goals. If you're looking for exceptional results, don't hesitate to contact me. I'm ready to take your projects to the next level. Let's work together to achieve the success you're looking for in your technological projects!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "henmanuelvargas@gmail.com",
        icon: GrMail,
        link: "mailto:henmanuelvargas@gmail.com",
      },
      {
        text: "+506 7271 6641",
        icon: MdCall,
        link: "https://wa.me/message/2AGAMZCPXIXNG1",
      }
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
