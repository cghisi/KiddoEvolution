import React from 'react'
import { PrismicRichText } from "@prismicio/react"

export default function RichText({ slice }) {
  return (
    <section
      className="py-48"
      style={{
        backgroundColor: slice.primary.background_color,
      }}
    >
      <div className="container mx-auto">
        <div className="text-center md:w-2/3 md:mx-auto mx-5">
          <h2 className="text-3xl font-bold mb-6">
            <PrismicRichText field={slice.primary.title}/>
          </h2>
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
}