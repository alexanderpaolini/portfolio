import { FooterNav } from "@/components/footer";
import { NAME } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 sm:gap-16">
        <div className="w-full space-y-4 sm:space-y-6">
          <h1>Hi,</h1>
          <p>
            I&apos;m Alexander Paolini, a Computer Science student at the{" "}
            <Link href="https://www.google.com/search?q=UCF" className="link">
              University of Central Florida
            </Link>
            .
          </p>
          <p>
            Looking for my projects?{" "}
            <Link href="/projects" className="link">
              Right here!
            </Link>
          </p>
        </div>
        <div className="w-full flex sm:justify-end justify-center">
          <div>
            <Image
              src="/assets/images/headshot.jpg"
              alt={`Picture of ${NAME}`}
              width={300}
              height={300}
              className="rounded-[20px] hover:-scale-x-100"
            />
          </div>
        </div>
      </main>
      <FooterNav />
    </>
  );
}
