import { useForm } from "react-hook-form";
import PageHeader from "../components/pageHeader";
import ToastNotification from "../components/toastNotification";
import { Link } from "react-router";
import { signUp } from "../services/api/authentication";
import { useNavigate } from "react-router-dom";
import useToastNotification from "../hooks/useNotification"


export type RegisterFormInputs = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
};

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<RegisterFormInputs>();

  const { showSuccessToast, showErrorToast } = useToastNotification();

  const onSubmit = async (data: RegisterFormInputs) => {
    const result = await signUp(data);

    if(result.success) {
      reset();
      showSuccessToast(result.message);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      showErrorToast(result.message ?? 'Backend Error');
    }
  }

  return <>
  <div className="container-fluid">
    <div className="row min-vh-100 black_bg">
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 h-100">
        <div className="p-5">
          <PageHeader title="Register" className="mb-4"/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="text-light mb-2">First Name</label>
              <input className="form-control w-100" type="text" {...register("firstName", { required: "This field is required"})} />
              {errors.firstName && (
                <p className="text-danger text-end mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="text-light mb-2">Last Name</label>
              <input className="form-control w-100" type="text" {...register("lastName", { required: "This field is required"})} />
              {errors.lastName && (
                <p className="text-danger text-end mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="text-light mb-2">Email Address</label>
              <input className="form-control w-100" type="text" {...register("email", { required: "This field is required", pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                }
              })} />
              {errors.email && (
                <p className="text-danger text-end mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="text-light mb-2">Password</label>
              <input className="form-control w-100" type="password" {...register("password", { required: "This field is required"})} />
              {errors.password && (
                <p className="text-danger text-end mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <label className="text-light mb-2">Confirm Password</label>
              <input className="form-control w-100" type="password" {...register("confirmPassword", { required: "This field is required", validate: (value: string) => {
                // validate to make sure that password and confirm password are the same
                if (watch('password') != value) {
                  return "Your passwords do no match";
                }
              }
            })} />
              {errors.confirmPassword && (
                <p className="text-danger text-end mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Link to="/login" className="link-underline link-underline-opacity-0 link-opacity-100-hover float-end">
            Want to sign-in?
            </Link>
            <input type="submit" value="Register" className="btn btn-success w-50 rounded-10 d-block" />
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

export default Register;
