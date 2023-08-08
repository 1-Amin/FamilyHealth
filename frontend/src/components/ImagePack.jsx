import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import imageData from "../data";

function ImagePack(){
  return (<ImageList sx={{ width: "auto", height: 450, maxWidth: "500px", maxHeight:"450px", minWidth: "280px", margin: "30px" }} variant="woven" cols={3} gap={8}>
  {imageData.map((item) => (
    <ImageListItem key={item.img} className="TherpistsImg" sx={{minWidth: "80px"}}>
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