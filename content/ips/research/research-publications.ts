import type { PageContent } from "../../../types/content";

export const researchPublicationsContent: PageContent = {
  eyebrow: "Research Intellectual Property",
  title: "Research Publications",
  intro:
    "Research outputs, analyses and original insights produced through Globe Research.",

  sections: [
    {
      title: "Publications",
      paragraphs: [
        "Explore research publications developed through Globe Research across technology, society, innovation and other areas of interest.",
      ],
      cards: [
        {
          title:
            "The State of Digital Financial Coordination in African Community Groups",
          description:
            "An investigation into how groups coordinate shared finances through messaging apps, bank accounts, spreadsheets and informal processes.",
          href: "/ips/research/digital-financial-coordination-african-community-groups",
        },
        {
          title: "The Village–City Effect: Urban Aspiration, Rural Realities and the African Experience",
          description:
            "A comparative study of how the divide between rural and urban life shapes opportunity, identity, social mobility and economic outcomes across Africa, including the experiences of Africans in the diaspora.",
          href: "/ips/research/village-city-effect-africa",
        },
        {
          title: "The Technology Divide: Social Class, Access and the Future of AI",
          description:
            "An examination of how successive waves of technological advancement have shaped social class, opportunity and exclusion, and what widespread AI adoption could mean for societies and economies.",
          href: "/ips/research/technology-divide",
        },
      ],
    },

    {
      title: "About the Publications",
      paragraphs: [
        "Globe Research publications document investigations, findings, analysis and perspectives developed through the company's research work.",
        "Publications may examine ideas being considered by Globe, broader problems and opportunities, emerging technologies or questions relevant to the company's future.",
      ],
    },
  ],

  related: [
    {
      label: "Globe Research",
      href: "/divisions/research",
    },
    {
      label: "Intellectual Property",
      href: "/ips",
    },
    {
      label: "Globe Software",
      href: "/divisions/software",
    },
  ],
};