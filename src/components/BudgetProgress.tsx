import React from 'react';
import { Budget } from '../types';

interface BudgetProgressProps {
  budgets: Budget[];
}

const BudgetProgress: React.FC<BudgetProgressProps> = ({ budgets }) => {
  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-danger-500';
    if (percentage >= 75) return 'bg-warning-500';
    return 'bg-success-500';
  };

  const getProgressBgColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-danger-100';
    if (percentage >= 75) return 'bg-warning-100';
    return 'bg-success-100';
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Overview</h3>
      <div className="space-y-4">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.amount) * 100;
          const remaining = budget.amount - budget.spent;
          
          return (
            <div key={budget.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">
                    {budget.category === 'Food & Dining' ? '🍽️' :
                     budget.category === 'Transportation' ? '🚗' :
                     budget.category === 'Entertainment' ? '🎬' :
                     budget.category === 'Housing' ? '🏠' :
                     budget.category === 'Utilities' ? '⚡' :
                     budget.category === 'Healthcare' ? '🏥' : '💰'}
                  </span>
                  <span className="font-medium text-gray-900">{budget.category}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    ${budget.spent.toLocaleString()} / ${budget.amount.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">
                    ${remaining.toLocaleString()} remaining
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(percentage)}`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>0%</span>
                <span>{percentage.toFixed(0)}%</span>
                <span>100%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetProgress; 