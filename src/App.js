import "./styles.css";
import { Main, Success, Failure} from "./pages";
import Form from "./pages/Form";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = (props) => {
  console.log("app ko console", props);
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/success" element={<Success />} />

        
        <Route path="/failed" element={<Failure />} />
        <Route path="/" element={<Form />} />
      
      </Routes>
    </Router>
    
    
    </div>
  );
};

export default App;
