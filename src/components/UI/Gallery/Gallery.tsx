import { getImagePath } from "@/helpers/formatters";
import { GalleryContainer } from "./GalleryStyled";
import defaultProductImage from "@/assets/defaultProductImage.svg";

interface GalleryPropsI {
  imagesNames: Array<string>;
}

const URLBase = import.meta.env.VITE_R2_BUCKET_URL;

const Gallery = ({ imagesNames }: GalleryPropsI) => {
  const [firstImage, ...restOfTheImages] = imagesNames;

  return (
    <GalleryContainer>
      <picture>
        <source
          type="image/avif"
          srcSet={getImagePath(URLBase, firstImage, "558x502", "avif")}
        />
        <source
          type="image/webp"
          srcSet={getImagePath(URLBase, firstImage, "558x502", "webp")}
        />
        <img
          src={getImagePath(URLBase, firstImage, "558x502", "jpg")}
          alt="First image in gallery"
          width="558"
          height="502"
          onError={(e) => (e.currentTarget.src = defaultProductImage)}
        />
      </picture>

      {restOfTheImages.map((image) => (
        <picture key={image}>
          <source
            type="image/avif"
            srcSet={getImagePath(URLBase, image, "274x247", "avif")}
          />
          <source
            type="image/webp"
            srcSet={getImagePath(URLBase, image, "274x247", "webp")}
          />
          <img
            src={getImagePath(URLBase, image, "274x247", "jpg")}
            alt={`Image ${image}`}
            width="274"
            height="247"
            loading="lazy"
            decoding="async"
            onError={(e) => (e.currentTarget.src = defaultProductImage)}
          />
        </picture>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
