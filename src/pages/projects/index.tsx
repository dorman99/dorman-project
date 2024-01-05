import { COMPANY_HISTORIES } from "@/common/constant";
import { Projects } from "@/common/type";
import Modal from "@/components/modal";
import ProjectCard from "@/components/project-card";
import { useState } from "react";

function ProjectsPage() {
  const [companyHistories, setCompanyHistories] = useState(COMPANY_HISTORIES);
  const renderProjects = (projects: Array<Projects>) => {
    return projects.map((p, idx) => (
      <div className="flex flex-wrap overflow-x-hidden h-96" key={idx}>
        <ProjectCard key={idx} project={p} />
      </div>
    ));
  };

  const toogleHide = (idx: number) => {
    companyHistories[idx].isShownProject = true;
    setCompanyHistories([...companyHistories]);
  };

  const closeModal = () => {
    const comps = companyHistories.map((c) => {
      c.isShownProject = false;
      return c;
    });
    setCompanyHistories([...companyHistories, ...comps]);
  };

  return (
    // full height of the screen
    <div className="bg-gray-300 h-full pt-5">
      {/* fix height & overflow, keeps the footer visible */}
      <div className="h-85 overflow-scroll flex flex-wrap justify-center items-center">
        <div className="flex flex-wrap justify-center">
          {COMPANY_HISTORIES.map((ch, idx) => (
            // p-10 would cramp & push the box causing overflow
            <div key={idx} className="p-10">
              <div className="w-80">
                <div className="flex flex-wrap justify-between">
                  <p className="font-bebas">{ch.companyName}</p>{" "}
                  <button
                    className="text-xs underline"
                    onClick={() => toogleHide(idx)}
                  >
                    {!ch.isShownProject ? "detail" : "hide"}
                  </button>
                </div>
                <div>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                    dolores illo accusantium quod veritatis.
                  </p>
                </div>
              </div>
              {ch.isShownProject && (
                <Modal onClose={closeModal}>{renderProjects(ch.projects)}</Modal>
              )}
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
    </div>
  );
}

export default ProjectsPage;
