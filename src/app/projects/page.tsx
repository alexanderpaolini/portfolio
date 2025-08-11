import { ProjectsPageFooterNav } from "@/components/footer";
import { ProjectList } from "@/components/project/list";

export default async function Projects() {
  return (
    <main>
      <h1 className="border-b-4">Projects</h1>
      <ProjectList />
      <ProjectsPageFooterNav />
    </main>
  );
}
