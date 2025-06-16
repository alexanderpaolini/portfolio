import { EMAIL, NAME, PHONE } from "@/constants";
import Link from "next/link";
import { Email, PhoneNumber, Socials } from "./socials";

export function Footer() {
  return (
    <div className="pt-8 mt-auto pb-12">
      <div className="w-full border-t border-gray-200">
        <footer className="w-full max-w-4xl h-auto px-4 mx-auto mt-8 section">
          <div className="flex flex-col sm:flex-row justify-between text-start gap-8">
            <div className="w-full">
              <p>{NAME}</p>
              <Email email={EMAIL.split('')} />
              <PhoneNumber phone={PHONE.split('')} />
              <p>
                This website is <Link
                  href={`https://github.com/alexanderpaolini/portfolio`}
                  className="link">
                  open source
                </Link>
              </p>
            </div>
            <Socials />
          </div>
        </footer >
      </div >
    </div>
  );
}
