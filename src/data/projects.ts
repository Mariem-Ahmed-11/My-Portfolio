import nfcImg from "@/assets/nfc_cover.png";
import nfc1 from "@/assets/nfc_1.png";
import nfc2 from "@/assets/nfc_2.png";
import nfc3 from "@/assets/nfc_3.png";
import nfc4 from "@/assets/nfc_4.png";

import compImg from "@/assets/competetion_cover.png";
import comp1 from "@/assets/competetion_1.png";
import comp2 from "@/assets/competetion_2.png";
import comp3 from "@/assets/competetion_3.png";
import comp4 from "@/assets/competetion_4.png";
import comp5 from "@/assets/competetion_5.png";

import pemf1 from "@/assets/PEMF.png";
import pemf2 from "@/assets/PEMF (2).png";

export interface Project {
  id: number;
  title: string;
  type: string;
  shortDesc: string;
  techIcons: { name: string; devicon: string }[];
  overview: string;
  built: string[];
  challenges: string[];
  takeaway: string;
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart NFC Attendance System",
    type: "Web · Hardware",
    shortDesc: "Real-time NFC-based attendance with a live Firebase dashboard",
    techIcons: [
      { name: "React", devicon: "react" },
      { name: "Next.js", devicon: "nextjs" },
      { name: "Firebase", devicon: "firebase" },
      { name: "JavaScript", devicon: "javascript" },
    ],
    overview: "Built the frontend dashboard and handled the full Firebase integration for a smart NFC attendance system using ESP32 hardware.",
    built: [
      "Real-time dashboard showing live attendance data",
      "Full Firebase Realtime Database ↔ frontend integration",
      "Clean responsive interface",
    ],
    challenges: [
      "Zero React and Firebase knowledge at the start",
      "Researched both from scratch under real project pressure",
      "Used AI strategically — directed it with precise prompts based on what she understood, not blindly",
    ],
    takeaway: "Learned React, Next.js, and Firebase integration under real project pressure. Proved she can pick up any technology on the fly when there's a real problem to solve.",
    images: [nfcImg, nfc1, nfc2, nfc3, nfc4],
    liveUrl: "https://we-nfc.netlify.app",
    repoUrl: "https://github.com/Mariem-Ahmed-11/NFC",
  },
  {
    id: 2,
    title: "Project & Competition Management Platform",
    type: "Web · Platform",
    shortDesc: "Full platform for managing school projects and competitions at We School",
    techIcons: [
      { name: "React", devicon: "react" },
      { name: "Next.js", devicon: "nextjs" },
      { name: "Firebase", devicon: "firebase" },
      { name: "JavaScript", devicon: "javascript" },
    ],
    overview: "Contributed to a full competition and project management platform used by students and staff at We School of Applied Technology.",
    built: [
      "Complete frontend UI",
      "Firebase data integration",
      "Multi-feature interface for real daily use by students and staff",
    ],
    challenges: [
      "Complex feature set requiring careful state management",
      "Building for real users — no room for bugs",
      "Applied React skills in a bigger, more complex context",
    ],
    takeaway: "Reinforced React and Next.js skills in a collaborative, multi-feature platform with actual users.",
    images: [compImg, comp1, comp2, comp3, comp4, comp5],
    liveUrl: "https://competition11.netlify.app",
    repoUrl: "https://github.com/Mariem-Ahmed-11/pass-to-access",
  },
  {
    id: 3,
    title: "PEMF Cell Growth Stimulator",
    type: "Hardware · Research",
    shortDesc: "Electromagnetic device that accelerates wound healing for diabetic patients",
    techIcons: [
      { name: "Arduino", devicon: "arduino" },
      { name: "C++", devicon: "cplusplus" },
    ],
    overview: "Designed and built a PEMF (Pulsed Electromagnetic Field) device that generates electromagnetic waves to stimulate cellular growth — scientifically validated through a research paper targeting wound healing in diabetic patients.",
    built: [
      "Physical device generating EM waves at precise frequencies",
      "Arduino firmware in C++ controlling output",
      "AI-assisted programming with full technical decision-making",
      "Backing research paper proving scientific validity",
    ],
    challenges: [
      "Bridging hardware electronics with software programming",
      "Translating academic PEMF research into a working physical device",
      "Scientifically validating the output through research, not just building",
    ],
    takeaway: "Proved she can work across the full stack — from physical circuits to research-backed scientific claims. Demonstrated that being a vibe engineer means directing AI with precision, not replacing your own thinking.",
    images: [pemf1, pemf2],
  },
  {
    id: 4,
    title: "Jamaly Beauty",
    type: "Web",
    shortDesc: "Beauty salon landing site built with HTML/CSS/JS",
    techIcons: [
      { name: "HTML", devicon: "html5" },
      { name: "CSS", devicon: "css3" },
      { name: "JavaScript", devicon: "javascript" },
    ],
    overview: "A responsive landing page for a beauty salon showcasing services and gallery.",
    built: ["Responsive layout", "Image gallery", "Contact form placeholder"],
    challenges: ["Pixel-perfect layout", "Responsive images"],
    takeaway: "Improved responsive layout and attention to visual detail.",
    images: ["/jamaly.png"],
    repoUrl: "https://github.com/Mariem-Ahmed-11/jamaly-beauty",
  },
  {
    id: 5,
    title: "First Project",
    type: "Web",
    shortDesc: "My first practice project",
    techIcons: [
      { name: "HTML", devicon: "html5" },
      { name: "CSS", devicon: "css3" },
    ],
    overview: "An early project to practice web layout and basics.",
    built: ["Static pages", "Basic styling"],
    challenges: ["Learning layout techniques"],
    takeaway: "Foundation in building static sites.",
    images: ["/Frist_project.png"],
    liveUrl: "https://first-project-o.netlify.app/",
    repoUrl: "https://github.com/Mariem-Ahmed-11/first-project",
  },
  {
    id: 6,
    title: "Luxury",
    type: "Web",
    shortDesc: "E-commerce landing / template",
    techIcons: [
      { name: "HTML", devicon: "html5" },
      { name: "CSS", devicon: "css3" },
      { name: "JavaScript", devicon: "javascript" },
    ],
    overview: "A luxury brand template showcasing products and hero sections.",
    built: ["Product showcase", "Responsive hero"],
    challenges: ["Visual polish and spacing"],
    takeaway: "Stronger UI composition skills.",
    images: ["/Luxury.png"],
    liveUrl: "https://luxury-o.netlify.app/",
    repoUrl: "https://github.com/Mariem-Ahmed-11/Luxury",
  },
  {
    id: 7,
    title: "Appexy",
    type: "Web",
    shortDesc: "Landing page for a fictional app",
    techIcons: [
      { name: "HTML", devicon: "html5" },
      { name: "CSS", devicon: "css3" },
    ],
    overview: "A clean landing page template for marketing an app.",
    built: ["Hero & features", "Responsive layout"],
    challenges: ["Balancing content and whitespace"],
    takeaway: "Better layout hierarchy skills.",
    images: ["/Appexy.png"],
    liveUrl: "https://appexy-o.netlify.app/",
    repoUrl: "https://github.com/Mariem-Ahmed-11/Appexy",
  },
  {
    id: 8,
    title: "Food Lover JS",
    type: "Web",
    shortDesc: "JavaScript-based food gallery and interactions",
    techIcons: [
      { name: "JavaScript", devicon: "javascript" },
      { name: "HTML", devicon: "html5" },
    ],
    overview: "Interactive food gallery using plain JavaScript.",
    built: ["Interactive gallery", "Filter by category"],
    challenges: ["DOM manipulation and performance"],
    takeaway: "Solid vanilla JS skills.",
    images: ["/Food_lover_js.png"],
    liveUrl: "https://food-lovar-jso.netlify.app/",
    repoUrl: "https://github.com/Mariem-Ahmed-11/Food_lovar_js",
  },
  {
    id: 9,
    title: "E-commerce Dashboard",
    type: "Web · Dashboard",
    shortDesc: "Admin dashboard for monitoring e-commerce metrics and orders",
    techIcons: [
      { name: "TypeScript", devicon: "typescript" },
      { name: "React", devicon: "react" },
      { name: "CSS", devicon: "css3" },
    ],
    overview: "A TypeScript + React dashboard for visualizing e-commerce data, orders, and product metrics. Built as a Vite app with a focus on clear data presentation.",
    built: [
      "Real-time orders & sales summary",
      "Interactive charts and tables",
      "Responsive admin layout",
    ],
    challenges: [
      "Designing usable admin UI components",
      "Handling responsive data-heavy layouts",
    ],
    takeaway: "Strengthened frontend architecture and TypeScript usage for building maintainable dashboards.",
    images: ["/E-commerce-Dashboard.png"],
    repoUrl: "https://github.com/Mariem-Ahmed-11/E-commerce-Dashboard",
  },
  {
    id: 10,
    title: "Study Management System",
    type: "Web · Platform",
    shortDesc: "A platform to manage courses, students, and schedules for schools",
    techIcons: [
      { name: "React", devicon: "react" },
      { name: "TypeScript", devicon: "typescript" },
      { name: "Firebase", devicon: "firebase" },
    ],
    overview: "A study management system to manage students, courses, schedules, and grades with role-based access for admins, teachers, and students.",
    built: [
      "User management (students, teachers, admins)",
      "Course and schedule management UI",
      "Gradebook and simple reporting",
    ],
    challenges: [
      "Designing role-based access and permissions",
      "Syncing schedules and handling conflicts",
      "Keeping the UI simple while showing complex data",
    ],
    takeaway: "Learned to design multi-role interfaces and data flows for educational platforms with a focus on usability.",
    images: ["/Study Management System.png"],
    repoUrl: "https://github.com/Mariem-Ahmed-11/Study-Management-System",
  },
 
];
