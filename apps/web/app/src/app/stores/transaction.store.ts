import { create } from 'zustand';

// Define the Transaction interface
export interface Transaction {
    id: string;
    title: string;
    type: 'spending' | 'income' | 'bills' | 'savings';
    amount: number;
    date: string; // ISO Date string
}

interface TransactionState {
    transactions: Transaction[];
    setTransactions: (transactions: Transaction[]) => void;
}

// Dummy Data
const DUMMY_TRANSACTIONS: Transaction[] = [
    {
        id: '1',
        title: 'Spending',
        type: 'spending',
        amount: -500,
        date: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'Income',
        type: 'income',
        amount: 3000,
        date: new Date().toISOString(),
    },
    {
        id: '3',
        title: 'Bills',
        type: 'bills',
        amount: -800,
        date: new Date().toISOString(),
    },
    {
        id: '4',
        title: 'Savings',
        type: 'savings',
        amount: 1000,
        date: new Date().toISOString(),
    },
];

export const useTransactionStore = create<TransactionState>((set) => ({
    transactions: DUMMY_TRANSACTIONS,
    setTransactions: (transactions) => set({ transactions }),
}));
