import {
  createContext,
  useMemo,
  useState
} from 'react';

export interface IPhoneContext {
  areaCode: string;
  setAreaCode: (areaCode: string) => void;
}

export const PhoneContext = createContext<IPhoneContext>({
  areaCode: "",
  setAreaCode: () => { },
});

export const PhoneProvider = ({ children }: { children: React.ReactNode }) => {
  const [areaCode, setAreaCodeState] = useState("+34"); // default españa

  const value = useMemo(() => ({ areaCode, setAreaCode: setAreaCodeState }), [areaCode, setAreaCodeState]);

  return (
    <PhoneContext.Provider value={value}>
      {children}
    </PhoneContext.Provider>
  );
};