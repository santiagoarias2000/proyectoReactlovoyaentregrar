import { BrowserRouter} from "react-router-dom";
import "./App.css";
import { Header } from "./app/component/Header";
import { Ruteo } from "./app/util/routes/Route";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Ruteo/>
      </BrowserRouter>
    </div>
  );
}

export default App;
