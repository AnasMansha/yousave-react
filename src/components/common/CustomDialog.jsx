import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const CustomDialog = ({
  children,
  open = false,
  onClose,
  wrapperClasses = "",
  disableSideClose = false,
  title = null,
}) => {
  return (
    <Dialog open={open} onClose={!disableSideClose && onClose} maxWidth="lg">
      <div className={wrapperClasses}>
        {title && (
          <DialogTitle>
            <div>{title}</div>
          </DialogTitle>
        )}
        <DialogContent>{children}</DialogContent>
      </div>
    </Dialog>
  );
};

export default CustomDialog;
