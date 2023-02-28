import { toast } from "react-toastify";

function quickToast(message: string) {
  toast(message, {
    position: "top-center",
    autoClose: 750,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

export { quickToast };
