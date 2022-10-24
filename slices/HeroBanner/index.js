import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

import { Button } from "../../components/Button";

export default function HeroBanner({ slice }) {
  return (
    <section>
      <div
        style={{backgroundColor: slice.primary.background_color }}
      >
        <div className="flex flex-wrap md:flex-nowrap items-center container mx-auto">
          <div className="md:w-1/2 px-5 text-center md:text-left">
              <PrismicRichText
              field={slice.primary.title}
              components={{
                heading1: ({ children }) => <h1 className="md:text-5xl text-4xl font-bold md:mr-5">{children}</h1>,
              }}
            />
            <p className="my-8 font-normal">{slice.primary.subtitle}</p>
            <Button
              primary
              label={slice.primary.button_title}
              url={slice.primary.button_link}
              color={slice.primary.button_color}
            />
          </div>
          <div className="md:w-1/2 md:text-right mx-5">
            <Image
              src={slice.primary.image.url}
              alt={slice.primary.image.alt}
              width={650}
              height={650}
            />
          </div>
        </div>
      </div>
    </section>
  );
}