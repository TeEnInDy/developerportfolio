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
      "เว็บแอปพลิเคชันสำหรับประเมินผลผู้เรียนตามผลลัพธ์การเรียนรู้รายวิชา (CLO) โดยอ้างอิงระดับการเรียนรู้ตาม Bloom's Taxonomy พัฒนาเป็นโปรเจกต์ของมหาวิทยาลัยบูรพา",
    tags: ["Next.js", "React", "Node.js", "MySQL"],
    year: "2024",
    role: "นักพัฒนา",
    link: "#",
    image: "/images/BloomExam.jpg",
    accent: "#A78BFA",
  },
  {
    slug: "warehouse-management-system",
    title: "Warehouse Management System",
    description: "ระบบติดตามและบริหารสินค้าคงคลังในคลังสินค้า พัฒนาร่วมกันเป็นทีม 2 คน",
    tags: ["React", "Node.js", "MySQL"],
    year: "2023",
    role: "ทีม 11 คน มกุล 2",
    link: "#",
    image: "/images/Warehouse%20Management%20System.jpg",
    accent: "#34D399",
  },
  {
    slug: "equipment-system-exvention",
    title: "Equipment System",
    description: "ระบบบริหารจัดการอุปกรณ์ พัฒนาให้กับบริษัท Exvention Co., Ltd. ระหว่างศึกษาชั้นปีที่ 3",
    tags: ["React", "Node.js", "TypeORM"],
    year: "2024",
    role: "ทีม 11 คน ",
    link: "#",
    image: "/images/Equipment%20System.jpg",
    accent: "#60A5FA",
  },
  {
    slug: "report-managepdf",
    title: "Themis Report",
    description:
      "ระบบสร้างรายงานผลการทดสอบระบบตาม PDPA แบบอัตโนมัติ กรอกข้อมูลการทดสอบแล้วส่งออกเป็นไฟล์ Word หรือ PDF ได้ทันที",
    tags: ["Next.js", "Automation"],
    year: "2025",
    role: "ทีม 2 คน",
    link: "#",
    image: "/images/Themis%20Report.jpg",
    accent: "#FB923C",
  },
  {
    slug: "tour-website",
    title: "Tour Website",
    description:
      "เว็บไซต์ที่ใช้งานจริงของบริการรถตู้ VIP รับ-ส่งสนามบินและทัวร์ส่วนตัวทั่วประเทศไทย พัฒนาคนเดียวทั้งหมด ใช้ dynamic route แบบ static generation ทำ SEO ครบถ้วน (metadata, Open Graph, JSON-LD, sitemap) ติดตาม conversion ด้วย GTM และมีปุ่มติดต่อหลายช่องทาง (LINE / WhatsApp / Facebook)",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui"],
    year: "2025 – 2026",
    role: "Full-Stack Developer",
    link: "https://tour-website-eight-wine.vercel.app/",
    image: "/images/Tour%20Website.jpg",
    accent: "#F472B6",
  },
  {
    slug: "management-order",
    title: "Management Order",
    description:
      "ระบบหลังร้านสำหรับจัดการคำสั่งซื้อของร้านอาหาร Ebi Zuke เชื่อมต่อกับบอท Discord ที่ใช้เป็นช่องทางรับออเดอร์จากลูกค้า พนักงานติดตามออเดอร์ จัดการสต็อกและสูตรอาหาร บันทึกสลิปการชำระเงิน และดูรายงานยอดขาย/ค่าใช้จ่ายผ่านแดชบอร์ด Next.js โดยมี backend เป็นตัวกลางเชื่อม Discord กับแดชบอร์ด",
    tags: ["Next.js 16", "Express 5", "TypeScript", "Prisma", "MySQL/MariaDB", "Docker"],
    year: "2026",
    role: "นักพัฒนาหลัก (ร่วมกับผู้พัฒนาอีก 1 คน)",
    link: "#",
    image: "/images/Management%20Order.jpg",
    accent: "#FBBF24",
  },
  {
    slug: "bot-discord-pos",
    title: "BOT Management Order",
    description:
      "บอท Discord ที่ทำหน้าที่เป็นระบบ POS ขนาดเล็กสำหรับร้านกุ้งดอง พนักงานสร้างออเดอร์ผ่านตะกร้าแบบโต้ตอบ (select menu, ปุ่ม, modal) แล้วบอทส่งออเดอร์ไปยัง REST backend มี Express webhook แจ้งเตือนออเดอร์จากหน้าเว็บเข้าช่องครัวแบบเรียลไทม์ พนักงานกดปิดหรือยกเลิกออเดอร์ได้ในคลิกเดียวและสถานะจะซิงก์กลับไปที่ backend นอกจากนี้ยังออกแบบ schema ด้วย Prisma/MySQL สำหรับสินค้า ออเดอร์ สต็อก และรายรับ-รายจ่าย",
    tags: ["Node.js", "discord.js v14", "Express.js", "Prisma", "MySQL"],
    year: "2026",
    role: "พัฒนาคนเดียว",
    link: "https://github.com/TeEnInDy/BOTManagemantOrder",
    image: "/images/BOTManagement%20Order.jpg",
    accent: "#38BDF8",
  },
];
