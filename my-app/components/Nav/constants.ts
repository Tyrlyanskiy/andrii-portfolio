export interface ILinkItem {
  name: string;
  path: string;
}

export const links: ILinkItem[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
