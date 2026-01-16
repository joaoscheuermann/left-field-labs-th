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

// Helper to generate random transactions
const generateRandomTransactions = (count: number): Transaction[] => {
    const types: Transaction['type'][] = [
        'spending',
        'income',
        'bills',
        'savings',
    ];
    const titles = {
        spending: ['Groceries', 'Restaurant', 'Coffee', 'Transport'],
        income: ['Salary', 'Freelance', 'Gift', 'Refund'],
        bills: ['Electricity', 'Internet', 'Rent', 'Water'],
        savings: ['Emergency Fund', 'Investment', 'Vacation', 'Car'],
    };

    return Array.from({ length: count }).map((_, i) => {
        const type = types[Math.floor(Math.random() * types.length)];
        const title =
            titles[type][Math.floor(Math.random() * titles[type].length)];
        const amount =
            type === 'income' || type === 'savings'
                ? Math.floor(Math.random() * 1000) + 100
                : -(Math.floor(Math.random() * 500) + 50);

        return {
            id: Math.random().toString(36).substr(2, 9),
            title,
            type,
            amount,
            date: new Date(
                Date.now() - Math.floor(Math.random() * 1000000000)
            ).toISOString(),
        };
    });
};

export const useTransactionStore = create<TransactionState>((set) => ({
    transactions: generateRandomTransactions(Math.floor(Math.random() * 30) + 20),
    setTransactions: (transactions) => set({ transactions }),
}));
