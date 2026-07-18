import type { PageContent } from "../../types/content";

export const brandContent: PageContent = {
  eyebrow: "The Company",
  title: "Brand",
  intro:
    "The Globe Technologies brand represents our identity, values and commitment to innovating for a better future. It is more than a visual system—it is a promise reflected in everything we create.",

  sections: [
    {
      title: "Our Identity",
      paragraphs: [
        "Every interaction with Globe Technologies should communicate clarity, trust and purpose. Our brand exists to express who we are, what we stand for and the future we are working to create.",
        "Whether through our products, projects, initiatives or communications, we strive for consistency, excellence and authenticity across every touchpoint.",
      ],
    },
    {
      title: "Brand Principles",
      items: [
        "Purpose-driven innovation",
        "Clarity and simplicity",
        "Excellence in execution",
        "Trust through consistency",
        "Stewardship for generations",
      ],
    },
    {
      title: "Brand System",
      cards: [
        {
          title: "Logo",
          description:
            "The Globe Technologies logo is the primary symbol of the company's identity and should be used consistently across all applications.",
        },
        {
          title: "Typography",
          description:
            "A modern, accessible typography system that reflects clarity, confidence and professionalism.",
        },
        {
          title: "Colour Palette",
          description:
            "Colours that reinforce the Globe Technologies identity while maintaining consistency across digital and physical experiences.",
        },
        {
          title: "Visual Language",
          description:
            "Photography, iconography, illustration and layouts that communicate innovation, collaboration and a forward-looking vision.",
        },
      ],
    },
    {
      title: "One Company, One Brand",
      paragraphs: [
        "Globe Technologies operates through multiple divisions, products and initiatives, yet every part of the company shares one identity and one standard of excellence.",
        "Our divisions may serve different audiences and pursue different objectives, but together they represent one unified brand built on purpose, trust and innovation.",
      ],
    },
  ],

  related: [
    {
      label: "Company Profile",
      href: "/company/company-profile",
    },
    {
      label: "Constitution",
      href: "/company/constitution",
    },
    {
      label: "Vision",
      href: "/company/vision",
    },
  ],
};