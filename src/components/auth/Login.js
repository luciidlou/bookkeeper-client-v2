import "./Login.css"
import logo from "../../images/BookkeeperLogo2.png"


export const Login = () => {
    return (
        <div className="login">
            <figure className="image is-64x64">
                <img src={logo} alt="Bookkeeper logo" />
            </figure>
            <h2 className="h2 is-size-2 has-text-centered">Bookkeeper</h2>
            <div className="subtitle is-size-6 has-text-centered is-italic	">A user-driven, open-source book repository</div>
            <h4 className="h2 is-size-4 has-text-centered">Login</h4>
            <fieldset>
                <label htmlFor="username">Username</label>
                <input className="input" type="text" name="username" />
                <label htmlFor="password">Password</label>
                <input className="input" type="text" name="password" />
            </fieldset>
        </div>
    )
}