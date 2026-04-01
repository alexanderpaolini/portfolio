import NextLink from "next/link";
import { cn } from "@/lib/cn";

type LinkProps = React.ComponentProps<typeof NextLink> & { noUnderline?: boolean };

export default function Link({ className, children, href, noUnderline, ...props }: LinkProps) {
  const ex = typeof href === "string" && href.startsWith("http");

  return (
    <NextLink
      href={href}
      {...props}
      target={ex ? "_blank" : undefined}
      rel={ex ? "noopener noreferrer" : undefined}
      className={cn(`font-bold text-purple-500 hover:text-purple-600 ${!!noUnderline || "underline"} hover:underline underline-offset-4 dark:text-purple-400 dark:hover:text-purple-500`, className)}
    >
      {children}
    </NextLink>
  );
}

type BackProps = Omit<LinkProps, "noUnderline">;

export function BackLink({ className, href, ...props }: BackProps) {
  return (
    <Link href={href} className={className} noUnderline {...props}>
      <i className="nf nf-md-keyboard_backspace" />{" "}Back
    </Link>
  )
}