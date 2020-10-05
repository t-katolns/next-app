export interface ISearch {
  name?: string;
  business?: string;
  school?: string;
  introduction?: string;
  area?: string;
  skill?: string;
  humidity?: string;
  languages: string;
}

export const initialSearch: ISearch = {
  name: "",
  business: "",
  school: "",
  introduction: "",
  area: "",
  skill: "",
  humidity: "",
  languages: "",
};
