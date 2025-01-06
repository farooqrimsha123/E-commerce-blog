import AuthorCard from "@/components/AuthorCard";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import About from "./about/page";
import Contact from "./contactUs/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Rimsha Dynamic Blog
      <Navbar/>
      <AuthorCard/>
      <Mega/>
      <Feature/>
      <About/>
      <Contact/>
      <Footer/>
      
      </div>

  );
}
