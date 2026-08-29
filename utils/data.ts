import { v4 as uuidv4 } from "uuid";

export const skills = [
  {
    id: uuidv4(),
    title: "Next.js",
    icon: "https://thesvg.org/icons/nextjs/default.svg",
  },
  {
    id: uuidv4(),
    title: "React",
    icon: "https://thesvg.org/icons/react/default.svg",
  },
  {
    id: uuidv4(),
    title: "JavaScript",
    icon: "https://thesvg.org/icons/javascript/default.svg",
  },
  {
    id: uuidv4(),
    title: "TypeScript",
    icon: "https://thesvg.org/icons/typescript/default.svg",
  },
  {
    id: uuidv4(),
    title: "Git",
    icon: "https://thesvg.org/icons/git/default.svg",
  },
  {
    id: uuidv4(),
    title: "GitHub",
    icon: "https://thesvg.org/icons/github/dark.svg",
  },
  {
    id: uuidv4(),
    title: "Axios",
    icon: "https://thesvg.org/icons/axios/default.svg",
  },
  {
    id: uuidv4(),
    title: "Supabase",
    icon: "https://thesvg.org/icons/supabase/default.svg",
  },
  {
    id: uuidv4(),
    title: "Redux",
    icon: "https://thesvg.org/icons/redux/default.svg",
  },
  {
    id: uuidv4(),
    title: "Zod",
    icon: "https://thesvg.org/icons/zod/default.svg",
  },
  {
    id: uuidv4(),
    title: "React Hook Form",
    icon: "https://thesvg.org/icons/react-hook-form/default.svg",
  },
  {
    id: uuidv4(),
    title: "TanStack",
    icon: "https://thesvg.org/icons/tanstack/default.svg",
  },
];

export const aboutMe = [
  "I'm a Frontend Developer who builds real, working products with React and Next.js — not just static templates.",
  "I focus on clean component structure, maintainable code, and interfaces that actually work the way they look.",
  "Every project I take on gets the same attention to detail: from responsive layouts to smooth interactions, down to the smallest states.",
  "I'm continuously expanding into backend and system design, so I can build complete features — not just the UI layer.",
];

export const socialMedia = [
  {
    id: uuidv4(),
    title: "LinkedIn",
    icon: "https://thesvg.org/icons/linkedin/default.svg",
    href: "https://www.linkedin.com/in/ahmed-mohamed-b54bb336a/",
  },
  {
    id: uuidv4(),
    title: "WhatsApp",
    icon: "https://thesvg.org/icons/whatsapp/default.svg",
    href: "https://wa.me/201013681500",
  },
  {
    id: uuidv4(),
    title: "Gmail",
    icon: "https://thesvg.org/icons/gmail-2026/default.svg",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ahmed.muhamed.tech@gmail.com",
  },
  {
    id: uuidv4(),
    title: "GitHub",
    icon: "https://thesvg.org/icons/github/dark.svg",
    href: "https://github.com/ahmed-muhamed-tech",
  },
];

export const navbarLinks = [
  {
    id: uuidv4(),
    label: "Home",
    href: "home",
  },
  {
    id: uuidv4(),
    label: "Projects",
    href: "projects",
  },
  // {
  //   id: uuidv4(),
  //   label: "Services",
  //   href: "services",
  // },
  {
    id: uuidv4(),
    label: "About",
    href: "about",
  },
];

