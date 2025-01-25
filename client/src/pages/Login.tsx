import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css'
import ToastNotification from "../components/toastNotification";

import { Link, useNavigate } from "react-router";
import PageHeader from "../components/pageHeader";
import { login } from "../services/api/authentication";
import useNotification from "../hooks/useNotification";

export type loginType = {
  email?: string,
  password?: string,
};


const Login = () => {
  const navigate = useNavigate();
  const {showErrorToast, showSuccessToast} = useNotification();
  const { register, handleSubmit, formState: { errors } } = useForm<loginType>();

  const onSubmit = async (data: loginType) => {
    const result = await login(data);

    if(result.success) {
      showSuccessToast(result.message);
      localStorage.setItem('token', result.data);
      setTimeout(() => {
        navigate("/admin");
      }, 2300);
    } else {
      showErrorToast(result.message)
    }
  }

  return <>
  <div className="container-fluid">
    <div className="row min-vh-100 black_bg">
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 h-100">
        <div className="p-5">
          <PageHeader title="Login" className="mb-4"/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input className="form-control w-100" type="text" placeholder="email" {...register("email", { required: "Email is required"})} />
              {errors.email && (
                <p className="text-danger fw-bold text-end">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <input className="form-control w-100 mt-2" type="password" placeholder="password" {...register("password", { required: "password is required" })} />
              {errors.password && (
                <p className="text-danger fw-bold text-end">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Link to="/register" className="link-underline link-underline-opacity-0 link-opacity-100-hover float-end">
            Sign up?
            </Link>
              <input type="submit" className="btn btn-success w-50 rounded-10 d-block" />
          </form>
        </div>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12 login_splash">

      </div>
    </div>
  </div>
  <ToastNotification />
  </>;
};

export default Login;
