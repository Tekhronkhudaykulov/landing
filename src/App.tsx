import Router from "./router/Router";
import "./App.css";
import "./views/fonts/index.css";
import AOS from "aos";

function App() {
  AOS.init();
  return <Router />;
}

export default App;
