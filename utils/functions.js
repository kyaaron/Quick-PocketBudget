import  BudgetItem  from "../classes/BudgetItem.js"

const addItemButton = document.querySelector("#add-item-button");
const deleteDataButton = document.querySelector("#delete-data-button");

// Function that clears the fields of the form
const clearFields = () => {
    document.querySelector("#income-budget-toggle").unchecked;
    document.querySelector("#category-selector").value = "";
    document.querySelector("#amount-input").value = "";
    document.querySelector("#note-input").value = "";
}

// Function that clears out localStorage and also clears out table values
const clearLocalStorage = () => {
    clearFields();
    localStorage.clear();
    document.querySelector("#table-body").innerHTML = "";  // needed to be here to properly clear the table only when button is clicked
    updateUI();
}

// Function that adds a row of data to the budget items table
const addTableData = () => {
    document.querySelector("#table-body").innerHTML += `
    <tr>
        <td>2/5/2026</td>
        <td>${document.querySelector("#category-selector").value}</td>
        <td>${document.querySelector("#note-input").value}</td>
        <td class="text-right">${document.querySelector("#amount-input").value}</td>
    </tr>
    `;
}

// Function that adds value to the current value of localStorage if it already exists
// This should only be used on amount
const addValue = (key, value) => {
    // code
}

// Function that subtracts value from the current value of localStorage if it already exists
// This should only be used on amount
const subtractValue = (key, value) => {
    // code
}

// Function that gets value from inputs, creates a budgetItem object, and updates localStorage with object data, then updates the DOM
const setBudgetItemData = () => {
    const incomeBudgetToggleValue = document.querySelector("#income-budget-toggle").checked;
    const categorySelectorValue = document.querySelector("#category-selector").value;
    const amountInputValue = document.querySelector("#amount-input").value;
    const noteInputValue = document.querySelector("#note-input").value;
    
    const budgetItem = new BudgetItem(incomeBudgetToggleValue, categorySelectorValue, noteInputValue, amountInputValue);

    /*
    localStorage.getItem("amount") ? addValue("amount", amountInputValue) : localStorage.setItem("amount", budgetItem.amount);
    localStorage.setItem("isIncome", budgetItem.income);
    localStorage.setItem("category", budgetItem.category);
    localStorage.setItem("note", budgetItem.note);
    */
    const budgetItemObjectString = JSON.stringify({
        "isIncome": budgetItem.income,
        "category": budgetItem.category,
        "amount": budgetItem.amount,
        "note": budgetItem.note
    });

    localStorage.setItem(localStorage.length, budgetItemObjectString);

    addTableData();
    clearFields();
    updateUI();
}

// Function that updates the UI. This is called on submit, clear, and document load
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