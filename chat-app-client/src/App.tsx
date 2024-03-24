import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useChatService } from "./hooks/use-chat-service";

function App() {
  const [count, setCount] = useState(0);
  const { isConnected, connect, disconnect } = useChatService();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + VIM</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {!isConnected && <button onClick={connect}>connect to service</button>}
      {isConnected && (
        <button onClick={disconnect}>disconnect to service</button>
      )}
      <p>is connected: {isConnected.toString()}</p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
