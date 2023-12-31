import { COMPANY_HISTORIES } from "@/common/constant";
import { Projects } from "@/common/type";
import Modal from "@/components/modal";
import ProjectCard from "@/components/project-card";
import { useState } from "react";

function ExperiencesPage() {
  const [companyHistories, setCompanyHistories] = useState(COMPANY_HISTORIES);
  const renderProjects = (projects: Array<Projects>) => {
    return (
      <div className="flex overflow-x-scroll hide-scroll-bar">
        {projects.map((p, idx) => (
          <div className="inline-block">
            <ProjectCard key={idx} project={p} />
          </div>
        ))}
      </div>
    );
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
    <div className="bg-gray-200 min-h-full min-w-full flex mobile-only:block mobile-only:h-96 mobile-only:overflow-x-auto">
      {/* fix height & overflow, keeps the footer visible */}
      {/* <div className="min-h-full overflow-scroll flex-1 bg-red-500"> */}
      <div className="flex flex-wrap justify-center items-center overflow-scroll">
        {COMPANY_HISTORIES.map((ch, idx) => (
          // p-10 would cramp & push the box causing overflow
          <div key={idx} className="p-5">
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
      {/* </div> */}
    </div>
  );
}

export default ExperiencesPage;
