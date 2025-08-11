import { HomePageFooterNav } from "@/components/footer";
import { NAME } from "@/constants";
import { INTRO_CONTENT } from "@/constants/intro-content";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 sm:gap-16">
        <div className="w-full space-y-4 sm:space-y-6">{INTRO_CONTENT}</div>
        <div className="w-full flex sm:justify-end justify-center">
          <div>
            <Image
              src="/assets/images/headshot.jpg"
              alt={`Picture of ${NAME}`}
              width={300}
              height={300}
              className="rounded-[20px] transition-transform duration-[3s] hover:rotate-360"
            />
          </div>
        </div>
      </main>
      <HomePageFooterNav/>
    </>
  );
}
