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
  href: "#top",
  label: "↑ Top",
  scroll: true,
};

export const ResumeLink: FooterLink = {
  href: "/resume",
  label: " Resume",
};

function FooterNav({ links }: { links: FooterLink[] }) {
  return (
    <footer className="w-full max-w-4xl mx-auto mt-4 pb-12 pt-[5vh]">
      <nav className="flex flex-wrap gap-2 text-white items-center">
        {links.map((link, idx) => (
          <Fragment key={link.label}>
            <Link
              href={link.href}
              scroll={link.scroll}
              className="hover:underline"
            >
              {link.label}
            </Link>
            {idx < links.length - 1 && (
              <span className="mx-1 text-gray-400">|</span>
            )}
          </Fragment>
        ))}
      </nav>
    </footer>
  );
}

export function HomePageFooterNav() {
  return <FooterNav links={[ProjectsLink, WritingLink, ContactLink]} />;
}

export function ProjectsPageFooterNav() {
  return <FooterNav links={[HomeLink, WritingLink, ContactLink]} />;
}

export function ProjectPageFooterNav() {
  return <FooterNav links={[TopLink, HomeLink, ContactLink]} />;
}

export function WritingsPageFooterNav() {
  return <FooterNav links={[HomeLink, ProjectsLink, ContactLink]} />;
}

export function WritingPageFooterNav() {
  return <FooterNav links={[HomeLink, ProjectsLink, ContactLink]} />;
}

export function NotFoundPageFooterNav() {
  return <FooterNav links={[HomeLink]} />;
}
