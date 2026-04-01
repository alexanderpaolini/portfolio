import { FooterNav } from "@/components/footer";
import { ProjectList } from "@/components/project/list";
import Link, { BackLink } from "@/components/link";

export default async function Projects() {
  return (
    <>
      <main>
        <BackLink href="/" />
        <h1 className="border-b-4">Projects</h1>
        <ProjectList />
      </main>
      <FooterNav />
    </>
  );
}
