import React, { createContext, useState } from "react";

interface IDialogContext {
  open: boolean;
  toggleDialog: () => void;
}

export const DialogContext = createContext<IDialogContext | null>(null);

export function DialogContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen(!open);
  };

  const value = {
    open,
    toggleDialog,
  };

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
}
