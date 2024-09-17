export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link?: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Linkedin",
    icon: "linkedin",
    username: "firdaus-mazumdar-1540412b4",
    description:
      "Connect with me on LinkedIn to explore my professional journey. As an aspiring Software Engineer graduating in 2025, I'm eager to learn, contribute, and network with industry professionals. My profile showcases my academic projects, internships, and the skills I'm developing to make an impact in the tech world.",
    color: "#0077b5",
    buttonTitle: "Let's Connect!",
    buttonLink: "https://www.linkedin.com/in/firdaus-mazumdar-1540412b4",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@ixfirdaus22",
    description: "Dive into my code repositories on GitHub. Here, you'll find a collection of my personal projects, contributions to open-source initiatives, and academic work. From web applications to machine learning experiments, my GitHub is a testament to my hands-on experience and passion for coding.",
    buttonTitle: "Follow",
    buttonLink: "https://github.com/ixfirdaus22",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Instagram",
    icon: "instagram",
    username: "ixfirdaus",
    description: "Follow my Instagram for a glimpse into my life beyond code. I share moments from tech events, hackathons, and my journey as a budding software engineer. It's also where I connect with fellow tech enthusiasts and share inspirational tech-related content.",
    buttonTitle: "Follow",
    buttonLink: "https://instagram.com/puchamaine",
    color: "#f2003c",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Tech Stack",
    image: "/IMG_1830.jpg",
    equipments: [
      {
        title: "Java",
      },
      {
        title: "Python",
      },
      {
        title: "JavaScript",
      },
      {
        title: "HTML/CSS",
      },
      {
        title: "ReactJS",
      },
      {
        title: "NodeJS",
      },
      {
        title: "NextJS",
      },
      {
        title: "SQL",
      },
      {
        title: "Git/GitHub",
      },
      {
        title: "AWS Cloud",
      },
      {
        title: "Machin Learning",
      },
      {
        title: "IBM Watson Studio",
      },
      {
        title: "Agile",
      },
      {
        title: "DevOps",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "X (Twitter)",
    icon: "X",
    username: "@ixfirdaus",
    description: "Passionate about learning and exploring. Follow me on X for real-time updates on my tech journey, thoughts on the latest industry trends, and engaging discussions about software development. I also use this platform to connect with the global tech community and share valuable resources.",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/ixfirdaus",
    color: "#000000",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Project1",
    icon: "github",
    //stars: 19,
    color: "#070707",
    //buttonLink: "https://github.com/batuhanbilginn/ai-blog-post-generator",
  },
  {
    layout: "2x1",
    type: "project",
    title: "project2",
    icon: "github",
    color: "#070707",
    //buttonLink: "https://github.com/batuhanbilginn/makr-ai",
    //stars: 73,
  },
  // {
  //   layout: "2x1",
  //   type: "mentor",
  //   title: "Next.js Mentorship",
  //   icon: "superpeer",
  //   promotion: "MAKRDEVFELLOWS",
  //   oldPrice: "$100",
  //   price: "$50",
  //   buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
  // },
  {
    layout: "2x1",
    type: "project",
    title: "Internship1",
    icon: "github",
    color: "#070707",
    //buttonLink: "https://github.com/batuhanbilginn/makr-ai",
    //stars: 73,
  },
  {
    layout: "2x2",
    type: "social",
    title: "LeetCode",
    username: "@ixfirdaus",
    description:
      "Explore my problem-solving journey on LeetCode. This profile showcases my ability to tackle complex algorithmic challenges and data structure problems. With [X] problems solved across easy, medium, and hard difficulties, my LeetCode activity demonstrates my commitment to continuous learning and improving my coding skills. I regularly participate in contests and contribute to discussions, aiming to enhance my analytical thinking and code optimization techniques. Check out my solutions to see my coding style and problem-solving approach in action.",
    icon: "leetcode",
    color: "#070707",
    buttonTitle: "Let's Solve!",
    buttonSecondaryText: "50",
    buttonLink:
      "https://www.leetcode.com/ixfirdaus",
  },
  // {
  //   layout: "2x1",
  //   type: "mentor",
  //   title: "Supabase Mentorship",
  //   icon: "superpeer",
  //   promotion: "MAKRDEVFELLOWS",
  //   oldPrice: "$100",
  //   price: "$50",
  //   buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
  // },
  {
    layout: "2x1",
    type: "project",
    title: "Internship2",
    icon: "github",
    color: "#070707",
    //buttonLink: "https://github.com/batuhanbilginn/makr-ai",
    //stars: 73,
  },
  {
    layout: "2x1",
    type: "project",
    title: "Certificate",
    icon: "github",
    color: "#070707",
    //buttonLink: "https://github.com/batuhanbilginn/makr-ai",
    //stars: 73,
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Hey Everyone!",
    image: "/FullSizeRender.jpg",
    description: "I'm Firdaus Mazumdar, a Computer Science Engineering student specializing in AI and ML. Set to graduate in 2025, I'm currently gaining hands-on experience as a Machine Learning intern. My passion lies in software development and exploring cutting-edge technologies. Proficient in Java and Python, I've also honed my skills in AWS Cloud. Originally from Assam, I've embraced the tech hub of Navi Mumbai for my studies. As I approach my final year, I'm actively seeking new opportunities, expanding my network, and pushing the boundaries of my knowledge in this ever-evolving field.",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Certificate",
    icon: "github",
    color: "#070707",
    //buttonLink: "https://github.com/batuhanbilginn/makr-ai",
    //stars: 73,
  },
  {
    layout: "2x2",
    type: "social",
    title: "SuperProf",
    icon: "superprof",
    description: "Discover my tutoring services on Superprof, where I share my knowledge and passion for computer science and software engineering and Maths and Physcis too. As an aspiring software engineer and current student, I offer personalized tutoring sessions in various programming languages, data structures, algorithms, and web development technologies. My teaching approach focuses on practical, hands-on learning to help students grasp complex concepts and apply them to real-world scenarios. Whether you're a beginner looking to start your coding journey or a fellow student seeking to excel in your CS courses, I'm here to guide and support your learning process. Check out my profile for available subjects, student reviews, and booking information.",
    buttonTitle: "Let's Code",
    buttonLink: "https://www.superprof.co.in/ir/13482099-c1b045",
    color: "#000000",
  },
];


export const siteConfig = {
    creator: "Firdaus Mazumdar",
    title: "Software Engineer",
    bio: "Always Learning.",
    location: "Mumbai, India",
    resume:
      "https://docs.google.com/document/d/1dfvDhBV6AQbBU2gnLLgW4-LHZ1vsiX0O/edit?usp=sharing&ouid=103099908962133218928&rtpof=true&sd=true",
    email: "firdaus22work@gmail.com",
    items: GridItems
  } as const;