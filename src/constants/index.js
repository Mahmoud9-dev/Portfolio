export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: '/assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: '/assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: '/assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: '/assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Brainwave - Modern UI/UX Website',
    desc: 'Revolutionize your workflow with Brainwave AI Services, a cutting-edge platform designed to enhance productivity and innovation. Leveraging advanced artificial intelligence, it offers smart solutions for complex problems with unparalleled efficiency.',
    subdesc:
      'Built with a focus on modern UI/UX design principles using technologies like Three.js, Tailwind CSS, JavaScript, and Framer Motion, Brainwave AI Services ensures a seamless, interactive, and visually captivating user experience.',
    href: 'https://brainwave-mnd.netlify.app/',
    texture: '/textures/project/project7.mp4',
    logo: '/assets/project-logo7.png',
    logoStyle: {
      backgroundColor: '#0F0E17', // A deep dark hue for the logo background, matching the website's main theme
      border: '0.2px solid #2A2A35', // Subtle dark gray for a soft yet noticeable border
      boxShadow: '0px 0px 60px 0px #E4585833', // A light glow effect inspired by the purple/pink tones in your design
    },

    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      // {
      //   id: 3,
      //   name: 'TypeScript',
      //   path: '/assets/typescript.png',
      // },
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },

  {
    title: 'Iphone - Smartphone Clone',
    desc: 'Experience the sleek and modern design of the iPhone 15 clone. This meticulously crafted replica captures the essence of Apple’s iconic smartphone with a focus on attention to detail and seamless functionality',
    subdesc:
      'Built with advanced web technologies such as Three.js, Tailwind CSS, JavaScript, and Framer Motion, the iPhone 15 clone delivers a visually stunning and highly responsive user experience.',
    href: 'https://mnd-iphone-v1.netlify.app/',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/project-logo6.png',
    logoStyle: {
      backgroundColor: '#1C1C1C',
      border: '0.2px solid #2E2E2E',
      boxShadow: '0px 0px 60px 0px #FFFFFF1A',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      // {
      //   id: 3,
      //   name: 'TypeScript',
      //   path: '/assets/typescript.png',
      // },
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },

  // {
  //   title: 'Podcastr - AI Podcast Platform',
  //   desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
  //   subdesc:
  //     'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
  //   href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
  //   texture: '/textures/project/project1.mp4',
  //   logo: '/assets/project-logo1.png',
  //   logoStyle: {
  //     backgroundColor: '#2A1816',
  //     border: '0.2px solid #36201D',
  //     boxShadow: '0px 0px 60px 0px #AA3C304D',
  //   },
  //   spotlight: '/assets/spotlight1.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'LiveDoc - Real-Time Google Docs Clone',
  //   desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
  //   subdesc:
  //     'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
  //   href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
  //   texture: '/textures/project/project2.mp4',
  //   logo: '/assets/project-logo2.png',
  //   logoStyle: {
  //     backgroundColor: '#13202F',
  //     border: '0.2px solid #17293E',
  //     boxShadow: '0px 0px 60px 0px #2F6DB54D',
  //   },
  //   spotlight: '/assets/spotlight2.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'CarePulse - Health Management System',
  //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
  //   subdesc:
  //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
  //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
  //   texture: '/textures/project/project3.mp4',
  //   logo: '/assets/project-logo3.png',
  //   logoStyle: {
  //     backgroundColor: '#60f5a1',
  //     background:
  //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
  //     border: '0.2px solid rgba(208, 213, 221, 1)',
  //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
  //   },
  //   spotlight: '/assets/spotlight3.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
  };
};

export const workExperiences = [
  // {
  //   id: 1,
  //   name: 'Framer',
  //   pos: 'Lead Web Developer',
  //   duration: '2022 - Present',
  //   title:
  //     'Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.',
  //   icon: '/assets/framer.svg',
  //   animation: 'victory',
  // },
  // {
  //   id: 2,
  //   name: 'Figma',
  //   pos: 'Web Developer',
  //   duration: '2020 - 2022',
  //   title:
  //     'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.',
  //   icon: '/assets/figma.svg',
  //   animation: 'clapping',
  // },
  // {
  //   id: 3,
  //   name: 'Notion',
  //   pos: 'Junior Web Developer',
  //   duration: '2019 - 2020',
  //   title:
  //     'Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.',
  //   icon: '/assets/notion.svg',
  //   animation: 'salute',
  // },

  {
    id: 4,
    name: 'Internship',
    pos: 'Software Developer',
    duration: '2022 - 2023',
    title:
      'MongoDB, Express.js, React, and Node.js serve as my go-to MERN stack for creating full-stack web applications. I use it to bring designs to life, allowing stakeholders to experience complete functionality and data flow before final deployment.',
    icon: '/assets/intern.svg',
    animation: 'victory',
  },
];
