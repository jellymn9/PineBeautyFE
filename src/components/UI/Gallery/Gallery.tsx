import { GalleryContainer, WrappingButton } from "./GalleryStyled";
import defaultProductImage from "@/assets/defaultProductImage.svg";
import { useState } from "react";
import GalleryModal from "./GalleryModal";
import GalleryImage from "./GalleryImage";

interface GalleryPropsI {
  imagesNames: Array<string>;
}

const URLBase = import.meta.env.VITE_R2_BUCKET_URL;

const Gallery = ({ imagesNames }: GalleryPropsI) => {
  const [firstImage, ...restOfTheImages] = imagesNames;
  const [isImg, setIsImg] = useState("");

  const handleImageOpen = (imageName: string) => {
    setIsImg(imageName);
  };

  return (
    <>
      {isImg && (
        <GalleryModal
          URLBase={URLBase}
          imageName={isImg}
          defaultProductImage={defaultProductImage}
          onClose={() => setIsImg("")}
        />
      )}
      <GalleryContainer>
        <WrappingButton onClick={() => handleImageOpen(firstImage)}>
          <GalleryImage
            URLBase={URLBase}
            defaultProductImage={defaultProductImage}
            imageName={firstImage}
            size="558x502"
            alt="First image in gallery"
            width={558}
            height={502}
          />
        </WrappingButton>

        {restOfTheImages.map((image) => (
          <WrappingButton key={image} onClick={() => handleImageOpen(image)}>
            <GalleryImage
              imageName={image}
              URLBase={URLBase}
              defaultProductImage={defaultProductImage}
              size="274x247"
              alt={`Image ${image}`}
              width={274}
              height={247}
            />
          </WrappingButton>
        ))}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
