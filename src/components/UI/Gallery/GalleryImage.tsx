import { getImagePath } from "@/helpers/formatters";
import { ImageStyled } from "./GalleryImageStyled";

interface GalleryImagePropsI {
  imageName: string;
  URLBase: string;
  defaultProductImage: string;
  alt: string;
  width?: number;
  height?: number;
  size?: string;
  lazy?: boolean;
  isModal?: boolean;
}

const GalleryImage = ({
  imageName,
  URLBase,
  defaultProductImage,
  alt,
  width,
  height,
  size,
  lazy,
  isModal = false,
}: GalleryImagePropsI) => (
  <picture>
    <source
      type="image/avif"
      srcSet={getImagePath(URLBase, imageName, "avif", size)}
    />
    <source
      type="image/webp"
      srcSet={getImagePath(URLBase, imageName, "webp", size)}
    />
    <ImageStyled
      src={getImagePath(URLBase, imageName, "jpg", size)}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? "lazy" : "eager"}
      decoding="async"
      onError={(e) => (e.currentTarget.src = defaultProductImage)}
      $isModal={isModal}
    />
  </picture>
);

export default GalleryImage;
