import { COMPANY_HISTORIES } from "@/common/constant";
import { Projects } from "@/common/type";
import ProjectCard from "@/components/project-card";
import { useState } from "react";

function ProjectsPage() {
  const [companyHistories, setCompanyHistories] = useState(COMPANY_HISTORIES);
  const renderProjects = (projects: Array<Projects>) => {
    return projects.map((p, idx) => <ProjectCard key={idx} project={p} />);
  };

  const toogleHide = (idx: number) => {
    const comp = companyHistories[idx];
    comp.isShownProject = !comp.isShownProject;
    setCompanyHistories({ ...companyHistories, ...comp });
  };

  return (
    <div className="bg-gray-300 h-full">
      <div className="flex flex-wrap justify-start">
        {COMPANY_HISTORIES.map((ch, idx) => (
          <div key={idx} className="p-10">
            <div className="w-80">
              <div className="flex flex-wrap justify-between">
                <p className="font-bebas">{ch.companyName}</p>{" "}
                <button
                  className="text-xs underline"
                  onClick={() => toogleHide(idx)}
                >
                  {!ch.isShownProject ? "expand" : "hide"}
                </button>
              </div>
              <div>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  dolores illo accusantium quod veritatis.
                </p>
              </div>
            </div>
            {ch.isShownProject && renderProjects(ch.projects)}
            <div className="w-full">
              <p className="font-bebas">tech stacks:</p>
              <div className="border border-black  flex flex-wrap w-80 justify-center">
                {ch.tackStacks.map((ts, idx) => (
                  <div className="p-1 font-semibold text-sm" key={idx}>
                    {ts}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
