import React from "react";
import Link from 'next/link';
import { PrismicLink, PrismicText } from "@prismicio/react";

export const Button = ({ primary, color, size, label, url, ...props }) => {
  const mode = primary
    ? "border-2 border-black py-4 px-5 hover:bg-black hover:text-white font-medium"
    : "border-2 border-black bg-black text-white py-4 px-5 hover:bg-white hover:text-black font-medium";

  if (url.url){
    return (
      <PrismicLink field={ url } className={[`btn--${size}`, mode].join(" ")}>
        { label } 
      </PrismicLink>
    );
  }
};