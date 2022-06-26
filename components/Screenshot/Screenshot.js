import React, { createRef } from "react";
import PropTypes from "prop-types";
import { useScreenshot, createFileName } from "use-react-screenshot";

const Screenshot = ({ children }) => {
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const ref = createRef(null);

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div>
      <button
        onClick={downloadScreenshot}
        className="px-2 py-1 rounded bg-yellow-400 text-white"
      >
        Download
      </button>
      <div ref={ref}>{children}</div>
    </div>
  );
};

Screenshot.propTypes = {
  //
};

export default Screenshot;
