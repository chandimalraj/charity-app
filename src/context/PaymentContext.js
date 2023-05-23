import React, { createContext, useState } from "react";

export const PaymentContext = createContext(null);

const PaymentContextProvider = ({ children }) => {
  const [donation, setDonation] = useState(1000);
  const [status, setStatus] = useState("");

  return (
    <PaymentContext.Provider
      value={{ donation, setDonation, status, setStatus }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentContextProvider;
