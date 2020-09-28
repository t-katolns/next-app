export interface ISearch {
  company?: string;
  business?: string;
  school?: string;
  introduction?: string;
  area?: string;
  skill?: string;
  humidity?: string;
}

export const initialSearch: ISearch = {
  company: "",
  business: "",
  school: "",
  introduction: "",
  area: "",
  skill: "",
  humidity: "",
};
