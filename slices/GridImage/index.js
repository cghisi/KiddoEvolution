import React from "react";

import { IconList } from "./IconList";
import { ImageGrid } from "./ImageGrid";

export default function GridImage({ slice }) {
  if (slice.variation == "gridWithIcon") {
    return (
      <section>
        <IconList slice={slice} />
      </section>
    );
  } else {
    return (
      <section>
        <ImageGrid slice={slice} />
      </section>
    );
  }
}