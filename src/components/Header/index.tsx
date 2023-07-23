import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Header() {
  const { user, loginWithGoogle, logOut } = useContext(UserContext);

  return (
    <header className="sticky top-0 w-full flex p-4 items-center justify-between border-b border-b-indigo-100 bg-white">
      <Link to="/">LOGO</Link>
      <nav>
        {user ? (
          <button onClick={logOut} className="px-2 py-1 rounded bg-cyan-600">
            Logout
          </button>
        ) : (
          <button
            onClick={loginWithGoogle}
            className="px-2 py-1 rounded bg-cyan-600"
          >
            Login
          </button>
        )}
      </nav>
    </header>
  );
}
