import { FooterNav, OldNowLink } from "@/components/footer";
import Image from "next/image";
import Link, { BackLink } from "@/components/link";

export default function Page() {
  return (
    <>
      <main>
        <div className="flex flex-col border-b-4 border-gray-300">
          <BackLink href="/" />
          <h1>Now</h1>
          <span>Written: March 21, 2026</span>
        </div>
        <div className="flex flex-col">
          <span>
            What is a <Link href="https://nownownow.com/about">now page?</Link>
          </span>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <h2>School</h2>
          <p>
            I&apos;m still taking classes at{" "}
            <Link href="https://en.wikipedia.org/wiki/University_of_Central_Florida">
              UCF
            </Link>
            , studying for a Bachelors&apos; in Computer Science. I&apos;ve also picked up
            the Math Minor. My favorite class so far would have to be{" "}
            <Link href="https://www.cs.ucf.edu/~gazzillo/teaching/cop3402fall25/">
              Systems Software
            </Link>{" "}
            taught by <Link href="https://paulgazzillo.com/">Paul Gazzillo</Link>.
            I&apos;m approved to start taking graduate classes for the accelerated
            Masters&apos;, so I might get on that.
          </p>
          <h2>Work</h2>
          <p>
            I&apos;ve just started as a{" "}
            <Link href="https://techrangers.cdl.ucf.edu/">CDL Techranger</Link>.
            Check back soon once I figure out what cohort I&apos;m placed on, and what
            work I&apos;ll be doing.
          </p>
          <p>
            This summer I&apos;m going to Santa Clara, California, as an NVIDIA Ignite
            Intern. I&apos;ll be working on the Tegra Systems Software team. No I can&apos;t
            get you a GPU -- I myself still use a 1050ti.
          </p>
          <h2>Motorcycle</h2>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <p>
                I just did my first track day at Jennings GP. On a VFR no less.
                This might have been the most fun I&apos;ve had in quite some time. Ran
                a <strong>1:45</strong> basically only in 3rd gear.
              </p>
              <p>
                I&apos;m going back twice in April, by then I hope to have sold the
                viffer and move on to a 600cc supersport.
              </p>
            </div>
            <Image
              alt="Me on a 2014 VFR800 at the JenningsGP motorcycle track."
              src="/assets/now/03-21-26/std_td.jpeg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[40%] rounded-xl"
              style={{ height: "auto" }}
            />
          </div>
          <h2>Olympic Weightlifting</h2>
          <p>
            I&apos;ve mostly stopped Olympic Lifting for the time being. With classes
            and work and whatnot, cutting so much time out of my day for something
            that has become such a tiny part of my life almost doesn&apos;t make any
            sense.
          </p>
          <p>
            I&apos;ll be back at some point. Not to win any medals, but to have some
            fun.
          </p>
          <h2>Programming</h2>
          <p>
            I&apos;ve started the <Link href="https://cses.fi/problemset/">CSES</Link>{" "}
            grind once again. I&apos;m not very good, but there&apos;s only one way to get
            better. Other than that, some projects I&apos;ve been working on
            inconsistently are:
          </p>
          <ul className="pl-4">
            <li>
              <Link href="https://github.com/alexanderpaolini/chat-summarize">
                chat, summarize
              </Link>
              <p className="pl-4">
                an actually useful chat assistant for a friend&apos;s Discord server
              </p>
            </li>
            <li>
              <Link href="https://github.com/KnightHacks/forge">
                KnightHacks/forge
              </Link>
              <p className="pl-4">
                the monorepo for UCF&apos;s Software Engineering Club, KnightHacks
              </p>
            </li>
          </ul>
        </div>
      </main>
      <FooterNav top={[OldNowLink]} />
    </>
  );
}
