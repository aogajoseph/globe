import type { PageContent } from "../../types/content";

export const contactContent: PageContent = {
  eyebrow: "Contact",
  title: "Get in Touch",
  intro:
    "Do you have a question, an idea, a partnership opportunity or simply want to learn more about us? We'd love to hear from you.",

  sections: [
    {
      title: "How We Can Help",
      paragraphs: [
        "We welcome conversations with individuals, organizations and communities who share our interest in meaningful innovation. Whether you're reaching out with an enquiry, exploring a collaboration or seeking more information about our work, our teams are here to help.",
      ],
    },

    {
      type: "image",
      id: "remote-collaboration",
      src: "/images/contact/remote-collaboration.png",
      alt: "Remote collaboration at Globe Technologies",
      variant: "editorial",
    },

    {
      title: "Contact Channels",
      cards: [
        {
          title: "General Enquiries",
          description:
            "Questions about Globe Technologies, our work, products, projects or services.",
        },
        {
          title: "Partnerships & Collaborations",
          description:
            "Explore opportunities to work together on products, projects, research or other initiatives.",
        },
        {
          title: "Investment Opportunities",
          description:
            "Connect with us to discuss investment and long-term growth opportunities.",
        },
        {
          title: "Careers",
          description:
            "Enquire about future opportunities to join Globe Technologies.",
        },
      ],
    },

    {
      title: "Let's Build the Future Together",
      paragraphs: [
        "Meaningful innovation is rarely achieved alone. We welcome opportunities to collaborate with researchers, creators, organizations, investors, institutions and communities that share our vision of contributing to a better future.",
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
      label: "Research",
      href: "/research",
      description:
        "Discover the research that informs everything we build.",
    },
    {
      label: "Careers",
      href: "/careers",
      description:
        "Explore opportunities to grow with Globe Technologies.",
    },
  ],
};