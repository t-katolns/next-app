export type IProfile = {
  id: number;
  name: string;
  pictureUrl: string;
  age: number;
  headlineContent: HeadlineContent;
  area?: Area;
  introduction?: string;
  interests?: Interest[];
  purposes?: Purposes[];
  skills?: Skills[];
  languages?: Languages[];
};

export const initialProfile: IProfile = {
  id: 0,
  name: "",
  pictureUrl: "",
  age: null,
  headlineContent: null,
  area: null,
  introduction: "",
  interests: [],
  purposes: [],
  skills: [],
  languages: [],
};

export type HeadlineContent = {
  id: number;
  type: string;
  handline: string;
  subHeadline: string;
};

export type Area = {
  country: string;
  adminArea: string;
  locality: string;
};

export type Interest = {
  id: number;
  name: string;
};

export type Purposes = {
  id: number;
  name: string;
};

export type Skills = {
  id: number;
  name: string;
};

export type Languages = {
  id: number;
  language: Language;
  level: Level;
};

export type Language = {
  id: number;
  name: string;
};

export type Level = {
  id: number;
  name: string;
};
