import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const theme = [
  { name: "A volta de Jesus" },
  { name: "A volta de Jesus" },
  { name: "A volta de Jesus" },
  { name: "A volta de Jesus" },
  { name: "A volta de Jesus" },
  { name: "A volta de Jesus" },
  { name: "A volta de Jesus" },
  { name: "A volta de Jesus" },
  { name: "A volta de Jesus" },
  { name: "A volta de Jesus" },
];

export default function ThemesPage() {
  return (
    <main className="w-[min(100%-2rem,900px)] mx-auto">
      <h1 className="font-bold text-[18px] mt-6">Meus temas</h1>
      <button className="font-bold text-white p-4 rounded-md bg-indigo-500 mt-4">
        Adicionar tema
      </button>
      <ul className="flex flex-col gap-2 mt-4">
        {theme.map((theme) => (
          <li key={theme.name}>
            <button className="flex items-center justify-between font-bold p-4 rounded-md bg-white w-full text-left">
              <p>{theme.name}</p>
              <span>{"->"}</span>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
