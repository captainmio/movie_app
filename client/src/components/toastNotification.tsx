import { ToastContainer } from "react-toastify";

const toastNotification = (): JSX.Element => {
  return <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />;
};

export default toastNotification;
