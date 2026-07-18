import type { PageContent } from "../../types/content";

export const aboutContent: PageContent = {
  eyebrow: "About Us",
  title: "About Globe Technologies",
  intro:
    "Globe Technologies is a research-driven company dedicated to innovating for a better future through products, projects and initiatives that create lasting value.",

  sections: [
    {
      title: "Who We Are",
      paragraphs: [
        "Globe Technologies exists to discover meaningful problems, explore new possibilities and develop innovative solutions that improve lives and contribute to a better future.",
        "We believe innovation is most effective when guided by purpose, informed by research and pursued with excellence. This philosophy shapes every decision we make and every solution we create.",
      ],
    },
    {
      title: "What We Do",
      paragraphs: [
        "Our work spans software, media and other specialized areas through dedicated divisions that share one identity, one purpose and one standard of excellence.",
        "Some of our ideas become products that solve practical challenges. Others become projects or long-term initiatives that educate, inspire or create lasting impact. Together, they reflect our commitment to meaningful innovation.",
      ],
    },
    {
      title: "What Guides Us",
      cards: [
        {
          title: "Purpose",
          description:
            "Innovating for a better future.",
          href: "/company/purpose",
        },
        {
          title: "Vision",
          description:
            "The future Globe Technologies is committed to helping create.",
          href: "/company/vision",
        },
        {
          title: "Mission",
          description:
            "How we transform our purpose into meaningful action.",
          href: "/company/mission",
        },
        {
          title: "Constitution",
          description:
            "The enduring framework that guides our principles, governance and continuity.",
          href: "/company/constitution",
        },
      ],
    },
  ],

  related: [
    {
      label: "Our Story",
      href: "/company/our-story",
    },
    {
      label: "Company Profile",
      href: "/company/company-profile",
    },
    {
      label: "Leadership",
      href: "/company/leadership",
    },
  ],
};