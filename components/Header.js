import React from "react";
import NextLink from "next/link";
import Image from "next/image";

import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";

import Navigation from "./navigation";

const Header = ({ navigation, altLangs }) => {
  return (
    <header
      style={{
        backgroundColor: navigation.data.background,
      }}
    >
      <div className="flex container mx-auto">
        <div className="flex items-center py-6 sm:w-1/3 md:w-2/5">
          <NextLink href={"/"} passHref>
            <a>
              <Image src="/KIDDO.png" alt="KIDDO" width={110} height={42} />
            </a>
          </NextLink>
        </div>
        <div className="hidden md:flex justify-end items-center py-6 md:w-3/5 sm:w-1/3">
          <ul>
            {navigation.data?.links.map((item, index) => (
              <li className="mr-6 inline-block" key={index}>
              <PrismicLink field={ item.url } className="text-black link-navigation">
                { item.label } 
              </PrismicLink>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;