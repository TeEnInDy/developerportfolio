// ข้อมูลใบเสนอราคางานออกแบบ UX/UI — แก้ตัวเลข/ข้อความที่ไฟล์นี้ไฟล์เดียว
// ราคาเป็นค่าตั้งต้นจากดีไซน์ตัวอย่าง: ยืนยันตัวเลขจริงก่อนเผยแพร่

export type PriceItem = { title: string; description: string; price: number };
export type PaymentTerm = { percent: number; label: string; when: string };
export type Phase = { title: string; duration: string; detail: string };
export type Deliverable = { title: string; note: string };

export const quotation = {
  documentNo: "QT-2026-001",
  issuedAt: "25 กันยายน 2026",
  validUntil: "25 ตุลาคม 2026",
  validDays: 30,
  currency: "บาท",

  overview:
    "ออกแบบประสบการณ์ผู้ใช้ (UX) และส่วนติดต่อผู้ใช้ (UI) สำหรับ Mobile Application ครบทุกขั้นตอน " +
    "ตั้งแต่การวิเคราะห์ Requirement วางโครงสร้างการใช้งาน ไปจนถึงออกแบบหน้าจอและระบบดีไซน์ (Design System) " +
    "เพื่อให้ผลิตภัณฑ์ใช้งานง่าย สวยงาม และพร้อมส่งต่อให้ทีมพัฒนา",

  uxItems: [
    "วิเคราะห์ Requirement ที่ได้รับ",
    "ออกแบบ User Flow",
    "ออกแบบ Information Architecture",
    "ปรับปรุง Flow ตาม Feedback",
  ],

  ui: {
    userRoles: 5,
    tags: ["หน้าจอ Mobile / Web", "Responsive", "Component Library"],
    screens: [
      "Landing",
      "Payment",
      "Home",
      "Order",
      "Product",
      "Profile",
      "Product Detail",
      "Notification",
      "Cart",
      "Setting",
      "Checkout",
      "และหน้าจออื่น ๆ ตาม Requirement",
    ],
    note: "จำนวนหน้าจออาจเปลี่ยนแปลงตาม Requirement ที่ตกลงร่วมกัน",
  },

  designSystem: [
    "Color Palette",
    "Card",
    "Typography",
    "Modal",
    "Grid",
    "Navigation",
    "Spacing",
    "Badge",
    "Icon Guideline",
    "Tag",
    "Button",
    "Component",
    "Text Field",
    "Variant",
    "Dropdown",
    "Auto Layout",
    "Design Token (ระดับพื้นฐาน)",
  ],

  deliverables: [
    { title: "Figma File", note: "จัดเลเยอร์เป็นระเบียบ" },
    { title: "Design System", note: "Styles & Tokens" },
    { title: "Component Library", note: "พร้อม Variant" },
    { title: "Asset Export", note: "SVG / PNG" },
    { title: "Developer Handoff", note: "Spec ใน Figma" },
  ] satisfies Deliverable[],

  outOfScope: ["Front-end Development", "Back-end Development", "User Testing"],

  pricing: [
    { title: "UX Flow", description: "Requirement, User Flow, Information Architecture", price: 20000 },
    { title: "UI Design", description: "ออกแบบหน้าจอ Mobile/Web, Component Library, Responsive", price: 45000 },
    { title: "Design System", description: "Color, Typography, Grid, Spacing, Components", price: 20000 },
  ] satisfies PriceItem[],

  payments: [
    { percent: 40, label: "มัดจำก่อนเริ่มงาน", when: "ชำระเมื่อยืนยันใบเสนอราคา" },
    { percent: 30, label: "หลังส่งมอบ UI 50%", when: "ตามขอบเขตที่ตกลง" },
    { percent: 30, label: "ก่อนส่งมอบไฟล์สมบูรณ์", when: "Final Delivery" },
  ] satisfies PaymentTerm[],

  timelineTotal: "8–10",
  phases: [
    {
      title: "วิเคราะห์ & วางโครงสร้าง",
      duration: "1–2 สัปดาห์",
      detail:
        "เก็บและวิเคราะห์ Requirement, จัดทำ User Flow และ Information Architecture เพื่อให้ทุกฝ่ายเห็นภาพเดียวกันก่อนเริ่มออกแบบ",
    },
    {
      title: "ออกแบบ UI หน้าจอ",
      duration: "4–6 สัปดาห์",
      detail:
        "ออกแบบหน้าจอ UI (Mobile/Web) แบบ Responsive พร้อม Component Library — ส่งมอบ UI 50% ระหว่างช่วงนี้เพื่อรับ Feedback",
    },
    {
      title: "จัดทำ Design System",
      duration: "2 สัปดาห์",
      detail:
        "รวบรวม Color Palette, Typography, Grid, Spacing และ Components ให้เป็นระบบเดียว เพื่อความสม่ำเสมอและต่อยอดได้ง่าย",
    },
    {
      title: "ปรับปรุง & ส่งมอบ",
      duration: "1 สัปดาห์",
      detail:
        "ปรับแก้ตาม Feedback (รวมรอบแก้ไขฟรี 3 รอบ), Export Asset (SVG/PNG) และเตรียม Developer Handoff ใน Figma",
    },
  ] satisfies Phase[],

  freeRevisions: 3,
  extraRevisionRate: "[อัตราต่อชั่วโมง]",
  changeRequest:
    "กรณีเพิ่ม Feature, User Flow, User Role หรือหน้าจอ หลังเริ่มงานแล้ว จะประเมินระยะเวลาและค่าใช้จ่ายเพิ่มเติมก่อนดำเนินการทุกครั้ง",
  note: "ราคานี้อ้างอิงตามขอบเขตงานข้างต้น ยังไม่รวมภาษีมูลค่าเพิ่ม ไฟล์ต้นฉบับส่งมอบหลังชำระเงินครบถ้วน",
};

export const quotationTotal = quotation.pricing.reduce((sum, item) => sum + item.price, 0);
