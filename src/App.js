import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import Signin from "./SigningPage/Signin";
import Reg from "./registerPage/reg";
import React from "react";
import { PublicLayout } from "./layouts/PublicLayout";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Involucrate } from "./pages/Involucrate";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { PageBlog } from "./pages/PageBlog";
import { DonationForm } from "./pages/DonationForm";

function App() {
  const loadLayout = (Layout, Page) => (
    <Layout>
      <Page />
    </Layout>
  );

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Reg />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<PublicRoutes />} />

        <Route path="/home" element={loadLayout(PublicLayout, Home)} />
        <Route path="/quienes-somos" element={loadLayout(PublicLayout, AboutUs)} />
        <Route path="/involucrate" element={loadLayout(PublicLayout, Involucrate)} />
        <Route path="/contactanos" element={loadLayout(PublicLayout, Contact)} />
        <Route path="/blog" element={loadLayout(PublicLayout, Blog)} />
        <Route path="/blog/historia" element={loadLayout(PublicLayout, PageBlog)} />
        <Route path="/donar" element={loadLayout(PublicLayout, DonationForm)} />
      </Routes>
    </HashRouter>
  );
}

export default App;
