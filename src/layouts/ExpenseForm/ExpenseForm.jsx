import { Button } from "../../components";

export default function ExpenseForm() {
    return (
        <form>
            <fieldset>
                <legend className="hidden">Add New Expense</legend>
                <p>Form Row</p>
                <Button type="submit">Add</Button>
            </fieldset>
        </form>
    );
}
