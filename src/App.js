import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import Signin from "./SigningPage/Signin";
import Reg from "./registerPage/reg";
import React from "react";
import {PublicLayout} from "./layouts/PublicLayout";
import {Home} from "./pages/Home";
import {AboutUs} from "./pages/AboutUs";
import {Involucrate} from "./pages/Involucrate";
import {Contact} from "./pages/Contact";
import {Blog} from "./pages/Blog";
import {PageBlog} from "./pages/PageBlog";
import {DonationForm} from "./pages/DonationForm";

function App() {
     const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/signup" element={<Reg/>}></Route>
        <Route path="/Signin" element={<Signin/>}></Route>
        <Route path="/dashboard" element={<PublicRoutes />}></Route>
        <Route path="/Home" element={loadLayout(PublicLayout, Home)} />
      <Route
        path="/quienes-somos"
        element={loadLayout(PublicLayout, AboutUs)}
      />
      <Route
        path="/involucrate"
        element={loadLayout(PublicLayout, Involucrate)}
      />
      <Route path="/contactanos" element={loadLayout(PublicLayout, Contact)} />
      <Route path="/blog" element={loadLayout(PublicLayout, Blog)} />
      <Route
        path="/blog/historia"
        element={loadLayout(PublicLayout, PageBlog)}
      />
      <Route path="/donar" element={loadLayout(PublicLayout, DonationForm)} />

      </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
