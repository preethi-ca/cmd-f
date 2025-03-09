import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Ensure this file contains the necessary CSS

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 
        console.log("Logging in with:", email, password);
        navigate("/");
    };

    const handleForgotPassword = () => {
        navigate("/forgot-password"); // Adjust the path as needed
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <form onSubmit={handleLogin} className="p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="welcome-text">Welcome!</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        className="login-input mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Log in</button>
                </form>
                <button onClick={handleForgotPassword} className="forgot-password-button">Forgot Password?</button>
            </div>
            <div className="login-image-container">
                <img src="src/assets/logo.png" alt="Login" className="login-image" />
            </div>
        </div>
    );
}

export default Login;