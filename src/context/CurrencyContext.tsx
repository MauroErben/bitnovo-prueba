import {
  createContext,
  useMemo,
  useState
} from 'react';

export interface ICurrencyContext {
  currency: string;
  setCurrency: (currency: string) => void;
}

export const CurrencyContext = createContext<ICurrencyContext>({
  currency: "",
  setCurrency: () => { },
});

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrencyState] = useState("USD");

  const value = useMemo(() => ({ currency, setCurrency: setCurrencyState }), [currency, setCurrencyState]);

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
