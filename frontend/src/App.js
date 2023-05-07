import { useState } from "react";
import Dashboard from "./mainComponents/Dashboard";
import Register from "./mainComponents/Register";


function App() {
  const [username, setUsername] = useState("Valera");

  const componentToRender = username ? <Dashboard /> : <Register setUsername={(name) => setUsername(name)} />;
  console.log(componentToRender);

  return (
    <>
      {componentToRender}
    </>
  );
}


export default App;