import Link from "next/link";

export const INTRO_CONTENT = (
  <>
    <h1>Hi,</h1>
    <p>
      I&apos;m Alexander Paolini, a Computer Science student at the{" "}
      <Link href="https://www.google.com/search?q=UCF" className="link">
        University of Central Florida
      </Link>.
    </p>
    <p>I am most interested in the subject of Compiler Design.</p>
    <p>
      Looking for my projects?{" "}
      <Link href="/projects" className="link">
        Right here!
      </Link>
    </p>
  </>
);
