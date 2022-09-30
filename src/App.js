import "./App.css";
import Main from "./components/Main/Main";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Main></Main>
    </div>
  );
}

export default App;
