import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function LoginPage() {
  const { loginWithGoogle } = useContext(UserContext);
  return (
    <main>
      <h1>Login</h1>
      <button onClick={loginWithGoogle} className="p-4 bg-indigo-500">
        Entrar
      </button>
    </main>
  );
}
