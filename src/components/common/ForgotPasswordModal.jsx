import { useContext, useState } from "react";
import CustomDialog from "./CustomDialog";
import ActiveModalContext from "contexts/ActiveModalContext";
import { MODAL_TYPES } from "constants/index";
import { validateEmail } from "utils";

const ForgotPasswordModal = () => {
  const [activeModal, setActiveModal] = useContext(ActiveModalContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = () => {
    const e = validateEmail(email);
    if (e) return setError(e);
  };

  return (
    <CustomDialog
      open={activeModal === MODAL_TYPES.FORGOT_PASSWORD}
      onClose={() => setError(null) || setActiveModal(null)}
    >
      <div className="p-6">
        <div className="text-2xl font-bold text-center mb-4">
          Forgot Password
        </div>
        <div className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="email">
              Enter Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-gray-500 text-sm text-center">
            We'll send you an email with a link to reset your password
          </div>
          <div className="flex justify-center">
            <div className="w-full">
              <div
                className="text-center w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={onSubmit}
              >
                Reset Password
              </div>
              {error && (
                <div className="text-sm text-center text-red-500 mt-2">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

export default ForgotPasswordModal;
