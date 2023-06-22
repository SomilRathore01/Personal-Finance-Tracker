// Get elements from the DOM
const transactionForm = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');
const transactionList = document.getElementById('transaction-list');
const balanceDisplay = document.getElementById('balance');
const dateinput = document.getElementById('date');

// Initialize transaction data
let transactions = [];
let balance = 0;

// Function to add a transaction
function addTransaction(e) {
  e.preventDefault();

  // Get user input values
  const description = descriptionInput.value;
  const date = dateinput.value
  const amount = +amountInput.value;
  const type = typeInput.value;

  // Create transaction object
  const transaction = { description, date, amount, type };

  // Add transaction to the data array
  transactions.push(transaction);

  // Update the balance
  if (type === 'income') {
    balance += amount;
  } else if (type === 'expense') {
    balance -= amount;
  }

  // Clear form inputs
  descriptionInput.value = '';
  amountInput.value = '';
  dateinput.value = '';
  typeInput.selectedIndex = 0;

  // Update the UI
  updateUI();
}
const EditFunc  = (index) =>{
    let update = window.prompt("Update the discription")
    let transaction = transactions[index];
    const updatedval =  transaction.description=update  
    updateUI() 
}

// Function to delete a transaction
function deleteTransaction(index) {
  // Get the transaction to be deleted
  const transaction = transactions[index];

  // Update the balance
  if (transaction.type === 'income') {
    balance -= transaction.amount;
  } else if (transaction.type === 'expense') {
    balance += transaction.amount;
  }

  // Remove the transaction from the array
  transactions.splice(index, 1);

  // Update the UI
  updateUI();
}

// Function to update the UI
function updateUI() {
  // Clear the transaction list
  transactionList.innerHTML = '';

  // Update the balance display
  balanceDisplay.textContent = balance.toFixed(2);

  // Render each transaction in the list
  transactions.forEach((transaction, index) => {
    const listItem = document.createElement('li');
    listItem.style.wordSpacing = "40px"
    listItem.textContent = `${transaction.description}:         ${transaction.date}         ${transaction.amount.toFixed(2)}`;
    listItem.classList.add(transaction.type);
    const editButton = document.createElement("button");
    editButton.innerText = "Edit"
    editButton.addEventListener("click",()=>EditFunc(index) )
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTransaction(index));

    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    transactionList.appendChild(listItem );
  });
}

// Add event listener to the transaction form
transactionForm.addEventListener('submit', addTransaction);

