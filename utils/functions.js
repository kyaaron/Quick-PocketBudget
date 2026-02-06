import  BudgetItem  from "../classes/BudgetItem.js"

const addItemButton = document.querySelector("#add-item-button");
const deleteDataButton = document.querySelector("#delete-data-button");

// Initializing dashboard variables. Will be 0 if not in localStorage.
let incomeDollarValue = parseFloat(localStorage.getItem("totalIncome")) || 0;
let expenseDollarValue = parseFloat(localStorage.getItem("totalExpense")) || 0;
let totalValue = incomeDollarValue - expenseDollarValue;

// Function that clears the fields of the form
const clearFields = () => {
    document.querySelector("#income-budget-toggle").checked = false;
    document.querySelector("#category-selector").value = "";
    document.querySelector("#amount-input").value = "";
    document.querySelector("#note-input").value = "";
}

// Function that clears out localStorage and also clears out table values
const clearLocalStorage = () => {
    clearFields();
    localStorage.clear();
    document.querySelector("#table-body").innerHTML = "";  // needed to be here to properly clear the table only when button is clicked
    incomeDollarValue = 0;
    expenseDollarValue = 0;
    totalValue = 0;
    updateUI();
}

// Load table data on page load in entirety
const loadTableData = () => {
    const tableBody = document.querySelector("#table-body");
    tableBody.innerHTML = "";
    const todayDate = new Date();


    for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (["totalIncome", "totalExpense", "grandTotal"].includes(key)) continue;

        const budgetItemLSObject = JSON.parse(localStorage.getItem(key));

        document.querySelector("#table-body").innerHTML += `
        <tr>
            <td class="w-2/5 text-left">${todayDate.getMonth() + 1}/${todayDate.getDate()}/${todayDate.getFullYear()}</td>
            <td class="w-1/5 text-left">${budgetItemLSObject.category}</td>
            <td class="w-2/5 text-left">${budgetItemLSObject.note}</td>
            <td class="w-2/5 text-right ${budgetItemLSObject.isIncome ? 'text-green-600' : 'text-red-600'}">${budgetItemLSObject.isIncome ? '+' : '-'}$${parseFloat(budgetItemLSObject.amount).toFixed(2)}</td>
            </tr>
        `;
    }
}

// Function that adds a row of data to the budget items table
const addTableData = () => {
    const todayDate = new Date();
    document.querySelector("#table-body").innerHTML += `
        <tr>
            <td class="w-2/5 text-left">${todayDate.getMonth() + 1}/${todayDate.getDate()}/${todayDate.getFullYear()}</td>
            <td class="w-1/5 text-left">${document.querySelector("#category-selector").value}</td>
            <td class="w-2/5 text-left">${document.querySelector("#note-input").value}</td>
            <td class="w-2/5 text-right ${document.querySelector("#income-budget-toggle").checked ? 'text-green-600' : 'text-red-600'}">${document.querySelector("#amount-input").value}</td>
        </tr>
    `;
}

// Function that adds amount to income or expenses
const addValueToDashboard = (obj, value) => {
    const floatValue = parseFloat(value);
    if (obj.income === true) { incomeDollarValue += floatValue; }
    if (obj.income === false) { expenseDollarValue += floatValue; }
    totalValue = incomeDollarValue - expenseDollarValue;
    localStorage.setItem("totalIncome", incomeDollarValue);
    localStorage.setItem("totalExpense", expenseDollarValue);
    localStorage.setItem("grandTotal", totalValue);
}

// Function that gets value from inputs, creates a budgetItem object, and updates localStorage with object data, then updates the DOM
const setBudgetItemData = () => {
    const incomeBudgetToggleValue = document.querySelector("#income-budget-toggle").checked;
    const categorySelectorValue = document.querySelector("#category-selector").value;
    const amountInputValue = document.querySelector("#amount-input").value;
    const noteInputValue = document.querySelector("#note-input").value;
    
    if (!categorySelectorValue || !amountInputValue || !noteInputValue) {
        alert("You need to fill in all the budget data. Please check your data.");
    } else {
        const budgetItem = new BudgetItem(incomeBudgetToggleValue, categorySelectorValue, noteInputValue, amountInputValue);
    
        const budgetItemObjectString = JSON.stringify({
            "isIncome": budgetItem.income,
            "category": budgetItem.category,
            "amount": budgetItem.amount,
            "note": budgetItem.note
        });

        localStorage.setItem(localStorage.length, budgetItemObjectString);

        addValueToDashboard(budgetItem, amountInputValue);
        addTableData();
        clearFields();
        updateUI();
    }
}

// Function that updates the UI. This is called on submit, clear, and document load
const updateUI = () => {
    document.querySelector("#income-box").innerText = `$${incomeDollarValue.toFixed(2)}`;
    document.querySelector("#expenses-box").innerText = `$${expenseDollarValue.toFixed(2)}`;
    document.querySelector("#total-budget").innerText = `$${totalValue.toFixed(2)}`;    
}

document.addEventListener('DOMContentLoaded', () => {
    loadTableData();
    updateUI();
});
addItemButton.addEventListener("click", setBudgetItemData);
deleteDataButton.addEventListener("click", clearLocalStorage);