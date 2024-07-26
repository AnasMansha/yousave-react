import { useContext } from "react";
import CustomDialog from "./CustomDialog";
import ActiveModalContext from "contexts/ActiveModalContext";
import { MODAL_TYPES } from "constants/index";

const ForgotPasswordModal = () => {
  const [activeModal, setActiveModal] = useContext(ActiveModalContext);

  return (
    <CustomDialog
      open={activeModal === MODAL_TYPES.FORGOT_PASSWORD}
      onClose={() => setActiveModal(null)}
      title="Forgot Password"
    >
      <div>Forgot Password Modal Here</div>
    </CustomDialog>
  );
};

export default ForgotPasswordModal;
