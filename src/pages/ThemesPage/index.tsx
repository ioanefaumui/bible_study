import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function ThemesPage() {
  const { logOut } = useContext(UserContext);

  console.log(useContext(UserContext));

  return (
    <main>
      <h1>Themes page</h1>
      <button onClick={logOut}>Logout</button>
    </main>
  );
}
