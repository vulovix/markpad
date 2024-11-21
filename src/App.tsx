import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Platform } from "./ipc";
import HomeScreen from "./features/HomeScreen/HomeScreen";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  const selectDir = async () => {
    const root = await Platform.selectDirectory();
    console.log(root);
    setName(JSON.stringify(root));
    // if (root !== undefined) {
    //   setState((state) => ({ ...state, root, children: root.children }));
    //   console.log("selectRootDir", root);
    //   closeCurrentDoc();
    //   toggleSidebarExpanded(true);
    // } else {
    //   console.error("selectRootDir:", "Failed to open root directory");
    // }
  };

  return (
    <div className="container">
      <HomeScreen />
    </div>
  );

  return (
    <main className="container">
      <h1>Welcome to</h1>
      <h1>MarkPad</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
          selectDir();
        }}
      >
        <input id="greet-input" onChange={(e) => setName(e.currentTarget.value)} placeholder="Enter a name..." />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>
    </main>
  );
}

export default App;
