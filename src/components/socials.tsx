"use client";

import Link from "@/components/link";
import { Social as SocialType } from "../types";
import { SOCIALS } from "@/constants";

export function Social({ href, iconUrl, alt, padding }: SocialType) {
  return (
    <a href={href} style={{ display: "inline-block", width: "45px", padding }}>
      <img
        src={iconUrl}
        alt={alt}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </a>
  );
}

interface PhoneProps {
  phone: string[];
}

export function PhoneNumber({ phone }: PhoneProps) {
  const handleClick = () => {
    const a = document.createElement("a");
    a.href = `tel:${phone.join("")}`;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Link href="">
      <div
        className="flex link whitespace-pre cursor-pointer"
        onClick={handleClick}
      >
        {phone.map((char, idx) => (
          <p key={idx}>{char}</p>
        ))}
      </div>
    </Link>
  );
}

interface EmailPros {
  email: string[];
}

export function Email({ email }: EmailPros) {
  const handleClick = () => {
    const a = document.createElement("a");
    a.href = `mailto:${email.join("")}`;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <Link href="">
      <div
        className="flex link whitespace-pre cursor-pointer"
        onClick={handleClick}
      >
        {email.map((char, idx) => (
          <p key={idx}>{char}</p>
        ))}
      </div>
    </Link>
  );
}

export function Socials() {
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      {SOCIALS.map((social, idx) => (
        <Social key={idx} {...social} />
      ))}
    </div >
  );
}
