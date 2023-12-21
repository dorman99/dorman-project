import { Projects } from "@/common/type";

type ProjectProps = {
  project: Projects;
};

function ProjectCard(props: ProjectProps) {
  const { project } = props;
  return (
    <>
      <div className="w-80 h-auto py-1">
        <div>
          <p className="text-sm font-bebas">{project.jobTitle} - {project.name}</p>
        </div>
        <p className="font-light">{project.timeRange}</p>
        <p className="py-1">{project.desc}</p>
      </div>
    </>
  );
}

export default ProjectCard;
