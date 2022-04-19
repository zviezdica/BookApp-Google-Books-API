import { useEffect, useRef, useState } from "react";
import EmbeddedViewer from "./EmbeddedViewer";
const ReadNowSection = ({ book }) => {
  return (
    <section>
      <EmbeddedViewer book={book} />
    </section>
  );
};

export default ReadNowSection;
