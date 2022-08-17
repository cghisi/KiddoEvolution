import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

export const IconList = ({ slice }) => {
  return (
    <section
      className="py-10"
      style={{ backgroundColor: slice.primary.background_color }}
    >
      <h2 className="text-3xl text-center font-bold my-5">
        <PrismicRichText field={slice.primary.title} />
      </h2>
      <div className="text-center">
        {slice.items.map((item, index) => (
          <div key={index} className="inline-block md:m-20 m-10">
            <Image
              src={item.image.url}
              alt={item.image.alt}
              width={150}
              height={40}
            />
            <div className="mt-5">
              <h3 className="font-normal">{item.title}</h3>
              <PrismicRichText field={item.description} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// export const Button = ({ primary, backgroundColor, size, label, url, ...props }) => {
//     const mode = primary
//       ? "border-2 border-black py-4 px-5 hover:bg-black hover:text-white font-medium"
//       : "border-2 border-black bg-black text-white py-4 px-5 hover:bg-white hover:text-black font-medium";
  
//     if (url.url){
//       return (
//         <Link
//           {...props}
//           href={hrefResolver(url)} passHref>
//           <a className={[`btn--${size}`, mode].join(" ")}>{label}</a>
//         </Link>
//       );
//     }
//   };