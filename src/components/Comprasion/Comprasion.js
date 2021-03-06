import React from "react";
import ComprasionStyles from "./ComprasionStyles.css";

const Comprasion = (props) => {
  const { income, expense } = props;
  return (
    <div className="comprasion">
      <div className="income">
        <h2>Income</h2>
        <h3>{income.toFixed(2) + "$"}</h3>
      </div>
      <div className="expense">
        <h2>Expense</h2>
        <h3>{expense.toFixed(2) + "$"}</h3>
      </div>
    </div>
  );
};

export default Comprasion;
