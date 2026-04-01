import { FooterNav } from "@/components/footer";
import Link from "@/components/link";

export default function Page() {
  return (
    <>
      <main>
        <Link href="/now/old" className="link">
          <i className="nf nf-md-keyboard_backspace" /> Back
        </Link>
        <h1 className="border-b-4">Now</h1>
        <span>Written: March 21, 2026</span>
        <div className="mt-8">
          <p>
            This is here as a placeholder. Not sure why you&apos;re even
            looking...
          </p>
        </div>
      </main>
      <FooterNav />
    </>
  );
}
