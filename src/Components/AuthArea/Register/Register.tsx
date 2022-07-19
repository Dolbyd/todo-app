import "./Register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CredentialsModel, RegisterModel } from "../../../Model/Welcome";
import web from "../../../Services/WepApi";
import notify from "../../../Services/Notyfication";
import { useNavigate } from "react-router-dom";

function Register(): JSX.Element {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        email:
            yup.string().email("invalid email pattern")
                .required("email is required"),
        password:
            yup.string()
            .min(3, "at list 3 characters required")
            .max(8, "at most 8 characters required")
                .required("password is required"),
        confirm:
            yup.string()
                .test('password-match', 'password must match', function (value) {
                    return this.parent.password === value;
                })
    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<RegisterModel>({ mode: "all", resolver: yupResolver(schema) });

    const registerUser = async (model: RegisterModel) => {
        const credentials = new CredentialsModel();
        credentials.email = model.email;
        credentials.password = model.password;

        console.log('going to send to remote server...' + credentials);

        web.register(credentials)
            .then((res) => {
                notify.success('register successfully');
                navigate('/login')
            })
            .catch(err => {
                notify.error(err.message);
            });
    }


    return (
        <div className="Register flex-center-col ">
            <h1>register</h1>
            {/* step 9 - handelSubmit */}
            <form onSubmit={handleSubmit(registerUser)} className="flex-center-col box">
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" placeholder="email" id="email" />
                <span>{errors.email?.message}</span>
                <label htmlFor="password">Password</label>
                <input {...register('password')} type="password" placeholder="password" id="password" />
                <span>{errors.password?.message}</span>
                <label htmlFor="confirm">Confirm</label>
                <input {...register('confirm')} type="confirm" placeholder="confirm" id="confirm" />
                <span>{errors.confirm?.message}</span>

                <button className="button-success" disabled={!isValid}>Register</button>
            </form>
        </div>
    );
}

export default Register;
