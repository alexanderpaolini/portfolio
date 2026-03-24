"use client";

import Link from "@/components/link";
import { Fragment } from "react";

export type FooterLinkType = {
  href: string;
  label: string;
  scroll?: boolean;
  icon?: React.ReactElement;
};

export const HomeLink: FooterLinkType = {
  href: "/",
  label: "Home",
  icon: <i className="nf nf-fa-home" />,
};

export const NowLink: FooterLinkType = {
  href: "/now",
  label: "Now",
  icon: <i className="nf nf-md-clock_outline" />,
};

export const ProjectsLink: FooterLinkType = {
  href: "/projects",
  label: "Projects",
  icon: <i className="nf nf-oct-repo" />,
};

export const WritingLink: FooterLinkType = {
  href: "/writing",
  label: "Blog",
  icon: <i className="nf nf-fa-newspaper_o" />,
};

export const PhotosLink: FooterLinkType = {
  href: "/photos",
  label: "Photos",
  icon: <i className="nf nf-fa-camera" />,
};

export const ContactLink: FooterLinkType = {
  href: "/contact",
  label: "Contact",
  icon: <i className="nf nf-fa-envelope" />,
};

export const TopLink: FooterLinkType = {
  href: "#",
  label: "Top",
  scroll: true,
  icon: <i className="nf nf-fa-arrow_up" />,
};

export const ResumeLink: FooterLinkType = {
  href: "/resume",
  label: "Resume",
  icon: <i className="nf nf-fa-id_card" />,
};

export const GithubLink: FooterLinkType = {
  href: "https://github.com/alexanderpaolini",
  label: "GitHub",
  icon: <i className="nf nf-fa-github" />,
};

export const OldNowLink: FooterLinkType = {
  href: "/now/old",
  label: "Old Now Pages",
  icon: <i className="nf nf-fa-history" />,
};

function FooterItem({
  link,
  isLast,
}: {
  link: FooterLinkType;
  isLast: boolean;
}) {
  return (
    <Fragment>
      <Link
        href={link.href}
        scroll={false}
        onClick={(e) => {
          if (link.scroll) {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }}
        className="link font-extrabold"
      >
        {link.icon && <>{link.icon} </>}
        {link.label}
      </Link>
      {!isLast && <span className="font-mono">&nbsp;|&nbsp;</span>}
    </Fragment>
  );
}

export function FooterNav({
  top,
  left = [HomeLink, NowLink, ProjectsLink, WritingLink, PhotosLink],
  right = [ResumeLink, GithubLink, ContactLink],
}: {
  top?: FooterLinkType[];
  left?: FooterLinkType[];
  right?: FooterLinkType[];
}) {
  return (
    <footer className="w-full max-w-4xl mx-auto pb-12 pt-8">
      {top && top.length > 0 && (
        <nav className="flex mb-2 justify-start">
          <div className="flex items-center">
            {top.map((link, idx) => (
              <FooterItem
                key={link.label}
                link={link}
                isLast={idx === top.length - 1}
              />
            ))}
          </div>
        </nav>
      )}
      <nav className="flex flex-wrap justify-between gap-2">
        <div className="flex flex-wrap items-center">
          {left.map((link, idx) => (
            <FooterItem
              key={link.label}
              link={link}
              isLast={idx === left.length - 1}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center">
          {right.map((link, idx) => (
            <FooterItem
              key={link.label}
              link={link}
              isLast={idx === right.length - 1}
            />
          ))}
        </div>
      </nav>
    </footer>
  );
}
