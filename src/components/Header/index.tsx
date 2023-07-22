import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Header() {
  const { user, loginWithGoogle, logOut } = useContext(UserContext)!;

  return (
    <header className="p-4 bg-indigo-950 text-white flex items-center justify-between">
      <Link to="/">LOGO</Link>
      <nav>
        {user ? (
          <button onClick={logOut} className="px-2 py-1 rounded bg-cyan-600">
            Logout
          </button>
        ) : (
          <button onClick={loginWithGoogle} className="px-2 py-1 rounded bg-cyan-600">
            Login
          </button>
        )}
      </nav>
    </header>
  );
}
