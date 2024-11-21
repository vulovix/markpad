import { IFileFilter } from "../types/IFileFilter";

export const markdownFileType = (): IFileFilter => {
  return {
    name: "Markdown File",
    extensions: ["md", "markdown"],
  };
};

export const imageFileType = (): IFileFilter => {
  return {
    name: "Image File",
    extensions: ["jpg", "jpeg", "png", "webp", "gif", "bmp", "svg"],
  };
};
