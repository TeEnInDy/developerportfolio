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
    image: "/placeholder/bloomexam.jpg",
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
    image: "/placeholder/warehouse.jpg",
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
    image: "/placeholder/equipment-system.jpg",
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
    image: "/placeholder/report-managepdf.jpg",
    accent: "#FB923C",
  },
  {
    slug: "tour-website",
    title: "Tour Website",
    description: "Tour booking website. // TODO: replace with real details.",
    tags: ["Next.js", "Express.js", "Tailwind CSS", "PostgreSQL"],
    year: "2025",
    role: "Developer",
    link: "#",
    image: "/placeholder/tour-website.jpg",
    accent: "#F472B6",
  },
  {
    slug: "management-order",
    title: "Management Order",
    description: "Order management system. // TODO: replace with real details.",
    tags: ["Next.js", "Express.js", "Tailwind CSS", "PostgreSQL"],
    year: "2025",
    role: "Developer",
    link: "#",
    image: "/placeholder/management-order.jpg",
    accent: "#FBBF24",
  },
  {
    slug: "bot-discord-pos",
    title: "BOT Discord POS",
    description: "Discord bot for point-of-sale. // TODO: replace with real details.",
    tags: ["Node.js", "Discord.js"],
    year: "2025",
    role: "Developer",
    link: "#",
    image: "/placeholder/bot-discord-pos.jpg",
    accent: "#38BDF8",
  },
];