export const projects = [
  {
    id: "1",
    title: "Book Store",
    subTitle:
      "A modern e-commerce platform for browsing and purchasing books, designed to make book discovery easier for customers while simplifying library content management.",
    tools: ["React.js", "Supabase", "Tailwind", "TanStack Query", "Git"],
    timeline: [
      {
        id: 1,
        title: "The Idea",
        description:
          "The project started with a local library that relied mainly on social media to showcase its books and communicate with customers.",
      },
      {
        id: 2,
        title: "The Challenge",
        description:
          "Customers had to search through social media posts or contact the library through WhatsApp just to check book availability and prices.",
      },
      {
        id: 3,
        title: "The Approach",
        description:
          "The solution was planned as a simple online bookstore where customers could browse the collection while the owner could manage the content from one place.",
      },
      {
        id: 4,
        title: "The Build",
        description:
          "The storefront was built with book listings, categories, book details, a shopping cart, and a WhatsApp ordering workflow.",
      },
      {
        id: 5,
        title: "The Refinement",
        description:
          "The application was refined with reusable components, responsive layouts, efficient data fetching, and a simple customer experience.",
      },
      {
        id: 6,
        title: "The Result",
        description:
          "The final product provides customers with an organized way to discover and request books while simplifying content management for the library owner.",
      },
    ],
    projectDetails: [
      { label: "Status", value: "Completed" },
      { label: "Started", value: "26 Feb 2026" },
      { label: "Completed", value: "9 Mar 2026" },
      { label: "Duration", value: "12 Days" },
      { label: "Project Type", value: "E-Commerce" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo Project" },
    ],
    view: "https://beetelketabaalfayuwm-1c952.web.app/",
    code: "https://github.com/ahmed-muhamed-tech/bookstore",
  },

  {
    id: "2",
    title: "Restaurant System",
    subTitle:
      "A restaurant management platform designed to organize menu items, manage orders, and simplify daily restaurant operations through a centralized system.",
    tools: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind"],
    timeline: [
      {
        id: 1,
        title: "The Idea",
        description:
          "The project started with the need to replace manual restaurant operations with a more organized digital workflow.",
      },
      {
        id: 2,
        title: "The Challenge",
        description:
          "Managing menu items and customer orders manually can become difficult when the number of daily operations increases.",
      },
      {
        id: 3,
        title: "The Approach",
        description:
          "The system was planned around a centralized dashboard for managing restaurant data and monitoring the main operational workflow.",
      },
      {
        id: 4,
        title: "The Build",
        description:
          "The application was built with authentication, menu management, order management, and database integration.",
      },
      {
        id: 5,
        title: "The Refinement",
        description:
          "The main workflows were optimized with reusable components, responsive layouts, and structured data fetching.",
      },
      {
        id: 6,
        title: "The Result",
        description:
          "The final system provides a centralized environment for managing restaurant operations and handling orders more efficiently.",
      },
    ],
    projectDetails: [
      { label: "Status", value: "Completed" },
      { label: "Started", value: "10 Apr 2026" },
      { label: "Completed", value: "24 Apr 2026" },
      { label: "Duration", value: "14 Days" },
      { label: "Project Type", value: "Management System" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo Project" },
    ],
    view: "#",
    code: "#",
  },

  {
    id: "3",
    title: "Mini CRM",
    subTitle:
      "A lightweight CRM platform built to help teams organize leads, clients, projects, tasks, activities, and notifications in one centralized workspace.",
    tools: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind",
      "React Hook Form",
      "Zod",
    ],
    timeline: [
      {
        id: 1,
        title: "The Idea",
        description:
          "The project started with the need for a centralized workspace to organize customer information and internal work.",
      },
      {
        id: 2,
        title: "The Challenge",
        description:
          "Customer data, projects, and tasks can become difficult to track when they are distributed across multiple tools.",
      },
      {
        id: 3,
        title: "The Approach",
        description:
          "The system was structured around separate features for leads, clients, projects, tasks, team members, and activities.",
      },
      {
        id: 4,
        title: "The Build",
        description:
          "The CRM was built with authentication, CRUD operations, form validation, data fetching, and reusable UI components.",
      },
      {
        id: 5,
        title: "The Refinement",
        description:
          "The application was improved by handling loading states, errors, validation, and responsive layouts across the main workflows.",
      },
      {
        id: 6,
        title: "The Result",
        description:
          "The final CRM provides a centralized workspace for managing customers, projects, tasks, and team activities.",
      },
    ],
    projectDetails: [
      { label: "Status", value: "Completed" },
      { label: "Started", value: "1 May 2026" },
      { label: "Completed", value: "18 May 2026" },
      { label: "Duration", value: "18 Days" },
      { label: "Project Type", value: "CRM" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo Project" },
    ],
    view: "#",
    code: "#",
  },

  {
    id: "4",
    title: "Task Manager",
    subTitle:
      "A productivity application for creating, organizing, and tracking tasks with a simple workflow designed for individuals and small teams.",
    tools: ["React.js", "TypeScript", "Tailwind", "Supabase", "Zod"],
    timeline: [
      {
        id: 1,
        title: "The Idea",
        description:
          "The project started from the need for a simple tool to keep daily tasks organized and easy to track.",
      },
      {
        id: 2,
        title: "The Challenge",
        description:
          "Users needed a clear way to separate pending, active, and completed tasks without unnecessary complexity.",
      },
      {
        id: 3,
        title: "The Approach",
        description:
          "The application was planned around a simple task lifecycle with clear states and straightforward interactions.",
      },
      {
        id: 4,
        title: "The Build",
        description:
          "Core task creation, editing, deletion, filtering, and status management features were implemented.",
      },
      {
        id: 5,
        title: "The Refinement",
        description:
          "The interface was refined with responsive layouts, form validation, and smoother task management interactions.",
      },
      {
        id: 6,
        title: "The Result",
        description:
          "The final application provides a focused environment for managing daily tasks and tracking progress.",
      },
    ],
    projectDetails: [
      { label: "Status", value: "Completed" },
      { label: "Started", value: "2 Jun 2026" },
      { label: "Completed", value: "10 Jun 2026" },
      { label: "Duration", value: "9 Days" },
      { label: "Project Type", value: "Productivity" },
      { label: "Role", value: "Frontend Developer" },
      { label: "Team", value: "Solo Project" },
    ],
    view: "#",
    code: "#",
  },

  {
    id: "5",
    title: "Fitness Dashboard",
    subTitle:
      "A fitness dashboard that helps users monitor workouts, track progress, and organize their training activities through a clean data-driven interface.",
    tools: ["Next.js", "TypeScript", "Tailwind", "Supabase", "TanStack Query"],
    timeline: [
      {
        id: 1,
        title: "The Idea",
        description:
          "The project started with the idea of bringing workout tracking and progress monitoring into one simple platform.",
      },
      {
        id: 2,
        title: "The Challenge",
        description:
          "Users needed an easier way to understand their training progress without manually organizing workout information.",
      },
      {
        id: 3,
        title: "The Approach",
        description:
          "The system was designed around dashboards, workout records, progress data, and an organized training workflow.",
      },
      {
        id: 4,
        title: "The Build",
        description:
          "The dashboard was implemented with workout tracking, statistics, user data, and structured API communication.",
      },
      {
        id: 5,
        title: "The Refinement",
        description:
          "The interface was optimized to present data clearly while maintaining a responsive experience across devices.",
      },
      {
        id: 6,
        title: "The Result",
        description:
          "The final dashboard gives users a centralized view of their workouts and overall training progress.",
      },
    ],
    projectDetails: [
      { label: "Status", value: "Completed" },
      { label: "Started", value: "15 Jun 2026" },
      { label: "Completed", value: "27 Jun 2026" },
      { label: "Duration", value: "13 Days" },
      { label: "Project Type", value: "Dashboard" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo Project" },
    ],
    view: "#",
    code: "#",
  },

  {
    id: "6",
    title: "Portfolio Platform",
    subTitle:
      "A modern developer portfolio designed to present projects, technical skills, experience, and project stories through an interactive and minimal interface.",
    tools: ["Next.js", "TypeScript", "Tailwind", "Motion", "Git"],
    timeline: [
      {
        id: 1,
        title: "The Idea",
        description:
          "The project started with the goal of creating a portfolio that focuses on projects and the stories behind them.",
      },
      {
        id: 2,
        title: "The Challenge",
        description:
          "A traditional portfolio often presents projects as simple cards without explaining the thinking and development process behind them.",
      },
      {
        id: 3,
        title: "The Approach",
        description:
          "The portfolio was planned around detailed project pages, interactive sections, and a visual identity that keeps the content focused.",
      },
      {
        id: 4,
        title: "The Build",
        description:
          "The application was developed with reusable components, animations, responsive layouts, and structured project data.",
      },
      {
        id: 5,
        title: "The Refinement",
        description:
          "Animations, typography, spacing, and interactions were refined to create a consistent experience throughout the portfolio.",
      },
      {
        id: 6,
        title: "The Result",
        description:
          "The final portfolio provides a clear way to explore projects and understand the process behind each one.",
      },
    ],
    projectDetails: [
      { label: "Status", value: "Completed" },
      { label: "Started", value: "5 Jul 2026" },
      { label: "Completed", value: "19 Jul 2026" },
      { label: "Duration", value: "15 Days" },
      { label: "Project Type", value: "Portfolio" },
      { label: "Role", value: "Frontend Developer" },
      { label: "Team", value: "Solo Project" },
    ],
    view: "#",
    code: "#",
  },

  {
    id: "7",
    title: "Event Booking",
    subTitle:
      "An event booking platform that allows users to explore events, view available information, and reserve their preferred events through a simple booking flow.",
    tools: ["React.js", "TypeScript", "Tailwind", "Supabase", "TanStack Query"],
    timeline: [
      {
        id: 1,
        title: "The Idea",
        description:
          "The project started with the idea of simplifying the process of discovering and booking events online.",
      },
      {
        id: 2,
        title: "The Challenge",
        description:
          "Users needed a centralized place to explore events and access the important information before making a booking.",
      },
      {
        id: 3,
        title: "The Approach",
        description:
          "The system was planned around event discovery, detailed event pages, availability, and a simple booking process.",
      },
      {
        id: 4,
        title: "The Build",
        description:
          "The application was built with event listings, filtering, detailed pages, and a booking workflow connected to the backend.",
      },
      {
        id: 5,
        title: "The Refinement",
        description:
          "The booking experience was improved with validation, responsive layouts, and optimized data fetching.",
      },
      {
        id: 6,
        title: "The Result",
        description:
          "The final platform gives users a straightforward way to discover and reserve events from one place.",
      },
    ],
    projectDetails: [
      { label: "Status", value: "Completed" },
      { label: "Started", value: "22 Jul 2026" },
      { label: "Completed", value: "5 Aug 2026" },
      { label: "Duration", value: "15 Days" },
      { label: "Project Type", value: "Booking Platform" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo Project" },
    ],
    view: "#",
    code: "#",
  },

  {
    id: "8",
    title: "Learning Platform",
    subTitle:
      "An online learning platform designed to organize educational content, courses, lessons, and student progress in one accessible environment.",
    tools: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Zod", "Git"],
    timeline: [
      {
        id: 1,
        title: "The Idea",
        description:
          "The project started with the goal of creating a centralized platform for organizing educational content.",
      },
      {
        id: 2,
        title: "The Challenge",
        description:
          "Students needed a clear structure for finding courses, accessing lessons, and keeping track of their learning progress.",
      },
      {
        id: 3,
        title: "The Approach",
        description:
          "The platform was structured around courses, lessons, student accounts, and progress tracking.",
      },
      {
        id: 4,
        title: "The Build",
        description:
          "The application was implemented with authentication, course management, lesson pages, and progress tracking.",
      },
      {
        id: 5,
        title: "The Refinement",
        description:
          "The learning flow was refined with responsive layouts, validation, reusable components, and optimized data handling.",
      },
      {
        id: 6,
        title: "The Result",
        description:
          "The final platform provides students with an organized environment for accessing educational content and tracking progress.",
      },
    ],
    projectDetails: [
      { label: "Status", value: "Completed" },
      { label: "Started", value: "10 Aug 2026" },
      { label: "Completed", value: "28 Aug 2026" },
      { label: "Duration", value: "19 Days" },
      { label: "Project Type", value: "Education" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo Project" },
    ],
    view: "#",
    code: "#",
  },

  {
    id: "9",
    title: "Inventory Manager",
    subTitle:
      "A business inventory management system designed to help store owners track products, stock levels, categories, and inventory operations from one dashboard.",
    tools: ["React.js", "TypeScript", "Supabase", "Tailwind", "TanStack Query"],
    timeline: [
      {
        id: 1,
        title: "The Idea",
        description:
          "The project started from the need to simplify inventory management for small businesses.",
      },
      {
        id: 2,
        title: "The Challenge",
        description:
          "Tracking product quantities and stock changes manually can lead to outdated information and unnecessary operational effort.",
      },
      {
        id: 3,
        title: "The Approach",
        description:
          "The system was designed around products, categories, stock levels, and a centralized management dashboard.",
      },
      {
        id: 4,
        title: "The Build",
        description:
          "The core system was implemented with product CRUD operations, category management, stock tracking, and database integration.",
      },
      {
        id: 5,
        title: "The Refinement",
        description:
          "The dashboard was refined with better filtering, validation, responsive layouts, and efficient data fetching.",
      },
      {
        id: 6,
        title: "The Result",
        description:
          "The final system gives business owners a clearer overview of their inventory and simplifies daily product management.",
      },
    ],
    projectDetails: [
      { label: "Status", value: "Completed" },
      { label: "Started", value: "1 Sep 2026" },
      { label: "Completed", value: "14 Sep 2026" },
      { label: "Duration", value: "14 Days" },
      { label: "Project Type", value: "Management System" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo Project" },
    ],
    view: "#",
    code: "#",
  },

  {
    id: "10",
    title: "Travel Planner",
    subTitle:
      "A travel planning application that helps users organize destinations, activities, schedules, and trip details in one simple and structured experience.",
    tools: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Motion"],
    timeline: [
      {
        id: 1,
        title: "The Idea",
        description:
          "The project started with the idea of making travel planning easier by bringing important trip information into one place.",
      },
      {
        id: 2,
        title: "The Challenge",
        description:
          "Travel plans are often spread across notes, websites, and different applications, making them difficult to organize.",
      },
      {
        id: 3,
        title: "The Approach",
        description:
          "The application was planned around destinations, activities, schedules, and structured trip information.",
      },
      {
        id: 4,
        title: "The Build",
        description:
          "The platform was built with trip creation, destination management, activity planning, and organized schedule views.",
      },
      {
        id: 5,
        title: "The Refinement",
        description:
          "The interface was refined with smooth interactions, responsive layouts, clear information hierarchy, and reusable components.",
      },
      {
        id: 6,
        title: "The Result",
        description:
          "The final application provides travelers with a centralized workspace for organizing their trips and keeping their plans accessible.",
      },
    ],
    projectDetails: [
      { label: "Status", value: "Completed" },
      { label: "Started", value: "18 Sep 2026" },
      { label: "Completed", value: "2 Oct 2026" },
      { label: "Duration", value: "15 Days" },
      { label: "Project Type", value: "Web Application" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo Project" },
    ],
    view: "#",
    code: "#",
  },
];