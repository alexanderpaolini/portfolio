import { FooterNav } from "@/components/footer";
import { ProjectList } from "@/components/project/list";
import Link from 'next/link';

export default async function Projects() {
  return (
    <main>
      <Link href="/" className="link">
        󰌍 Back
      </Link>
      <h1 className="border-b-4">Projects</h1>
      <ProjectList />
      <FooterNav />
    </main>
  );
}
