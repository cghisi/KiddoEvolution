import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

import { Button} from '../../components/Button';

export const ImageGrid = ({ slice }) => {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl text-center font-bold my-5">
        <PrismicRichText field={slice.primary.title} />
      </h2>
      <div className="flex flex-col md:flex-row">
        {slice.items.map((item, index) => (
          <div key={index} className="md:w-1/2 text-center m-5">
            <Image
              src={item.image.url}
              alt={item.image.alt}
              width={650}
              height={650}
            />
            <div className="md:text-left md:mx-10 my-10 text-center">
              <b>{item.title}</b> - <PrismicRichText field={item.description} />
            </div>
            <div className="text-center">
              <Button
                primary
                label={item.button_title}
                url={item.button_link}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};