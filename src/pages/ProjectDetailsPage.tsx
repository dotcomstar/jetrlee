import { useParams } from "react-router-dom";

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  return slug;
};

export default ProjectDetailsPage;
