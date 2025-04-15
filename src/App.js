import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 50 },
    { id: 2, description: "Rent", amount: 1200 },
    { id: 3, description: "Utilities", amount: 150 },
    { id: 4, description: "Internet", amount: 60 },
    { id: 5, description: "Transport", amount: 30 },
    { id: 6, description: "Entertainment", amount: 100 },
    { id: 7, description: "Dining Out", amount: 80 },
    { id: 8, description: "Gym Membership", amount: 40 },
    { id: 9, description: "Insurance", amount: 200 },
    { id: 10, description: "Miscellaneous", amount: 50 },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter(exp =>
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;

