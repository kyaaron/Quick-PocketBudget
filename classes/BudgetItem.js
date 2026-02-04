export default class BudgetItem {
    constructor(income, category, note, amount) {
        this._income = income;
        this._category = category;
        this._note = note;
        this._amount = amount;
    }
    get income() {
        return this._income;
    }
    get category() {
        return this._category;
    }
    get note() {
        return this._note;
    }
    get amount() {
        return this._amount;
    }
}