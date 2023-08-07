import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import imageData from "../data";

function ImagePack(){
  return (<ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
  {imageData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=161&fit=crop&auto=format`}
        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
        className="TherpistsImg"
      />
    </ImageListItem>
  ))}
</ImageList>);
}



export default ImagePack;