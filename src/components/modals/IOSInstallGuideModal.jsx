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
    >
      <div className="mobile-notifcation-bg flex items-center justify-center">
        <div className="mobile-notifcation w-full rounded-lg p-5 h-2/5 bg-white">
          <div className="mobile-notifcation-header w-full text-right">
            <p className="mobile-s-close cursor-pointer" id="ios-popup-close">
              X
            </p>
          </div>
          <div className="mobile-notifcation-content my-4">
            <div className="flex">
              <div className="w-1/3">
                <img
                  src="https://yousave.ai/img/image%202.svg"
                  className="mobile-notifcation-content-img w-3/4"
                  alt=""
                />
              </div>
              <div className="w-2/3">
                <p className="mobile-notifcation-content-p font-medium text-sm">
                  Add{" "}
                  <span>
                    <img
                      className="ss-img-content inline-block"
                      src="https://yousave.ai/img/popup-logo.png"
                      alt=""
                    />
                  </span>{" "}
                  <br />
                  To Home Screen
                </p>
              </div>
            </div>
          </div>
          <div className="mobile-notifcation-contents text-sm text-gray-600">
            <p>
              In Safari, tap the{" "}
              <span>
                <img
                  className="mobile-notifcation-contents-img inline-block mr-1"
                  src="https://yousave.ai/img/redirect.svg"
                  alt=""
                />
              </span>{" "}
              button and choose <br />
              <span className="home-screen-d font-bold text-orange-600">
                Add to Home Screen
              </span>
            </p>
            <p className="mobile-notifcation-contents-p text-center text-xs text-gray-400 mt-2">
              You’llSave with one tap!
            </p>
            <button className="mobile-notifcation-contents-button w-full rounded-lg mt-4 py-2 text-white bg-gradient-to-br from-yellow-500 to-red-500">
              Okay
            </button>
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

export default IOSInstallGuideModal;
