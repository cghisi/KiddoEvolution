import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

import { Button } from "../../components/Button";

export default function TextWithImage({ slice }) {
  let divPosition = "md:flex-row flex-col-reverse";
  let imgPosition = "text-center";
  if (slice.primary.image_position == "left") {
    divPosition = "flex-col-reverse md:flex-row-reverse text-left";
    imgPosition = "text-left";
  }

  return (
    <section
      className="md:py-2 py-1"
      style={{ backgroundColor: slice.primary.background_color }}
    >
      <div className="container mx-auto text-center my-10 md:my-20">
        <div className={["flex flex-col md:flex-row", divPosition].join(" ")}>
          <div className="md:w-1/2 m-auto text-center md:text-left px-5">
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
              }}
            />
            <div className="py-10">
              <PrismicRichText field={slice.primary.description} />
            </div>
            {slice.primary.button_title ? (
              <Button
                primary
                label={slice.primary.button_title}
                url={slice.primary.button_link}
              />
            ) : null}
          </div>
          <div className={["md:w-1/2 px-5 text-center", imgPosition].join(" ")}>
            <Image
              src={slice.primary.image.url}
              alt={slice.primary.image.alt}
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
    </section>
  );
}