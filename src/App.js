import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from './components/incomeExpenses';
import { TransactionList } from "./components/transactionList";
import { AddTransaction } from "./components/addTransaction";

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
