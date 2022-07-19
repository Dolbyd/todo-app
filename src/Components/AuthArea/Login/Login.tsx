import "./Login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CredentialsModel, LoginModel } from "../../../Model/Welcome";
import web from "../../../Services/WepApi";
import notify from "../../../Services/Notyfication";
import { useNavigate } from "react-router-dom";
import store from "../../../Redux/Store";
import { loginAction } from "../../../Redux/UsetAppState";

function Login(): JSX.Element {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        email:
            yup.string().email("invalid email pattern")
                .required("email is required"),
        password:
            yup.string()
            .min(3, "at list 3 characters required")
            .max(8, "at most 8 characters required")
                .required("password is required")
    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<LoginModel>({ mode: "all", resolver: yupResolver(schema) });

    const loginUser = async (model: LoginModel) => {
        const credentials = new CredentialsModel();
        credentials.email = model.email;
        credentials.password = model.password;

        console.log('going to send to remote server...' + credentials);

        web.login(credentials)
            .then((res) => {
                notify.success('login successfully');
                store.dispatch(loginAction(res.data))
                navigate('/tasks')
            })
            .catch(err => {
                console.log(err);
                notify.error(err.value);
            });
    }



    return (
        <div className="Login flex-center-col ">
            <h1>Login</h1>
            {/* step 9 - handelSubmit */}
            <form onSubmit={handleSubmit(loginUser)} className="flex-center-col box">
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" placeholder="email" id="email" />
                <span>{errors.email?.message}</span>
                <label htmlFor="password">Password</label>
                <input {...register('password')} type="password" placeholder="password" id="password" />
                <span>{errors.password?.message}</span>


                <button className="button-success" disabled={!isValid}>Login</button>
            </form>
        </div>
    );
}

export default Login;
