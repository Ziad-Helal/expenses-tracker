import { ExpensesPage } from "./pages";
import { ExpensesProvider } from "./context";

function App() {
    return (
        <ExpensesProvider>
            <ExpensesPage />
        </ExpensesProvider>
    );
}

export default App;
