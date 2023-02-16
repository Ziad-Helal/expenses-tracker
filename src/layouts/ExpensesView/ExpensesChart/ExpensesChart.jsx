import { ChartBar } from "../../../layouts";

export default function ExpensesChart() {
    return (
        <section>
            <header>
                <label htmlFor="year">Filter by year</label>
                <select name="year" id="year">
                    <option value="2000">2000</option>
                </select>
            </header>
            <ul>
                <ChartBar />
            </ul>
        </section>
    );
}
