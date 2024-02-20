import { ReactNode, createContext, useContext, useState } from "react";

interface SettingsContextProviderProps {
  children: ReactNode;
}
interface SettingsContextProps {
  disableScroll: boolean;
  setDisableScroll: React.Dispatch<React.SetStateAction<boolean>>;
  firstLoad: boolean;
  setFirstLoad: React.Dispatch<React.SetStateAction<boolean>>;
}
const SettingsContext = createContext({} as SettingsContextProps);

export function useSettingsContext() {
  return useContext(SettingsContext);
}

export function SettingsContextProvider({
  children,
}: SettingsContextProviderProps) {
  const [disableScroll, setDisableScroll] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  return (
    <SettingsContext.Provider
      value={{ disableScroll, setDisableScroll, firstLoad, setFirstLoad }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
