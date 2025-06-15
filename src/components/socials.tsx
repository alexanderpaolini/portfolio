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
