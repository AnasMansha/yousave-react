import { useContext } from "react";
import CustomDialog from "./CustomDialog";
import ActiveModalContext from "contexts/ActiveModalContext";
import { MODAL_TYPES } from "constants/index";

const LoginModal = ({ open, onClose }) => {
  const [activeModal, setActiveModal] = useContext(ActiveModalContext);

  return (
    <CustomDialog
      open={activeModal === MODAL_TYPES.LOGIN}
      onClose={() => setActiveModal(null)}
      title="Log In"
    >
      <div>Login Modal Here</div>
    </CustomDialog>
  );
};

export default LoginModal;
