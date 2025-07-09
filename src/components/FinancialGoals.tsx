import React from 'react';
import { FinancialGoal } from '../types';
import { Target, TrendingUp } from 'lucide-react';

interface FinancialGoalsProps {
  goals: FinancialGoal[];
}

const FinancialGoals: React.FC<FinancialGoalsProps> = ({ goals }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Financial Goals</h3>
        <button className="btn-primary flex items-center gap-2">
          <Target size={16} />
          Add Goal
        </button>
      </div>
      
      <div className="space-y-4">
        {goals.map((goal) => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100;
          const remaining = goal.targetAmount - goal.currentAmount;
          
          return (
            <div key={goal.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{goal.name}</h4>
                  <p className="text-sm text-gray-600">{goal.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    ${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">
                    Target: {formatDate(goal.targetDate)}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-gray-900">{progress.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>${goal.currentAmount.toLocaleString()} saved</span>
                  <span>${remaining.toLocaleString()} to go</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FinancialGoals; 