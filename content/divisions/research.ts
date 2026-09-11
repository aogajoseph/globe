import type { PageContent } from "../../types/content";

export const researchDivisionContent: PageContent = {
  eyebrow: "Division",
  title: "Globe Research",
  intro:
    "Globe Research investigates ideas, problems and opportunities to determine their potential and what they should become. Its work provides the evidence, insight and direction that guide Globe's development and commercialization of new products, services and intellectual properties.",

  sections: [
    {
      title: "Understanding Before Building",
      paragraphs: [
        "Globe Research begins where an idea, problem or opportunity requires deeper understanding. The division investigates questions, examines evidence, explores possibilities and tests assumptions before significant resources are committed to development.",
        "The objective is not research for its own sake, but better decisions about what is worth creating, how it should be approached and where it can create meaningful value.",
      ],
    },

    {
      type: "image",
      id: "research-collaboration",
      src: "/images/research/research-collaboration.png",
      alt: "Globe Research team collaborating",
      variant: "editorial",
    },

    {
      title: "What We Research",
      cards: [
        {
          title: "Ideas & Opportunities",
          description:
            "Investigating ideas, emerging opportunities and areas where new products, services or intellectual properties may be developed.",
        },
        {
          title: "Problems & Needs",
          description:
            "Understanding practical problems, human needs and market conditions that may warrant a new solution.",
        },
        {
          title: "Technology",
          description:
            "Examining technologies, technical possibilities and emerging developments relevant to Globe's work.",
        },
        {
          title: "People & Context",
          description:
            "Studying people, organizations, communities and the contexts in which proposed solutions must operate.",
        },
      ],
    },

    {
      title: "From Research to Creation",
      paragraphs: [
        "Research findings are translated into recommendations that help determine what an idea should become. Depending on the opportunity, findings may mean a software product, digital platform, creative media, research publication, physical product, service or another form of intellectual property.",
        "Once an idea is sufficiently understood and validated, the relevant Globe division takes responsibility for creating it. Research may continue alongside development where further investigation is required.",
      ],
    },

    {
      title: "Research Outputs",
      paragraphs: [
        "Globe Research produces knowledge and decision-making material that can be used by Globe and, where appropriate, shared more broadly.",
      ],
      cards: [
        {
          title: "Research Reports",
          description:
            "Structured investigations and findings on ideas, problems, opportunities and areas of interest.",
        },
        {
          title: "Recommendations",
          description:
            "Evidence-based assessments that guide decisions about whether and how an idea should proceed.",
        },
        {
          title: "Applied Research",
          description:
            "Experiments, investigations and prototypes conducted to answer practical questions and reduce uncertainty.",
        },
        {
          title: "Publications",
          description:
            "Research findings, analysis and perspectives developed for wider audiences.",
          href: "/ips/research/research-publications",
        },
      ],
    },

    {
      title: "Part of Globe",
      paragraphs: [
        "Globe Research is a specialized division of Globe Technologies, operating within the company's governance framework and guided by its Constitution, purpose, mission and vision.",
        "Its work reflects Globe's commitment to purpose, excellence and stewardship, ensuring that ideas are investigated with rigor and pursued with a clear understanding of their potential, implications and long-term value.",
      ],
    },

    {
      title: "Looking Ahead",
      paragraphs: [
        "As Globe expands into new areas, Globe Research will expand its disciplines, methods and capabilities to investigate the questions that matter to the company's future.",
      ],
    },
  ],

  related: [
    {
      label: "Research Publications",
      href: "/ips/research/research-publications",
      description:
        "Explore research and knowledge produced through Globe Research.",
    },
    {
      label: "Our Story",
      href: "/about/our-story",
      description:
        "Discover the story behind Globe Technologies and how the company has evolved.",
    },
    {
      label: "Our Brand",
      href: "/about/brand",
      description:
        "Explore the identity, principles and visual language of Globe Technologies.",
    },
  ],
};