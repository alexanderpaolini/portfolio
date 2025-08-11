"use client";

import Link from "next/link";
import { Fragment } from "react";

export type FooterLink = {
  href: string;
  label: string;
  scroll?: boolean;
};

export const HomeLink: FooterLink = {
  href: "/",
  label: " Home",
};

export const ProjectsLink: FooterLink = {
  href: "/projects",
  label: " Projects",
};

export const WritingLink: FooterLink = {
  href: "/writing",
  label: " Blog",
};

export const ContactLink: FooterLink = {
  href: "/contact",
  label: " Contact",
};

export const TopLink: FooterLink = {
  href: "#",
  label: "↑ Top",
  scroll: true,
};

export const ResumeLink: FooterLink = {
  href: "/resume",
  label: " Resume",
};

export const GithubLink: FooterLink = {
  href: "https://github.com/alexanderpaolini",
  label: " GitHub",
};

function FooterNav({
  left,
  right,
}: {
  left?: FooterLink[];
  right?: FooterLink[];
}) {
  if (!left) left = [HomeLink, ProjectsLink, WritingLink];
  if (!right) right = [ResumeLink, GithubLink, ContactLink];

  return (
    <footer className="w-full max-w-4xl mx-auto mt-4 pb-12 pt-8">
      <nav className="flex flex-wrap text-white justify-between gap-2">
        <div className="flex flex-wrap items-center">
          {left.map((link, idx) => (
            <FooterLink
              key={link.label}
              link={link}
              isLast={idx === left.length - 1}
            />
          ))}
        </div>

        {right && right.length > 0 && (
          <div className="flex flex-wrap items-center">
            {right.map((link, idx) => (
              <FooterLink
                key={link.label}
                link={link}
                isLast={idx === right.length - 1}
              />
            ))}
          </div>
        )}
      </nav>
    </footer>
  );
}

function FooterLink({ link, isLast }: { link: FooterLink; isLast: boolean }) {
  return (
    <Fragment key={link.label}>
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
        {link.label}
      </Link>
      {!isLast && <span>&nbsp;|&nbsp;</span>}
    </Fragment>
  );
}

export function ContactPageFooterNav() {
  return <FooterNav right={[ResumeLink, GithubLink]} />;
}

export function HomePageFooterNav() {
  return <FooterNav left={[ProjectsLink, WritingLink]} />;
}

export function ProjectsPageFooterNav() {
  return <FooterNav left={[HomeLink, WritingLink]} />;
}

export function ProjectPageFooterNav() {
  return <FooterNav left={[TopLink, HomeLink, ProjectsLink, WritingLink]} />;
}

export function WritingsPageFooterNav() {
  return <FooterNav left={[HomeLink, ProjectsLink]} />;
}

export function WritingPageFooterNav() {
  return <FooterNav left={[TopLink, HomeLink, ProjectsLink, WritingLink]} />;
}

export function NotFoundPageFooterNav() {
  return <FooterNav left={[HomeLink]} right={[]} />;
}
