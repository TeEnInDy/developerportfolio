export type Education = {
  period: string;
  school: string;
  detail: string;
};

export const education: Education[] = [
  {
    period: "2014 – 2022",
    school: "Benchamarachuthit Chanthaburi School",
    detail: "GPA 3.75",
  },
  {
    period: "2022 – 2026", // TODO: card says 2024 but user is a 4th-year student — confirm end year (likely 2026)
    school: "Burapha University, Bangsaen — Software Engineering",
    detail: "GPA 3.45",
  },
];
