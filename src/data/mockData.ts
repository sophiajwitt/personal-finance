import { Transaction, Category, Budget, FinancialGoal } from '../types';

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'income',
    category: 'Salary',
    amount: 5000,
    description: 'Monthly salary',
    date: '2024-01-15',
    tags: ['work', 'salary']
  },
  {
    id: '2',
    type: 'expense',
    category: 'Food & Dining',
    amount: 120,
    description: 'Grocery shopping',
    date: '2024-01-14',
    tags: ['food', 'groceries']
  },
  {
    id: '3',
    type: 'expense',
    category: 'Transportation',
    amount: 80,
    description: 'Gas and parking',
    date: '2024-01-13',
    tags: ['transport', 'gas']
  },
  {
    id: '4',
    type: 'expense',
    category: 'Entertainment',
    amount: 45,
    description: 'Movie tickets',
    date: '2024-01-12',
    tags: ['entertainment', 'movies']
  },
  {
    id: '5',
    type: 'income',
    category: 'Freelance',
    amount: 800,
    description: 'Web development project',
    date: '2024-01-10',
    tags: ['freelance', 'work']
  },
  {
    id: '6',
    type: 'expense',
    category: 'Housing',
    amount: 1500,
    description: 'Rent payment',
    date: '2024-01-01',
    tags: ['housing', 'rent']
  },
  {
    id: '7',
    type: 'expense',
    category: 'Utilities',
    amount: 200,
    description: 'Electricity and internet',
    date: '2024-01-05',
    tags: ['utilities', 'bills']
  },
  {
    id: '8',
    type: 'expense',
    category: 'Healthcare',
    amount: 150,
    description: 'Doctor visit',
    date: '2024-01-08',
    tags: ['healthcare', 'medical']
  }
];

export const mockCategories: Category[] = [
  { id: '1', name: 'Food & Dining', color: '#ef4444', icon: '🍽️' },
  { id: '2', name: 'Transportation', color: '#3b82f6', icon: '🚗' },
  { id: '3', name: 'Entertainment', color: '#8b5cf6', icon: '🎬' },
  { id: '4', name: 'Housing', color: '#f59e0b', icon: '🏠' },
  { id: '5', name: 'Utilities', color: '#10b981', icon: '⚡' },
  { id: '6', name: 'Healthcare', color: '#ec4899', icon: '🏥' },
  { id: '7', name: 'Salary', color: '#22c55e', icon: '💰' },
  { id: '8', name: 'Freelance', color: '#06b6d4', icon: '💼' }
];

export const mockBudgets: Budget[] = [
  { id: '1', category: 'Food & Dining', amount: 400, spent: 120, period: 'monthly' },
  { id: '2', category: 'Transportation', amount: 300, spent: 80, period: 'monthly' },
  { id: '3', category: 'Entertainment', amount: 200, spent: 45, period: 'monthly' },
  { id: '4', category: 'Housing', amount: 1500, spent: 1500, period: 'monthly' },
  { id: '5', category: 'Utilities', amount: 250, spent: 200, period: 'monthly' },
  { id: '6', category: 'Healthcare', amount: 300, spent: 150, period: 'monthly' }
];

export const mockGoals: FinancialGoal[] = [
  {
    id: '1',
    name: 'Emergency Fund',
    targetAmount: 10000,
    currentAmount: 6500,
    targetDate: '2024-06-01',
    description: 'Save 6 months of expenses'
  },
  {
    id: '2',
    name: 'Vacation Fund',
    targetAmount: 3000,
    currentAmount: 1200,
    targetDate: '2024-08-01',
    description: 'Trip to Europe'
  },
  {
    id: '3',
    name: 'New Car',
    targetAmount: 25000,
    currentAmount: 8000,
    targetDate: '2025-03-01',
    description: 'Down payment for a new car'
  }
]; 