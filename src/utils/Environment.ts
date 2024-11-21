import { NotImplementException } from "../errors/NotImplementedException";

const supportedBackends = ["tauri"];

export type OSType = "win32" | "darwin" | "linux";

export class Environment {
  // public static readonly CODE_LANGUAGES: string[] = [
  //   "mermaid",
  //   "abc",
  //   "apache",
  //   "js",
  //   "ts",
  //   "html",
  //   "properties",
  //   "apache",
  //   "bash",
  //   "c",
  //   "csharp",
  //   "cpp",
  //   "css",
  //   "coffeescript",
  //   "diff",
  //   "go",
  //   "xml",
  //   "http",
  //   "json",
  //   "java",
  //   "javascript",
  //   "kotlin",
  //   "less",
  //   "lua",
  //   "makefile",
  //   "markdown",
  //   "nginx",
  //   "objectivec",
  //   "php",
  //   "php-template",
  //   "perl",
  //   "plaintext",
  //   "python",
  //   "python-repl",
  //   "r",
  //   "ruby",
  //   "rust",
  //   "scss",
  //   "sql",
  //   "shell",
  //   "swift",
  //   "ini",
  //   "typescript",
  //   "vbnet",
  //   "yaml",
  //   "ada",
  //   "clojure",
  //   "dart",
  //   "erb",
  //   "fortran",
  //   "gradle",
  //   "haskell",
  //   "julia",
  //   "julia-repl",
  //   "lisp",
  //   "matlab",
  //   "pgsql",
  //   "powershell",
  //   "sql_more",
  //   "stata",
  //   "cmake",
  //   "mathematica",
  //   // ext
  //   "solidity",
  //   "yul",
  // ];

  public static get backend(): string {
    const backend = import.meta.env.VITE_BACKEND ?? "unknown";
    if (supportedBackends.includes(backend ?? "")) {
      return backend;
    } else {
      throw new NotImplementException(`Unsupported backend: ${backend}.`);
    }
  }

  public static get isElectron(): boolean {
    return this.backend === "electron";
  }

  public static get isTauri(): boolean {
    return this.backend === "tauri";
  }

  public static readonly MAX_HISTORY_LENGTH = 10;
}
