import { createPortal } from "react-dom";
import {
  IconError,
  IconInfo,
  IconSuccess,
  IconWarning,
} from "../../utils/icons";

type AlertModalProps = {
  open: boolean;

  type?: "success" | "error" | "warning" | "info";

  title?: string;

  message: string;

  confirmText?: string;

  onClose: () => void;
};

const icon = {
  err: <IconError />,
  cuccess: <IconSuccess />,
  waring: <IconWarning />,
  info: <IconInfo />,
};

const AlertModal = ({
  open,
  type = "info",
  title,
  message,
  confirmText = "OK",
  onClose,
}: AlertModalProps) => {
  if (!open) return null;

  const styles = {
    success: {
      bg: "bg-success-bg",
      text: "text-success-text",
      border: "border-success-border",
      icon: icon.cuccess,
    },

    error: {
      bg: "bg-error-bg",
      text: "text-error-text",
      border: "border-error-border",
      icon: icon.err,
    },

    warning: {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      border: "border-yellow-500",
      icon: icon.waring,
    },

    info: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      border: "border-blue-500",
      icon: icon.info,
    },
  };

  const currentStyle = styles[type];

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div
          className={`${currentStyle.bg} ${currentStyle.text} border-b ${currentStyle.border} p-5 flex items-center gap-3`}
        >
          <span className="  text-3xl">
            {currentStyle.icon}
          </span>

          <div>
            <h2 className="text-lg font-bold">{title || "Thông báo"}</h2>

            <p className="text-sm opacity-80">{message}</p>
          </div>
        </div>

        <div className="p-5 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-highlight text-white font-medium hover:opacity-90 active:scale-95 transition-all"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
    ,document.body,  
);
};

export default AlertModal;

// cách dùng
// const [alert, setAlert] = useState({
//   open: false,
//   type: "error" as
//     | "success"
//     | "error"
//     | "warning"
//     | "info",
//   title: "",
//   message: "",
// });

// setAlert({
//   open: true,
//   type: "error",
//   title: "Lỗi",
//   message: "Link ảnh không hợp lệ",
// });

// <AlertModal
//   open={alert.open}
//   type={alert.type}
//   title={alert.title}
//   message={alert.message}
//   onClose={() =>
//     setAlert((prev) => ({
//       ...prev,
//       open: false,
//     }))
//   }
// />
