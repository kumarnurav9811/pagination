import React, { useEffect, useState } from "react";
import Images from "./Images";

const Pagination = (props) => {

  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      });
  }, []);
  return (
    <div>
      <Images data={images} />
    </div>
  );
};

export default Pagination;
