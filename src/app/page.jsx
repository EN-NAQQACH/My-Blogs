import React from "react";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-fit ">
       <Hero />
       <CategoriesSection />
      <MainSection />
    </main>
  );
}
