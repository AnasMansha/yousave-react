import { useContext } from "react";
import CustomDialog from "./CustomDialog";
import ActiveModalContext from "contexts/ActiveModalContext";
import { MODAL_TYPES } from "constants/index";
import ImageGallery from "./ImageGallery";

const ImageGalleryModal = () => {
  const [activeModal, setActiveModal] = useContext(ActiveModalContext);

  return (
    <CustomDialog
      open={activeModal?.type === MODAL_TYPES.IMAGE_GALLERY}
      onClose={() => setActiveModal({ ...activeModal, type: null })}
    >
      <ImageGallery
        imageUrls={activeModal?.images}
        initialImage={activeModal?.initialImage}
      />
    </CustomDialog>
  );
};

export default ImageGalleryModal;
