import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./Components/PrivateRoutes";
import Login from "./Components/Login";
import Page2 from "./Components/Page2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/table" element={<Page2 />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
