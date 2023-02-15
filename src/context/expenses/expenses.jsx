import { createContext, useContext } from "react";

const ExpensesContext = createContext({});

export const ExpensesProvider = ({ children }) => {
    const context = {};

    return <ExpensesContext.Provider value={context}>{children}</ExpensesContext.Provider>;
};

export const useExpenses = () => useContext(ExpensesContext);
