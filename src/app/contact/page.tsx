import { FooterNav } from "@/components/footer";
import { Email, PhoneNumber, Socials } from "@/components/socials";
import { EMAIL, PHONE } from "@/constants";
import Link from "next/link";

export default async function Contact() {
  return (
    <main>
      <Link href="/" className="link">
        󰌍 Back
      </Link>
      <h1 className="border-b-4">Contact</h1>
      <section className="mt-8 flex flex-col gap-6">
        <p>Feel free to contact me by</p>
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col items-start gap-2 w-full max-w-xs">
            <div className="flex items-center gap-2 w-full">
              <p>Email:</p>
              <Email email={EMAIL.split("")} />
            </div>
            <div className="flex items-center gap-2 w-full">
              <p>Phone:</p>
              <PhoneNumber phone={PHONE.split("")} />
            </div>
            <span className="ms-16 w-full">
              I won&apos;t pick up my phone (leave a voicemail)
            </span>
          </div>
        </div>
        <p>or,</p>
        <div className="w-4/5">
          <Socials />
        </div>
      </section>
      <FooterNav />
    </main>
  );
}
