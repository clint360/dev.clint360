import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  jobit,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  linkview,
  imessage,
  xchange,
  twitter,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  crypwatch,
  tripguide,
  threejs,
  schoolsavvy
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Technical Writer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Graphics Designer",
    icon: web,
  },
  {
    title: "Sound Designer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "OptimU",
    icon: "https://media.istockphoto.com/id/1287215787/vector/red-lines-geometric-vector-logo-letter-u.jpg?s=612x612&w=0&k=20&c=hs3en9psA0fr2KGLVHcfcSkZf3LJlOub17SUKLHgkOw=",
    iconBg: "#000",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Rebase Academy",
    icon: "data:image/png;base64,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",
    iconBg: "#000",
    date: "August 2023",
    points: [
      "Developing requested mobile Applications with React Native",
      "Collaborating with classmates to realize Apple's iMessage clone",
      "Implementing responsive design accross mobile devices.",
      "Reviewing and Merging Code on GitHub.",
    ],
  },
  {
    title: "Full stack Developer (Intern)",
    company_name: "Rebase Solutions Inc",
    icon: "https://media.licdn.com/dms/image/D4E03AQHnJVjI97sTXw/profile-displayphoto-shrink_800_800/0/1688040213877?e=2147483647&v=beta&t=Dvp4cvJtuMjYNugqfdWnrWqDPnVRcnp8kp39GW5pGKs",
    iconBg: "#fff",
    date: "August 2023 - September 2023",
    points: [
      "Developing and maintaining web and Desktop applications using React.js, Firebase, Rust and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I'm truly marveled at how Clint is able to bring my figma designs to life, even the ones I thought should be very difficult. Clint is indeed Skillful.",
    name: "Boanong Joshua",
    designation: "UI/UX Designer",
    company: "OptimU",
    image: "https://media.licdn.com/dms/image/C5603AQHPgcHCnvja0A/profile-displayphoto-shrink_800_800/0/1553244387743?e=2147483647&v=beta&t=ySrlKHPHsPGRUaNL2hb-MQ2Tc_IjpqKU1XTbSGN6MF8",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Clint does.",
    name: "Mbah Daniel",
    designation: "CEO",
    company: "Elite Panel237",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Clint has been the most 'open-to-learn-new-things' student we have had since our school started",
    name: "Ngani Faith",
    designation: "Magaging Director",
    company: "Rebase Academy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYI05R8njC7PiGxxK_l04fxSBAVOV68Op0S-HaNH48kFJ480Y-V7ouPY7jC6RINKdxVNE&usqp=CAU",
  },
];

const projects = [
  {
    name: "Crypwatch",
    description:
      "Web-based platform that allows users to view and search crypto currencies to see current rankings, market value and total market capital. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: crypwatch,
    source_code_link: "https://github.com/clint360/Crypwatch",
  },
  {
    name: "SchoolSavvy",
    description:
      "A web and desktop application to be used by schools or other educational institutions to keep track of admissions, payments and other related stats built on ReactJS and Electron. ",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "electronJS",
        color: "green-text-gradient",
      },
      {
        name: "react-google-charts",
        color: "pink-text-gradient",
      },
    ],
    image: schoolsavvy,
    source_code_link: "https://github.com/clint360/StudentManagement",
  },
  {
    name: "Twitter Clone",
    description:
      "A limited twitter clone where users can sign up, get in to their accounts, tween and get like and comments",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/twitter-clone",
  },
  {
    name: "Xchange",
    description:
      "A currency Exchange application and wallet simulation  that allows users to simulate thier finances in different currency wallets and perform conversions. This can help you quickly decide how much you want to send to someone in another country.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
    ],
    image: xchange,
    source_code_link: "https://github.com/clint360/xchange",
  },
  {
    name: "Linkview",
    description:
      "A FullStack link preview application where people can see what a site looks like before getting to actually click and get into the site. A work in progress to generate a package which can be intergrated for use in other applications.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "reactJS",
        color: "pink-text-gradient",
      },
    ],
    image: linkview,
    source_code_link: "https://github.com/clint360/linkview",
  },
  {
    name: "iMessage Clone",
    description:
      "A FullStack messaging application where users can use to send and recieve message with media, emojis and links.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "stream",
        color: "pink-text-gradient",
      },
    ],
    image: imessage,
    source_code_link: "https://github.com/clint360/imessage-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
