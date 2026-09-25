export type Project = {
  slug: string;
  featured?: boolean;
  title: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  link: string;
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "bloomexam",
    featured: true,
    title: "BloomExam",
    description:
      "Web application for evaluating students against Course Learning Outcomes (CLOs), mapped through Bloom's Taxonomy — built as a Burapha University project.",
    tags: ["Next.js", "React", "Node.js", "MySQL"],
    year: "2024",
    role: "Developer",
    link: "#",
    image: "/images/BloomExam.jpg",
    accent: "#A78BFA",
  },
  {
    slug: "warehouse-management-system",
    title: "Warehouse Management System",
    description: "Team project (team of 2) to track and manage warehouse inventory.",
    tags: ["React", "Node.js", "MySQL"],
    year: "2023",
    role: "Team of 2",
    link: "#",
    image: "/images/Warehouse%20Management%20System.jpg",
    accent: "#34D399",
  },
  {
    slug: "equipment-system-exvention",
    title: "Equipment System",
    description: "Equipment management system built for Exvention Co., Ltd. during 3rd year.",
    tags: ["React", "Node.js", "TypeORM"],
    year: "2024",
    role: "Developer, for Exvention Co., Ltd.",
    link: "#",
    image: "/images/Equipment%20System.jpg",
    accent: "#60A5FA",
  },
  {
    slug: "report-managepdf",
    title: "Themis Report",
    description:
      "Automated PDPA system-test report generator — fill in test data and export as Word or PDF.",
    tags: ["Next.js", "Automation"],
    year: "2025",
    role: "Developer",
    link: "#",
    image: "/images/Themis%20Report.jpg",
    accent: "#FB923C",
  },
  {
    slug: "tour-website",
    title: "Tour Website",
    description:
      "Production website for a VIP van service: airport transfers and private tours across Thailand. Solo-built with statically generated dynamic routes, full SEO (metadata, Open Graph, JSON-LD, sitemap), GTM conversion tracking, and a multi-channel (LINE/WhatsApp/Facebook) contact widget.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui"],
    year: "2025 – 2026",
    role: "Frontend Developer",
    link: "https://tour-website-eight-wine.vercel.app/",
    image: "/images/Tour%20Website.jpg",
    accent: "#F472B6",
  },
  {
    slug: "management-order",
    title: "Management Order",
    description:
      "Back-office order management system for a food shop (Ebi Zuke), connected to a Discord bot as the customer ordering channel. Staff track incoming orders, manage stock and recipes, log payment slips, and view sales/expense reports from a Next.js dashboard, with the backend bridging Discord and the dashboard.",
    tags: ["Next.js 16", "Express 5", "TypeScript", "Prisma", "MySQL/MariaDB", "Docker"],
    year: "2026",
    role: "Lead Developer (with 1 contributor)",
    link: "#",
    image: "/images/Management%20Order.jpg",
    accent: "#FBBF24",
  },
  {
    slug: "bot-discord-pos",
    title: "BOT Management Order",
    description:
      "A Discord bot that works as a lightweight POS for a pickled-shrimp shop. Staff build orders with an interactive cart (select menus, buttons, modals); the bot sends each order to a REST backend. An embedded Express webhook pushes real-time alerts for web orders to the kitchen channel, and staff can complete or cancel an order with one click, syncing status back to the backend. Also designed the Prisma/MySQL schema for products, orders, stock, and income/expense tracking.",
    tags: ["Node.js", "discord.js v14", "Express.js", "Prisma", "MySQL"],
    year: "2026",
    role: "Solo Developer",
    link: "https://github.com/TeEnInDy/BOTManagemantOrder",
    image: "/images/BOTManagement%20Order.jpg",
    accent: "#38BDF8",
  },
];
