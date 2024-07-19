import CustomDialog from "components/common/CustomDialog";
import { MODAL_TYPES } from "constants/index";
import ActiveModalContext from "contexts/ActiveModalContext";
import { useContext } from "react";

const AndroidInstallGuideModal = () => {
  const [activeModal, setActiveModal] = useContext(ActiveModalContext);
  return (
    <CustomDialog
      open={activeModal === MODAL_TYPES.INSTALL_GUIDE_ANDROID}
      onClose={() => setActiveModal(null)}
      title="Android popup"
    >
      <div>To install on android...</div>
    </CustomDialog>
  );
};

export default AndroidInstallGuideModal;
