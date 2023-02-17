import { Button } from "../../components";

export default function ExpenseForm() {
    return (
        <form>
            <fieldset>
                <legend className="hidden">Add New Expense</legend>
                <div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" />
                    </p>
                    <p>
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" />
                    </p>
                    <p>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" id="amount" />
                    </p>
                </div>
                <div>
                    <Button>Cancel</Button>
                    <Button type="submit">Add Expense</Button>
                </div>
            </fieldset>
        </form>
    );
}
