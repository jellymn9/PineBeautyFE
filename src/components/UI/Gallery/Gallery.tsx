import { GalleryContainer } from "./GalleryStyled";

interface GalleryPropsI {
  imagesNames: Array<string>;
}

const URLBase = import.meta.env.VITE_R2_BUCKET_URL;

const Gallery = ({ imagesNames }: GalleryPropsI) => {
  const [fisrtImage, ...restOfTheImages] = imagesNames;
  return (
    <GalleryContainer>
      <picture>
        <source
          type="image/avif"
          src={`${URLBase}/${fisrtImage}_558x502.avif`}
        />
        <source
          type="image/webp"
          src={`${URLBase}/${fisrtImage}_558x502.webp`}
        />
        <img
          src={`${URLBase}/${fisrtImage}_558x502.jpg`}
          alt="First image in gallery"
        />
      </picture>
      {restOfTheImages.map((image) => (
        <picture>
          <source type="image/avif" src={`${URLBase}/${image}_274x247.avif`} />
          <source type="image/webp" src={`${URLBase}/${image}_274x247.webp`} />
          <img src={`${URLBase}/${image}_274x247.jpg`} alt={`Image ${image}`} />
        </picture>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
