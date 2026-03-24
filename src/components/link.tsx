import NextLink from "next/link";
import { cn } from "@/lib/cn";

type Props = React.ComponentProps<typeof NextLink>;

export default function Link({ className, children, href, ...props }: Props) {
  const ex = typeof href === "string" && href.startsWith("http");

  return (
    <NextLink
      href={href}
      {...props}
      target={ex ? "_blank" : undefined}
      rel={ex ? "noopener noreferrer" : undefined}
      className={cn(`link`, className)}
    >
      {children}
    </NextLink>
  );
}
