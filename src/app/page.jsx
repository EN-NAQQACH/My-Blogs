import React from "react";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <main className="h-screen ">
     <Hero />
      <CategoriesSection />
      <MainSection />
    </main>
  );
}
