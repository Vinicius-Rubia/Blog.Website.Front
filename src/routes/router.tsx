import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Blog } from "@/pages/blog";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-background font-inter">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
