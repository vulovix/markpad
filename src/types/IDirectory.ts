export interface IDirectory {
  type: "file" | "dir";
  name: string;
  path: string;
  children: IDirectory[];
  size?: number;
  createDate?: number; // unix timestamp
  lastModifiedDate?: number; // unix timestamp
}
