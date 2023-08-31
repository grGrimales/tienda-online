import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../../share/alert/Alert";
import {useSession} from "../../../hooks/useSession";

export default function Register() {
  const navigate = useNavigate();
const {  login } = useSession();

  const [fullName, setfullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert(null); // Limpiar cualquier alerta anterior
    try {
      const response = await fetch(
        "https://technological-vanguard-backend-app-grgrimales.vercel.app/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, fullName, address }),
        }
      );
      const data = await response.json();
      console.log(data);

      if (data.error) {
        setAlert({ type: "error", message: data.message });
        return;
      }
      login(data.token, data.userId);
      setAlert({ type: "success", message: "Operación exitosa" });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setAlert({ type: "error", message: error.message });
    }
  };
  const handleCloseAlert = () => {
    setAlert(null);
  };
  return (
    <>
      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={handleCloseAlert}
        />
      )}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-60">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setfullName(e.target.value)}
                  name="fullName"
                  type="text"
                  autoComplete="fullName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Home address
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  type="text"
                  autoComplete="address"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            You do not have an account?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Enter here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
