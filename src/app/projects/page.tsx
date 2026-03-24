import { FooterNav } from "@/components/footer";
import { ProjectList } from "@/components/project/list";
import Link from "@/components/link";

export default async function Projects() {
  return (
    <main>
      <Link href="/" className="link">
        <i className="nf nf-md-keyboard_backspace" />{" "}Back
      </Link>
      <h1 className="border-b-4">Projects</h1>
      <ProjectList />
      <FooterNav />
    </main>
  );
}
