import type { BlogPostContent } from "../../types/content";

export const akibaBlogpostContent: BlogPostContent = {
  eyebrow: "Product Updates",
  title: "Akiba: Building a Better Way for Groups to Manage Shared Money",
  intro:
    "An introduction to Akiba and the problem it is designed to solve for groups coordinating contributions, goals and shared finances.",

  metadata: {
    publishedAt: "2026-09-16",
    author: "Globe Technologies Editorial",
    category: "Product Updates",
    readTime: "7 min read",
    tags: [
      "Akiba",
      "Globe Software",
      "Collaborative Financial Platform",
      "Group Finance",
      "Shared Money",
    ],
  },

  blocks: [
    {
      type: "paragraph",
      text:
        "Money is often easier to manage alone than it is together.",
    },
    {
      type: "paragraph",
      text:
        "When several people share a financial responsibility, the challenge is rarely just collecting the money. Someone has to communicate the purpose, keep track of who has contributed, report the balance, answer questions, remind people about outstanding contributions and make sure everyone understands what happens next.",
    },
    {
      type: "paragraph",
      text:
        "For many groups, these activities happen across conversations, spreadsheets, notebooks, mobile money messages and manually prepared updates. The tools may work individually, but the overall process can become fragmented as the group grows or the financial activity becomes more frequent.",
    },
    {
      type: "paragraph",
      text:
        "Akiba began with an observation about that gap: groups already have ways to communicate and ways to move money, but they often do not have a single place designed around the relationship between the two.",
    },

    {
      type: "image",
      src: "/images/blogposts/akiba-app-mockup2.png",
      alt: "Akiba collaborative financial platform for group money management",
      caption:
        "Akiba brings group communication and shared financial activity into one platform.",
    },

    {
      type: "paragraph",
      text:
        "Akiba is being developed as a Collaborative Financial Platform for groups that manage money together.",
    },
    {
      type: "paragraph",
      text:
        "The idea is simple: give a group one place where its members can communicate, understand its financial activity and work toward shared financial objectives.",
    },
    {
      type: "paragraph",
      text:
        "A group might be raising money for a wedding, supporting a funeral, preparing for a graduation, organizing a birthday, planning a trip or working toward another shared event. It might also be saving toward a one-time objective such as an asset or business, or managing a recurring responsibility such as rent or a regular contribution.",
    },
    {
      type: "paragraph",
      text:
        "The circumstances differ, but the underlying need is similar. People need to know what the group is working toward, what has been contributed, what remains and what is happening with the money.",
    },

    {
      type: "paragraph",
      text:
        "This is why the Group is at the center of Akiba.",
    },
    {
      type: "paragraph",
      text:
        "Rather than treating each contribution as an isolated transaction, Akiba organizes the financial activity around the group that is responsible for it.",
    },
    {
      type: "paragraph",
      text:
        "A group's home brings together the information its members need. Members can communicate with one another, view the group's financial position and understand the activities taking place within the group. Administrators can manage the group and, where appropriate, oversee deposits and withdrawals.",
    },
    {
      type: "paragraph",
      text:
        "The intention is not to replace communication with financial records or financial records with communication. It is to bring them together.",
    },

    {
      type: "paragraph",
      text:
        "Events and Goals provide structure for what the group is trying to accomplish.",
    },
    {
      type: "paragraph",
      text:
        "An Event can represent a specific occasion with a financial objective, such as a wedding or trip. It may have a target amount and, where relevant, a deadline. A Goal can represent a financial objective that is either one-time or recurring, allowing groups to organize activities such as building toward an asset, starting a business or meeting regular financial obligations.",
    },
    {
      type: "paragraph",
      text:
        "This distinction matters because not every shared financial activity works in the same way. A group raising a fixed amount for an upcoming event has different requirements from a group making regular contributions toward an ongoing responsibility.",
    },
    {
      type: "paragraph",
      text:
        "Akiba is being designed to accommodate both without requiring the group to build its own system around generic messaging tools.",
    },

    {
      type: "paragraph",
      text:
        "Communication remains an important part of the experience.",
    },
    {
      type: "paragraph",
      text:
        "In many groups today, a messaging application becomes the informal headquarters for financial coordination. Contribution confirmations, reminders, questions, reports and decisions all appear in the same conversation as everything else.",
    },
    {
      type: "paragraph",
      text:
        "That creates a familiar experience, but it can also make financial information difficult to follow. A contribution may be mentioned in one message, a balance in another and a later correction somewhere further down the conversation.",
    },
    {
      type: "paragraph",
      text:
        "Akiba approaches this differently. The group conversation remains open and natural, while important financial activity can appear within that conversation as structured activity. Contributions, reports and withdrawals can be represented as part of the group's ongoing activity without turning every financial event into a message that members must respond to.",
    },

    {
      type: "paragraph",
      text:
        "The result we are working toward is a clearer relationship between conversation and financial activity.",
    },
    {
      type: "paragraph",
      text:
        "A member should be able to participate in the group as a person, not simply as a transaction. That is why identity is also part of the Akiba experience. Members have individual usernames and avatars, and their identities remain recognizable across groups, conversations and member lists.",
    },
    {
      type: "paragraph",
      text:
        "Groups can also have different roles. Administration is separated from ordinary membership, allowing groups to establish responsibility around activities that require administrative control.",
    },

    {
      type: "paragraph",
      text:
        "That becomes particularly important when money needs to leave the group.",
    },
    {
      type: "paragraph",
      text:
        "Akiba's withdrawal process is designed around shared administrative responsibility. A withdrawal request requires approval from two sub-administrators. Either sub-administrator can reject the request, and a rejected request is terminated rather than remaining open for another approval. A new withdrawal request cannot be opened while the current request is still active.",
    },
    {
      type: "paragraph",
      text:
        "These rules are part of a broader principle behind the product: financial actions within a group should be understandable, visible and subject to appropriate controls.",
    },

    {
      type: "image",
      src: "/images/blogposts/akiba-app-mockup3.png",
      alt: "Akiba group financial activity interface",
      caption:
        "The Akiba experience is designed around the group, its people and its shared financial activity.",
    },

    {
      type: "paragraph",
      text:
        "Akiba is still being built.",
    },
    {
      type: "paragraph",
      text:
        "The product is not being developed on the assumption that the first version will solve every problem a group might encounter. The work is focused on understanding the core experience and building the foundations carefully.",
    },
    {
      type: "paragraph",
      text:
        "That means continuing to investigate how groups actually coordinate shared money, where existing approaches create friction and which parts of the experience are genuinely useful. Research and product development therefore remain closely connected as Akiba progresses.",
    },
    {
      type: "paragraph",
      text:
        "The objective is not simply to put financial tools inside a chat application. It is to create a platform around the way groups actually work together.",
    },

    {
      type: "paragraph",
      text:
        "That distinction is important to Globe Software.",
    },
    {
      type: "paragraph",
      text:
        "Akiba is the first software intellectual property being developed under Globe Technologies, but it also represents the kind of product Globe wants to build: products that begin with a real problem, are investigated before development and are given a clear structure around the people they are intended to serve.",
    },
    {
      type: "paragraph",
      text:
        "The platform may evolve as development and research continue. Some assumptions will be confirmed. Others will change. Features may be refined, removed or expanded as the product becomes more clearly understood.",
    },
    {
      type: "paragraph",
      text:
        "What should remain constant is the problem at the center of the work: helping groups manage shared financial activity with greater clarity.",
    },

    {
      type: "paragraph",
      text:
        "For Globe, Akiba is more than the beginning of a software portfolio.",
    },
    {
      type: "paragraph",
      text:
        "It is an early example of how an idea moves through the company's model — from a problem worth investigating, through research and product development, toward something that can eventually be used by real people.",
    },
    {
      type: "paragraph",
      text:
        "There is still considerable work ahead before Akiba reaches that point.",
    },
    {
      type: "paragraph",
      text:
        "But the direction is clear: build a platform where groups can come together, communicate, contribute, work toward shared objectives and understand their money without having to assemble the system themselves.",
    },
    {
      type: "paragraph",
      text:
        "That is the idea behind Akiba.",
    },
  ],

  related: [
    {
      label: "Akiba",
      href: "/ips/software/akiba",
      description:
        "Explore Akiba, Globe Software's first software intellectual property.",
    },
    {
      label: "Globe Software",
      href: "/divisions/software",
      description:
        "Learn about the division responsible for developing Globe's software products and digital platforms.",
    },
    {
      label: "Inside Globe: How Research Shapes What We Build",
      href: "/blogposts/globe-research-and-innovation",
      description:
        "See how research helps Globe investigate ideas before they become products.",
    },
  ],
};