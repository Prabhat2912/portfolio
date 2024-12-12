export type navLink = {
  id: number;
  title: string;
  url: string;
};
export type BaseInfos = {
  name: string;
  position: string;
  description: string;
  profilePic: string;
};
export type servicesDatas = {
  id: number;
  title: string;
  description: string;
  icon: string;
};
export type AboutData = {
  title: string;
  description: string;
  skills: {
    name: string;
    color: string;
  }[];
  stats: {
    name: string;
    value: string;
    description: string;
    image: string;
  }[];
};
export type ProjectData = {
  id: number;
  name: string;
  url: string;
};
export type skills = {
  id: number;
  title: string;
  image: string;
};
