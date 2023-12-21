export type Projects = {
  name: string;
  jobTitle: string;
  timeRange: string;
  desc: string;
  images: Array<string>;
};

export type CompanyHistory = {
  companyName: string;
  timeRange: string;
  isShownProject: boolean;
  projects: Array<Projects>;
  tackStacks: Array<string>;
  url?: string;
};
