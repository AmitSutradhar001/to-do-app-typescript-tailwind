import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Signup from "../../pages/Signup";
import Signin from "../../pages/Signin";
import RootLayout from "../../layout/Root";
// import Home from './Home';
// import Signup from './Signup';
// import Signin from './Signin';

const Root = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes inside the Layout */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />{" "}
          {/* The index route maps to the root "/" */}
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;
