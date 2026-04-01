import { FooterNav } from "@/components/footer";
import Link, { BackLink } from "@/components/link";

export default function Page() {
  return (
    <>
      <main>
        <BackLink href="/now/old" />
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
