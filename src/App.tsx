import { RoutesMain } from "./routes";
import "./styles/animations.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <> 
      <ToastContainer />
      <RoutesMain />
    </>
  );
}

export default App;
