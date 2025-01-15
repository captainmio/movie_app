import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css'
import api from "../services/api/api";

import { Link } from "react-router";

type Inputs = {
  username?: string,
  password?: string,
};

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    const username = data.username;
    const password = data.password;

    api.post('/login', {
      username,
      password
    }).then(() => {
      console.log('Success')
    })
  }

  return <>
  <div className="container-fluid">
    <div className="row min-vh-100 black_bg">
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 h-100">
        <div className="p-5">
          <h3 className="mb-4 text-default text-light">Login screen</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input className="form-control w-100" type="text" placeholder="username" {...register("username", { required: "Username is required"})} />
              {errors.username && (
                <p className="text-danger fw-bold text-end">
                  {errors.username.message}
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
  </>;
};

export default Login;
