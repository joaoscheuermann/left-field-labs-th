import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CurrencyState {
    currencyCode: string;
    setCurrencyCode: (code: string) => void;
}

export const useCurrencyStore = create<CurrencyState>()(
    persist(
        (set) => ({
            currencyCode: 'US', // Default to US Dollar
            setCurrencyCode: (code) => set({ currencyCode: code }),
        }),
        {
            name: 'currency-storage',
        }
    )
);
