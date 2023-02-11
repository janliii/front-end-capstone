import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutComponent from "./components/Layout";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import MySpots from "./pages/MySpots";

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="findaspot">
          <Route index element={<AboutPage />} />
          <Route path=":number" element={<AboutPage />} />
        </Route>
        <Route path="myspots">
          <Route index element={<MySpots />} />
        </Route>
        <Route path="randomspot" element={<LayoutComponent />}>
          {/* <Route index element={<AboutPage />} /> */}
          <Route path=":number" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
