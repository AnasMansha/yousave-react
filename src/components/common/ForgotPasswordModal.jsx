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
      
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
        <form className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className="text-gray-500 text-sm text-center">
            We'll send you an email with a link to reset your password
          </p>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </CustomDialog>
  );
};

export default ForgotPasswordModal;
