import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./Component/Rootlayout";
import Home from "./Pages/Home";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route>
        <Route index element={<Home />} />

        {/* <Route path="/about" element={<About_P />} /> */}
      </Route>
    </Route>
  )
);
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
