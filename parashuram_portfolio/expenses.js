// Get references to the DOM elements
const itemNameInput = document.getElementById('itemName');
const itemAmountInput = document.getElementById('itemAmount');
const addItemButton = document.getElementById('addItem');
const clearAllButton = document.getElementById('clearAll');
const calculateTotalButton = document.getElementById('calculateTotal');
const itemTableBody = document.querySelector('#itemTable tbody');
const totalAmountDisplay = document.getElementById('totalAmount');

// Function to add a new item to the table
function addItem() {
    const itemName = itemNameInput.value.trim();
    const itemAmount = itemAmountInput.value.trim();

    if (itemName !== '' && itemAmount !== '') {
        const newRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = itemName;
        // nameCell.innerHTML=itemName;
        newRow.appendChild(nameCell);

        const amountCell = document.createElement('td');
        amountCell.textContent = itemAmount;
        // nameCell.innerHTML=itemAmount;
        newRow.appendChild(amountCell);

        const delete1 = document.createElement('button');
        delete1.textContent = 'Delete';
        delete1.addEventListener('click', function (e) {
            e.stopPropagation();
            itemTableBody.removeChild(newRow);
        });
        newRow.appendChild(delete1);

        itemTableBody.appendChild(newRow);

        // Clear input fields
        itemNameInput.value = '';
        itemAmountInput.value = '';
    } else {
        alert('Please enter both item name and amount.');
    }
}

// Function to clear all items from the table
function clearAll() {
    itemTableBody.innerHTML = '';
    totalAmountDisplay.innerHTML = '';
}

function calculateTotal() {
    let total = 0;
    for (const row of itemTableBody.rows) {
        const amount = parseFloat(row.cells[1].textContent);
        total += amount;
    }

    // Update the total amount display
    // totalAmountDisplay.textContent = 'Total Amount: ' + total;
    totalAmountDisplay.innerHTML = 'Total Amount: ' + total;
}

// Attach event listeners to buttons
addItemButton.addEventListener('click', addItem);
clearAllButton.addEventListener('click', clearAll);
calculateTotalButton.addEventListener('click', calculateTotal);
