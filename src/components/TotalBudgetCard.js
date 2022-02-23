import React from 'react';
import { useBudgets } from '../contexts/BudgetsContext';
import BudgetCard from './BudgetCard';

export default function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budgets) => total + budgets.max, 0);
  if (amount === 0) return null;

  return <BudgetCard amount={amount} name="Total" gray max={max} hideButtons />;
}
