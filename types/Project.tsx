import ContentType from "./Content";

type ProjectType = {
  title: string;
  categories: string;
  thumb: string;
  logo: string;
  images?: string[];
  github?: string;
  website?: string;
  content: ContentType;
  id: string;
};

export default ProjectType;
