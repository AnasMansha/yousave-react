import CustomDialog from "components/common/CustomDialog";
import { MODAL_TYPES } from "constants/index";
import ActiveModalContext from "contexts/ActiveModalContext";
import { useContext } from "react";

const IOSInstallGuideModal = () => {
  const [activeModal, setActiveModal] = useContext(ActiveModalContext);
  return (
    <CustomDialog
      open={activeModal === MODAL_TYPES.INSTALL_GUIDE_IOS}
      onClose={() => setActiveModal(null)}
      title="Ios popup"
    >
      <div>To install on ios...</div>
    </CustomDialog>
  );
};

export default IOSInstallGuideModal;
