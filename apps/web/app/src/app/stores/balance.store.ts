import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BalanceState {
    balances: Record<string, number>;
    setBalance: (currencyCode: string, amount: number) => void;
    addBalance: (currencyCode: string, amount: number) => void;
}

// Initial random balances for demonstration
const INITIAL_BALANCES = {
    US: 20000.00,
    BR: 5430.50,
    GB: 1200.75,
    AU: 3500.20,
    CA: 4100.00,
};

export const useBalanceStore = create<BalanceState>()(
    persist(
        (set) => ({
            balances: INITIAL_BALANCES,
            setBalance: (code, amount) =>
                set((state) => ({
                    balances: { ...state.balances, [code]: amount },
                })),
            addBalance: (code, amount) =>
                set((state) => ({
                    balances: { ...state.balances, [code]: (state.balances[code] || 0) + amount },
                })),
        }),
        {
            name: 'balance-storage',
        }
    )
);
