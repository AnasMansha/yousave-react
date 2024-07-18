import { useContext } from "react";
import CustomDialog from "./CustomDialog";
import ActiveModalContext from "contexts/ActiveModalContext";
import { MODAL_TYPES } from "constants/index";

const SignupModal = ({ open, onClose }) => {
  const [activeModal, setActiveModal] = useContext(ActiveModalContext);

  return (
    <CustomDialog
      open={activeModal === MODAL_TYPES.SIGNUP}
      onClose={() => setActiveModal(null)}
      title="Sign Up"
    >
      <div>Signup Modal Here</div>
    </CustomDialog>
  );
};

export default SignupModal;
