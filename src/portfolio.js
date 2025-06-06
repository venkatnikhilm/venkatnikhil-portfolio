/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Venkat Nikhil Mangipudi",
  title: "Hey, I'm Venkat Nikhil!",
  subTitle: emoji(
    "Full-stack developer with a love for building intelligent, user-focused web apps using modern JavaScript, AWS, and a touch of machine learning."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xjlWZGrKoU0LqdP-edUbDza-j3YUyeIc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/venkatnikhilm",
  linkedin: "https://www.linkedin.com/in/venkatnikhilm/",
  gmail: "venkatnikhilmangipudi@gmail.com",
  instagram: "https://www.instagram.com/venkat.nikhil/",

  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tech I work with",
  subTitle: "From frontend polish to backend muscle, here’s what I bring to the table.",
  skills: [
    emoji(
      "⚡ Build scalable full-stack applications using React, Node.js, and TypeScript"),
    emoji("⚡ Develop real-time and AI-powered features using OpenAI, WebSockets, and AWS services"),
    emoji(
      "⚡ Design and deploy cloud-native solutions with Docker, Kubernetes, and CI/CD pipelines"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "TypeScript",
    fontAwesomeClassname: "fas fa-code" // No official TypeScript icon in Font Awesome, this is a good neutral alternative
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node-js"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Kubernetes",
    fontAwesomeClassname: "fas fa-network-wired" // No official FA icon, this is a visual alternative
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "GraphQL",
    fontAwesomeClassname: "fas fa-project-diagram" // FA doesn't have GraphQL icon
  },
  {
    skillName: "Golang",
    fontAwesomeClassname: "fas fa-gem" // Placeholder; Font Awesome doesn't have Go icon
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git"
  },
  {
  skillName: "CI/CD",
  fontAwesomeClassname: "fas fa-sync-alt"
  },
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "Sass",
    fontAwesomeClassname: "fab fa-sass"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true 
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asu.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "Focused on building scalable systems, applied machine learning, and software security. Took part in AI-driven projects and hackathons, winning multiple awards.",
      descBullets: [
        "Courses: Cloud Computing, Statistical Machine Learning, Human-Computer Interaction",
        "Won 2nd place in the Snap Inc. challenge at LAHacks 2025 for an AI-powered fashion assistant",
        "Won AI innovation Award at Sunhacks 2024 for Prepify, an AI-drive interview preparation platform",
  ]
},
    {
      schoolName: "R V College of Engineering",
      logo: require("./assets/images/rvce.png"),
      subHeader: "Bachelor of Engineering in Electrical and Electronics Engineering",
      duration: "August 2017 - August 2021",
      desc: "Built a strong foundation in core engineering principles while exploring a growing interest in software development through internships and self-driven projects.",
      descBullets: [
        "Completed a full-time Software Engineering internship at JSW Steel, optimizing industrial electrical systems with Python automation",
        "Transitioned into software by building personal web and data projects alongside coursework",
        "Graduated with distinction while balancing both hardware and software-focused learning"
  ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend & API Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend Engineering",
      progressPercentage: "75%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning & AI",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Sonata Software",
      companylogo: require("./assets/images/sonataLogo.png"), // Replace with your actual logo path
      date: "July 2021 – July 2023",
      desc: "Worked as a full-stack developer on enterprise-grade solutions, building performant and scalable applications across diverse tech stacks.",
      descBullets: [
        "Designed and integrated RESTful APIs with React.js frontend and Node.js backend, improving performance and user experience by 20%",
        "Developed and deployed full-stack solutions using Azure DevOps for CI/CD, reducing deployment time by 15%",
        "Optimized database performance by implementing efficient SQL queries and NoSQL integrations, reducing query execution time by 25%"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "JSW Limited",
      companylogo: require("./assets/images/jswLogo.png"), // Replace with your actual logo path
      date: "June 2019 – July 2019",
      desc: "Built automation tools to streamline electrical monitoring systems in a high-load industrial environment.",
      descBullets: [
        "Developed a Python-based tool to monitor and optimize electrical systems, reducing downtime by 15%",
        "Automated data collection and analysis workflows, improving operational efficiency by 20%",
        "Collaborated with electrical and IT teams to deploy cost-saving automation strategies"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Builds",
  subtitle: "PRODUCTS AND HACKATHON PROJECTS, I HELPED BUILD",
  projects: [
    {
      image: require("./assets/images/snapdrobeLogo.png"), // Replace with actual logo or placeholder
      projectName: "SnapDrobe",
      projectDesc:
        "An AI-powered fashion assistant built for Snapchat Spectacles that recommends outfits in real time. Won 2nd place in the Snap Inc. Challenge at LAHacks 2025.",
      footerLink: [
        {
          name: "Devpost",
          url: "https://devpost.com/software/snapdrobe"
        }
      ]
    },
    {
      image: require("./assets/images/prepifyLogo.png"), // Replace with actual logo or placeholder
      projectName: "Prepify",
      projectDesc:
        "A real-time AI mock interview platform powered by OpenAI, AWS Transcribe, and Polly. Helps users practice and receive feedback instantly.",
      footerLink: [
        {
          name: "Devpost",
          url: "https://devpost.com/software/prepify-io"
        }
      ]
    },
    {
      image: require("./assets/images/faceRecogLogo.png"), // Replace with actual logo or placeholder
      projectName: "Cloud-Based Facial Recognition System",
      projectDesc:
        "An elastic, cloud-native face recognition platform using AWS Lambda, S3, and OpenCV to detect and verify faces in real time.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/venkatnikhilm/facial-recognition"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Hackathons, certifications, and awards that reflect my passion for tech and continuous learning.",

  achievementsCards: [
    {
      title: "LAHacks 2025 - Snap Inc. Challenge – 2nd Place",
      subtitle:
        "Won 2nd place at LAHacks 2025 for building SnapDrobe, an AI-powered fashion assistant for Snapchat Spectacles.",
      image: require("./assets/images/lahacks.png"), // Replace with real logo
      imageAlt: "Snap Inc. Logo",
      footerLink: [
        {
          name: "Devpost Submission",
          url: "https://devpost.com/software/snapdrobe"
        }
      ]
    },
    {
      title: "SunHacks 2024 – AI Innovation Award",
      subtitle:
        "Recognized for building Prepify, a real-time AI mock interview platform integrating OpenAI, AWS Transcribe, and Polly.",
      image: require("./assets/images/sunhacksLogo.png"), // Replace with real logo
      imageAlt: "SunHacks Logo",
      footerLink: [
        {
          name: "Devpost Submission",
          url: "https://devpost.com/software/prepify-io"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+1 (602) 555-3226", // Replace with your phone number
  email_address: "venkatnikhilmangipudi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

const personalSection = {
  display: true,
  title: "Life Outside Code",
  subtitle:
    "When I’m not coding or debugging at 2 AM, you’ll find me...",
  items: [
    "Hiking and exploring new trails",
    "Capturing sunsets and candid moments",
    "Experimenting with new recipes in the kitchen",
    "Jamming on the tabla whenever inspiration strikes",
    "Volunteering and helping local communities",
  ]
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  personalSection
};
