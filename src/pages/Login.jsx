import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefualt(); 
        console.log("Logging in with:", email, password);
        navigate("/");
    };

    return (
        <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="block w-full p-2 border rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-2 border rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link to="/home" className="w-full p-2 bg-blue-500 text-white rounded">Log in</Link>
      </form>
    </div>
    );
}

export default Login;