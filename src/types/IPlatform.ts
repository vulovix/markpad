import { IDirectory } from "./IDirectory";
import { IFileFilter } from "./IFileFilter";

export interface IPlatform {
  win: {
    // TODO
    close(): void;

    minimize(): void;

    toggleMaximize(): void;

    /**
     * Notify the callback when current window is about to close.
     *
     * @param callback If `callback` returns `true`, continue closing,
     * otherwise it will prevent window from closing.
     * @returns An unlisten function.
     */
    onWillClose(callback: () => Promise<boolean>): Promise<() => void>;
  };

  os: {
    readCliArgs(): Promise<ICliArgs>;

    // 设置 Markditor 为 Markdown 文件的默认打开方式
    setAsDefaultOpenApp(): Promise<boolean>;
  };

  selectDirectory(): Promise<IDirectory | undefined>;

  listDirectories(path: string): Promise<IDirectory[]>;

  // 选择文件（使用对话框）
  selectFile(filter: IFileFilter): Promise<IDirectory | undefined>;

  readFile(path: string): Promise<string | undefined>;

  saveFile(path: string, content: string): Promise<boolean>;

  createDir(path: string): Promise<boolean>;

  createFile(path: string): Promise<boolean>;

  copyFile(source: string, dest: string): Promise<boolean>;

  renameDir(oldPath: string, newPath: string): Promise<boolean>;

  renameFile(oldPath: string, newPath: string): Promise<boolean>;

  deleteDir(path: string): Promise<boolean>;

  deleteFile(path: string): Promise<boolean>;

  exists(path: string): Promise<boolean>;

  showSaveDialog(): Promise<string | undefined>;
  // 获取系统信息
  getSystemInfo(): Promise<string>;

  // 打开开发者调试工具
  openDevTools(): Promise<void>;

  openInBrowser(url: string): Promise<void>;

  // 在系统文件管理器中打开文件
  locateFile(filePath: string): void;

  // 在系统文件管理器中打开文件夹
  locateFolder(folderPath: string): void;
}

export type ICliArgs = {
  source?: string;
};
