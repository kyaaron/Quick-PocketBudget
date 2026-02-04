import  BudgetItem  from "../classes/BudgetItem.js"

const addItemButton = document.querySelector("#add-item-button");
const deleteDataButton = document.querySelector("#delete-data-button");

const clearLocalStorage = () => {
    localStorage.clear();
    updateUI();
}

const setBudgetItemData = () => {
    const incomeBudgetToggleValue = document.querySelector("#income-budget-toggle").checked;
    const budgetTypeSelector = document.querySelector("#budget-type-selector").value;
    const amountInputValue = document.querySelector("#amount-input").value;
    const noteInputValue = document.querySelector("#note-input").value;
    
    const budgetItem = new BudgetItem(incomeBudgetToggleValue, budgetTypeSelector, noteInputValue, amountInputValue);

    localStorage.setItem("isIncome", budgetItem.income);
    localStorage.setItem("category", budgetItem.category);
    localStorage.setItem("amount", budgetItem.amount);
    localStorage.setItem("note", budgetItem.note);

    updateUI();
}

const updateUI = () => {
    const incomeBudgetToggleValue = document.querySelector("#income-budget-toggle").checked;

    document.querySelector("#income-box").innerText = `$${incomeBudgetToggleValue ? localStorage.getItem("amount") : "0.00"}`;
    document.querySelector("#expenses-box").innerText = `$${!incomeBudgetToggleValue ? localStorage.getItem("amount") : "0.00"}`;
    document.querySelector("#total-budget").innerText = `$${localStorage.getItem("amount")}`;

    if (!localStorage.getItem("amount")) {
        document.querySelector("#income-box").innerText = `$0.00`;
        document.querySelector("#expenses-box").innerText = `$0.00`;
        document.querySelector("#total-budget").innerText = `$0.00`;
    }
}

document.addEventListener('DOMContentLoaded', updateUI);
addItemButton.addEventListener("click", setBudgetItemData);
deleteDataButton.addEventListener("click", clearLocalStorage);