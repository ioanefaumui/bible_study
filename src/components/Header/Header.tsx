import { useContext } from "react";
import MenuIcon from "../../icons/MenuIcon/MenuIcon";
import SearchIcon from "../../icons/SearchIcon/SearchIcon";
import { DialogContext } from "../../context/DialogContext/dialogContext";
import CloseIcon from "../../icons/CloseIcon/CloseIcon";

export default function Header() {
  const dialog = useContext(DialogContext);

  return (
    <header className="flex items-center justify-between py-4">
      <button
        onClick={() => dialog?.toggleDialog()}
        className="active:bg-violet-100 rounded-md p-1 transition-colors duration-100 ease-linear"
      >
        {dialog?.open ? (
          <CloseIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>
      <button className="active:bg-violet-100 rounded-md p-1 transition-colors duration-100 ease-linear">
        <SearchIcon className="w-6 h-6" />
      </button>
    </header>
  );
}
