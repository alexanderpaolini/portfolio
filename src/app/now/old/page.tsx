import { FooterNav } from "@/components/footer";
import Link from "@/components/link";

export default function Page() {
  return (
    <>
      <main>
        <Link href="/now" className="link">
          <i className="nf nf-md-keyboard_backspace" />{" "}Back
        </Link>
        <h1 className="border-b-4 mb-6">Old Now Pages</h1>
        <p>Nothing here yet.</p>
        {/* <ul className="list-disc pl-6">
        <li>
        <Link href="/now/old/26-03-21">March 21, 2026</Link>
        </li>
      </ul> */}
      </main>
      <FooterNav />
    </>
  );
}
