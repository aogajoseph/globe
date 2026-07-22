import type { PageContent } from "../../types/content";

export const careersContent: PageContent = {
  eyebrow: "Careers",
  title: "Careers at Globe Technologies",
  intro:
    "Great companies are built by great people united by a shared purpose. While we are not currently recruiting, we are committed to building a workplace where curiosity, integrity, excellence and innovation thrive.",

  sections: [
    {
      title: "Why Join Globe Technologies",
      paragraphs: [
        "Globe Technologies exists to research, develop and deliver innovative solutions that contribute to a better future. Achieving that purpose requires people who are curious, thoughtful, collaborative and committed to making a meaningful difference.",
        "Whether developing software, conducting research, creating media or supporting company operations, every role contributes to the same long-term mission of creating lasting value.",
      ],
    },

    {
      id: "our-culture",
      title: "Our Culture",
      paragraphs: [
        "Our culture is shaped by purpose, excellence and stewardship. We encourage curiosity, value thoughtful discussions and believe that the best ideas emerge through collaboration, continuous learning and a willingness to challenge assumptions.",
        "We strive to build an environment where people can grow professionally while contributing to work that positively impacts individuals, communities and future generations.",
      ],
    },

    {
      type: "image",
      id: "workplace-culture",
      src: "/images/careers/workplace-culture.png",
      alt: "Globe Technologies workplace culture and collaboration",
      variant: "editorial",
    },

    {
      title: "Learning & Growth",
      paragraphs: [
        "Learning is central to how we work. We encourage continuous development through research, experimentation, mentorship and the practical application of new knowledge. As Globe Technologies grows, opportunities for personal and professional growth will grow alongside it.",
      ],
    },

    {
      title: "How We Work",
      paragraphs: [
        "Globe Technologies operates as a remote-first company, enabling collaboration across locations through modern digital tools. Regardless of where we work, we remain connected by shared values, clear communication and a commitment to delivering excellent work.",
      ],
    },

    {
      title: "Recruitment",
      paragraphs: [
        "Our recruitment process is designed to identify people who not only possess the right skills, but who also align with our purpose, values and long-term vision. As the company grows, details about our recruitment process and available opportunities will be published here.",
      ],
    },

    {
      title: "Current Opportunities",
      paragraphs: [
        "Globe Technologies does not currently have any open vacancies.",
        "We encourage you to check back in the future or follow our official channels for updates on career opportunities as the company continues to grow.",
      ],
    },
  ],

  related: [
    {
      label: "Company Overview",
      href: "/company",
      description:
        "Learn more about Globe Technologies and our purpose.",
    },
    {
      label: "Our Divisions",
      href: "/divisions",
      description:
        "Discover the teams and disciplines that drive our work.",
    },
    {
      label: "Contact",
      href: "/contact",
      description:
        "Get in touch with us for career-related enquiries.",
    },
  ],
};