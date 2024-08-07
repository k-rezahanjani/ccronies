"use client";
import React from "react";
import { VscSend } from "react-icons/vsc";
import { FaLinkedinIn, FaInstagram, FaBehance, FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Footer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:admin@ccronies.com?subject=Start a Project&body=Hi, here is my email: ${formData.email}.`;
  };

  return (
    <footer id="footer" className="bg-black py-10 flex flex-row justify-between items-center w-full px-40 md:flex-col sm:px-3 lg:px-6">
      {/* Contact Info */}
      <div className="flex flex-col text-[#DBD8D3] text-sm md:my-10 md:order-2">
        <p>admin@ccronies.com</p>
        <p>+98-9308888039</p>
      </div>

      {/* Email Form and Social Links */}
      <div className="flex flex-col items-center md:order-1">
        {/* Start Project */}
        <button onClick={handleSubmit(onSubmit)} className="flex items-center text-2xl text-[#F99D1C] mb-3 cursor-pointer">
          <span>Start a project</span>
          <VscSend size={20} className="ml-2" />
        </button>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs mb-4">
          <div className="flex items-center border-b border-[#DBD8D3] py-2">
            <input
              {...register("email", { required: true })}
              type="email"
              className="appearance-none bg-transparent text-white placeholder-[#DBD8D3] mr-3 py-1 px-2 leading-tight focus:outline-none w-full"
              placeholder="Add Your Email"
            />
            <button type="submit" className="text-[#DBD8D3]">
              <VscSend size={20} />
            </button>
          </div>
        </form>
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/creative.cronies?igsh=OHhocjdtMWhjaTZz">
            <FaInstagram size={20} className="text-[#DBD8D3]" />
          </Link>
          <Link href="https://www.behance.net/creativecronies">
            <FaBehance size={20} className="text-[#DBD8D3]" />
          </Link>
          <Link href="https://linkedin.com/company/creativecronies">
            <FaLinkedinIn size={20} className="text-[#DBD8D3]" />
          </Link>
          <Link href="https://wa.me/message/STYUCRJSSANFP1">
            <FaWhatsapp size={20} className="text-[#DBD8D3]" />
          </Link>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col text-[#DBD8D3] text-sm md:order-3">
        <p className="capitalize">&copy; Creative Cronies</p>
        <p className="cursor-pointer">Privacy & Terms</p>
      </div>
    </footer>
  );
};

export default Footer;
