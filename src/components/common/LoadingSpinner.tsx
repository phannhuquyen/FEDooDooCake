import { createPortal } from "react-dom";

type Props = {
  size?: number;
  fullScreen?: boolean;
};

const LoadingSpinner = ({ size = 40, fullScreen = false }: Props) => {
  const spinner = (
    <div
      className="animate-spin rounded-full border-4 border-gray-300 border-t-black"
      style={{
        width: size,
        height: size,
      }}
    />
  );

  if (fullScreen) {
    return createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
        {spinner}
      </div>,
      document.body,
    );
  }

  return createPortal(
    <div className="flex items-center justify-center p-4">{spinner}</div>,
    document.body,
  );
};

export default LoadingSpinner;
