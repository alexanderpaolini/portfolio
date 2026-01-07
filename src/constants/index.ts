import { Social } from "@/types";
import { Metadata } from "next";
import { SiDiscord, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { BeatLeaderIcon } from "./beatleader-icon";

export const SOCIAL_SIZE = 30;

export const NAME = "Alexander Paolini";
export const EMAIL = "alexander.paolini@outlook.com";
export const PHONE = "+1 (561) 617-6922";

export const DESCRIPTION =
  "Alexander Paolini is a undergraduate student at the University of Central Florida and an aspiring software engineer.";

export const SOCIALS: Social[] = [
  {
    image: BeatLeaderIcon(),
    link: "https://beatleader.com/u/million",
  },
  {
    image: SiDiscord({ size: SOCIAL_SIZE, color: "#5865F2" }),
    link: "https://discord.com/users/277183033344524288",
  },
  {
    image: SiInstagram({ size: SOCIAL_SIZE, color: "#E1306C" }),
    link: "https://instagram.com/alexander.paolini",
  },
  {
    image: SiGithub({ size: SOCIAL_SIZE, className: "light:text-[#181717]" }),
    link: "https://github.com/alexanderpaolini",
  },
  {
    image: SiLinkedin({ size: SOCIAL_SIZE, color: "#0A66C2" }),
    link: "https://linkedin.com/in/alexanderpaolini",
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

