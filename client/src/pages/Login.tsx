import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css'
import api from "../services/api/api";

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

  return <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <h1 className="text-center mb-4">Login screen</h1>
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
            <input type="submit" className="btn btn-success w-50 rounded-10 mx-auto d-block" />
        </form>
      </div>
    </div>
  </div>;
};

export default Login;
