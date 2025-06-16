'use client';
import { SOCIALS } from '@/constants';
import Link from 'next/link';
import { Social as SocialType } from '../types';

export function Social({ image, link }: SocialType) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      {image}
    </Link>
  );
}

interface PhoneProps {
  phone: string[];
}

export function PhoneNumber({ phone }: PhoneProps) {
  const handleClick = () => {
    const a = document.createElement('a');
    a.href = `tel:${phone.join('')}`;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className="flex link whitespace-pre cursor-pointer" onClick={handleClick}>
      {phone.map((char, idx) => (
        <p key={idx}>{char}</p>
      ))}
    </div>
  );
}

interface EmailPros {
  email: string[];
}

export function Email({ email }: EmailPros) {
  const handleClick = () => {
    const a = document.createElement('a');
    a.href = `mailto:${email.join('@')}`;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <div className="flex link whitespace-pre cursor-pointer" onClick={handleClick}>
      {email.map((char, idx) => (
        <p key={idx}>{char}</p>
      ))}
    </div>
  );
}

export function Socials() {
  return (
    <div className="flex flex-row gap-4 items-center">
      {SOCIALS.map((social, idx) => (
        <Social
          key={idx}
          image={social.image}
          link={social.link}
        />
      ))}
    </div>
  );
}
