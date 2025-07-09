# Personal Finance Dashboard

A modern, responsive personal finance dashboard built with React, TypeScript, and Tailwind CSS. Track your income, expenses, budgets, and financial goals with beautiful visualizations and intuitive controls.

## Features

### 📊 Financial Overview
- **Income & Expense Tracking**: Monitor your total income, expenses, and net worth
- **Savings Rate**: Calculate and track your savings percentage
- **Real-time Statistics**: View key financial metrics at a glance

### 📈 Visual Analytics
- **Expense Breakdown**: Interactive pie chart showing spending by category
- **Budget Progress**: Visual progress bars for each budget category
- **Trend Analysis**: Month-over-month comparison indicators

### 💰 Budget Management
- **Category-based Budgets**: Set monthly budgets for different spending categories
- **Progress Tracking**: Visual indicators showing budget utilization
- **Overspending Alerts**: Color-coded warnings when approaching budget limits

### 🎯 Financial Goals
- **Goal Setting**: Create and track multiple financial goals
- **Progress Visualization**: See your progress towards each goal
- **Target Dates**: Set and monitor target completion dates

### 📝 Transaction Management
- **Transaction History**: View all income and expense transactions
- **Filtering**: Filter by transaction type (income/expense)
- **Category Organization**: Transactions organized by spending categories

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Beautiful and responsive charts
- **Lucide React** - Modern icon library
- **Date-fns** - Date manipulation utilities

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-finance-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the dashboard

### Available Scripts

- `npm start` - Start the development server
- `npm build` - Build the app for production
- `npm test` - Run the test suite
- `npm eject` - Eject from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── StatsCard.tsx   # Statistics display cards
│   ├── ExpenseChart.tsx # Pie chart for expenses
│   ├── TransactionList.tsx # Transaction history
│   ├── BudgetProgress.tsx # Budget tracking
│   └── FinancialGoals.tsx # Goal progress tracking
├── data/               # Mock data and utilities
│   └── mockData.ts     # Sample financial data
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── App.tsx            # Main application component
├── index.tsx          # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Data Structure

### Transaction
```typescript
interface Transaction {
  id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  description: string;
  date: string;
  tags?: string[];
}
```

### Budget
```typescript
interface Budget {
  id: string;
  category: string;
  amount: number;
  spent: number;
  period: 'monthly' | 'yearly';
}
```

### Financial Goal
```typescript
interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  description: string;
}
```

## Customization

### Adding New Categories
1. Update the `mockCategories` array in `src/data/mockData.ts`
2. Add corresponding transactions and budgets
3. The charts and components will automatically update

### Styling
- Modify `src/index.css` for global styles
- Update `tailwind.config.js` for theme customization
- Component-specific styles are in the respective component files

### Data Integration
The dashboard currently uses mock data. To integrate with real data:
1. Replace mock data functions with API calls
2. Implement data persistence (localStorage, database, etc.)
3. Add authentication if needed

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Recharts](https://recharts.org/) for beautiful chart components
- [Lucide](https://lucide.dev/) for the icon library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework 