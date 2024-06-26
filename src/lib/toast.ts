import { toast } from "react-toastify";

function quickToast(message: string) {
  toast(message, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

export { quickToast };
