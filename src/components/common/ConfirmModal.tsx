import { createPortal } from "react-dom";

type ConfirmModalProps = {
  open: boolean;

  title?: string;

  message: string;

  confirmText?: string;

  cancelText?: string;

  onConfirm: () => void;

  onClose: () => void;
};

const ConfirmModal = ({
  open,
  title = "Xác nhận",
  message,
  confirmText = "Xác nhận",
  cancelText = "Hủy",
  onConfirm,
  onClose,
}: ConfirmModalProps) => {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 h-screen bg-black/40 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* top */}
        <div className="bg-highlight/10 border-b border-highlight/20 p-6">
          <h2 className="text-xl font-bold text-highlight mb-2">{title}</h2>

          <p className="text-sm text-gray-600 leading-relaxed">{message}</p>
        </div>

        {/* bottom */}
        <div className="flex justify-end gap-3 p-5">
          {cancelText && (
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all"
            >
              {cancelText}
            </button>
          )}
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-5 py-2 rounded-lg bg-highlight text-white hover:opacity-90 active:scale-95 transition-all"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ConfirmModal;
