import React from "react";
// react router version ^6
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import People from "./People";
import Person from "./Person";
import Error from "./Error";
// navbar
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouterSetup;

// import React from "react";
// // react router - older version (below 6)
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import People from "./People";
// import Person from "./Person";
// import Error from "./Error";
// // navbar
// import Navbar from "./Navbar";

// const ReactRouterSetup = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/people">
//           <People />
//         </Route>
//         <Route path="/person/:id" children={<Person />}></Route>
//         <Route path="*">
//           <Error />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default ReactRouterSetup;
