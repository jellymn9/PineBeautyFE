import { SingleImageModal } from "./GaleryModalStyled";
import GalleryImage from "./GalleryImage";

interface GalleryModalPropsI {
  URLBase: string;
  imageName: string;
  defaultProductImage: string;
  onClose: () => void;
}

const GalleryModal = ({
  URLBase,
  imageName,
  defaultProductImage,
  onClose,
}: GalleryModalPropsI) => {
  return (
    <SingleImageModal onClick={onClose}>
      <GalleryImage
        isModal
        URLBase={URLBase}
        defaultProductImage={defaultProductImage}
        imageName={imageName}
        alt={`Image ${imageName} in modal`}
      />
    </SingleImageModal>
  );
};

export default GalleryModal;
