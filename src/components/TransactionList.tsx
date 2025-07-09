import React, { useState } from 'react';
import { Transaction } from '../types';
import { format } from 'date-fns';
import { Filter, Plus } from 'lucide-react';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true;
    return transaction.type === filter;
  });

  const formatAmount = (amount: number, type: 'income' | 'expense') => {
    const formatted = `$${Math.abs(amount).toLocaleString()}`;
    return type === 'income' ? `+${formatted}` : `-${formatted}`;
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        <div className="flex items-center gap-2">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                filter === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('income')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                filter === 'income' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Income
            </button>
            <button
              onClick={() => setFilter('expense')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                filter === 'expense' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Expenses
            </button>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={16} />
            Add
          </button>
        </div>
      </div>
      
      <div className="space-y-3">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === 'income' ? 'bg-success-100' : 'bg-danger-100'
                }`}
              >
                <span className="text-lg">
                  {transaction.type === 'income' ? '💰' : '💸'}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{transaction.description}</p>
                <p className="text-sm text-gray-600">{transaction.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold ${
                  transaction.type === 'income' ? 'text-success-600' : 'text-danger-600'
                }`}
              >
                {formatAmount(transaction.amount, transaction.type)}
              </p>
              <p className="text-sm text-gray-500">
                {format(new Date(transaction.date), 'MMM dd, yyyy')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList; 