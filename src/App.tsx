import React, { useMemo } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Target, BarChart3 } from 'lucide-react';
import StatsCard from './components/StatsCard';
import ExpenseChart from './components/ExpenseChart';
import TransactionList from './components/TransactionList';
import BudgetProgress from './components/BudgetProgress';
import FinancialGoals from './components/FinancialGoals';
import { mockTransactions, mockCategories, mockBudgets, mockGoals } from './data/mockData';

function App() {
  const stats = useMemo(() => {
    const totalIncome = mockTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const totalExpenses = mockTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const netWorth = totalIncome - totalExpenses;
    const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome) * 100 : 0;
    
    return {
      totalIncome,
      totalExpenses,
      netWorth,
      savingsRate
    };
  }, []);

  const expenseChartData = useMemo(() => {
    const expenseByCategory = mockTransactions
      .filter(t => t.type === 'expense')
      .reduce((acc, transaction) => {
        const category = transaction.category;
        acc[category] = (acc[category] || 0) + transaction.amount;
        return acc;
      }, {} as Record<string, number>);

    return Object.entries(expenseByCategory).map(([category, amount]) => {
      const categoryData = mockCategories.find(c => c.name === category);
      return {
        name: category,
        value: amount,
        color: categoryData?.color || '#6b7280'
      };
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Personal Finance Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="btn-secondary">Settings</button>
              <button className="btn-primary">Add Transaction</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Income"
            value={`$${stats.totalIncome.toLocaleString()}`}
            change="+12.5% from last month"
            changeType="positive"
            icon={TrendingUp}
            color="#22c55e"
          />
          <StatsCard
            title="Total Expenses"
            value={`$${stats.totalExpenses.toLocaleString()}`}
            change="+8.2% from last month"
            changeType="negative"
            icon={TrendingDown}
            color="#ef4444"
          />
          <StatsCard
            title="Net Worth"
            value={`$${stats.netWorth.toLocaleString()}`}
            change="+15.3% from last month"
            changeType="positive"
            icon={DollarSign}
            color="#3b82f6"
          />
          <StatsCard
            title="Savings Rate"
            value={`${stats.savingsRate.toFixed(1)}%`}
            change="+2.1% from last month"
            changeType="positive"
            icon={Target}
            color="#8b5cf6"
          />
        </div>

        {/* Charts and Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Expense Chart */}
          <div className="lg:col-span-1">
            <ExpenseChart data={expenseChartData} />
          </div>
          
          {/* Budget Progress */}
          <div className="lg:col-span-2">
            <BudgetProgress budgets={mockBudgets} />
          </div>
        </div>

        {/* Transactions and Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TransactionList transactions={mockTransactions} />
          <FinancialGoals goals={mockGoals} />
        </div>
      </main>
    </div>
  );
}

export default App; 