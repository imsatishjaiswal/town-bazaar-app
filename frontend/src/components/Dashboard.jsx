import CustomerList from "./CustomerList";
import UserList from "./UserList";

export default function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const userRole = user?.role; //   const userType = "admin";
  return (
    <div className="p-10 bg-green-50 min-h-screen">
      {userRole === "admin" ? <UserList /> : <CustomerList />}
      <h1 className="text-4xl font-bold text-green-700">Private Dashboard</h1>
      <p className="mt-2">You have special access!</p>
      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded shadow"
      >
        Logout
      </button>
    </div>
  );
}
