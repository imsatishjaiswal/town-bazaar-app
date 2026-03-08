import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:8000/users/auth/login";

    try {
      const response = await fetch(apiUrl, {
        method: "POST", // Specify the method
        headers: {
          "Content-Type": "application/json", // Indicate the content type is JSON
        },
        body: JSON.stringify({
          email: user,
          password: password,
        }), // Convert the JavaScript object to a JSON string
      });

      if (!response.ok) {
        // Handle HTTP errors (e.g., status 404, 500)
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("Raw  Success:", response);

      const result = await response.json(); // Parse the response body as JSON
      console.log("Success:", result);
      localStorage.setItem("token", result?.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      //   if (result.status === 200) {
      if (result.token) {
        console.log("36");
        navigate("/dashboard");
      } else {
        alert("Username must be > 5 characters to unlock the Dashboard!");
      }
      return result;
    } catch (error) {
      // Handle network errors or errors thrown from the response check
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-lg rounded-lg border"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          className="border w-full p-2 mb-4 rounded"
          type="email"
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="border w-full p-2 mb-4 rounded"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
          Enter
        </button>
      </form>
    </div>
  );
}
