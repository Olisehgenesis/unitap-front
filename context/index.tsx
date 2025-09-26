import { FC, PropsWithChildren } from "react";
import { ErrorsProvider } from "./errorsProvider";
import { GlobalContextProvider } from "./globalProvider";

export const UnitapProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ErrorsProvider>
      <GlobalContextProvider>
        {children}
      </GlobalContextProvider>
    </ErrorsProvider>
  );
};

export default UnitapProvider;
