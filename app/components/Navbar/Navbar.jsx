import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import DarkmodeToggle from "../DarkmodeToggle/DarkmodeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between">
      <div className="text-4xl md:text-2xl font-bold">Alter Ego</div>
      <div className=" flex  gap-5 text-lg md:text-base">
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <DarkmodeToggle />
        <AuthLinks />
      </div>
      <div className="flex gap-3">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Navbar;
