import { Social } from "@/types";
import { Metadata } from "next";

export const SOCIAL_SIZE = 30;

export const NAME = "Alexander Paolini";
export const EMAIL = "alexander.paolini@outlook.com";
export const PHONE = "+1 (561) 617-6922";

export const DESCRIPTION =
  "Alexander Paolini is a undergraduate student at the University of Central Florida and an aspiring software engineer.";

export const SOCIALS: Social[] = [
  {
    alt: "GitHub",
    href: "https://github.com/alexanderpaolini",
    iconUrl: "/assets/icons/github.png"
  },
  {
    alt: "LinkedIn",
    href: "https://linkedin.com/in/alexanderpaolini",
    iconUrl: "/assets/icons/linkedin.png",
  },
  {
    alt: "Instagram",
    href: "https://github.com/alexanderpaolini",
    iconUrl: "/assets/icons/instagram.png",
    padding: "3px",
  },
  {
    alt: "Discord",
    href: "https://discord.com/users/277183033344524288",
    iconUrl: "/assets/icons/discord.png",
  },
  {
    alt: "BeatLeader",
    href: "https://beatleader.com/u/million",
    iconUrl: "/assets/icons/beatleader.png"
  }
];

export const TITLE = "Alexander Paolini";
export const DESCRIPTION_SHORT =
  "Alexander Paolini is a undergraduate student at the University of Central Florida and an aspiring software engineer with an interest in compilers.";
export const SITE = "https://paolini.dev";
export const SITE_NAME = "paolini.dev";

export const METADATA: Metadata = {
  title: {
    default: TITLE,
    template: `${TITLE} | %s`,
  },
  description: DESCRIPTION_SHORT,
  openGraph: {
    url: SITE,
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "Alexander Paolini",
    "UCF",
    "University of Central Florida",
    "Computer Science",
    "Software Engineer",
    "Compiler Design",
    "Web Development",
    "Open Source",
    "Programming",
    "JavaScript",
  ],
  creator: NAME,
  metadataBase: new URL(SITE),
};

