import React from 'react';
import {
  Box,
  Navigation,
  Page,
  Typography,
  List,
  Divider,
  BarChart,
  CurrencySelector,
  IconButton,
} from '@org/design-system';
import {
  Coins,
  CreditCard,
  Invoice,
  SackDollar,
  Wallet,
  AngleRight,
  ArrowRight,
  SlidersHorizontalAlt,
} from '@org/icons';

import { useNavigate, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { useTransactionStore } from '../stores/transaction.store';
import { useBalanceStore } from '../stores/balance.store';
import { useCurrencyStore } from '../stores/currency.store';

export const Transactions = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { transactions } = useTransactionStore();
  const { balances } = useBalanceStore();
  const { currencyCode } = useCurrencyStore();

  const selectedCurrency =
    CurrencySelector.COUNTRIES.find((c) => c.code === currencyCode) ||
    CurrencySelector.COUNTRIES[0];
  const currentBalance = balances[selectedCurrency.code] || 0;

  const currentTab = params.tab || 'spending';

  const filteredTransactions = transactions.filter(
    (t) => t.type === currentTab
  );

  // Calculate Total Spend from 'spending' transactions
  const totalSpend = transactions
    .filter((t) => t.type === 'spending')
    .reduce((acc, curr) => acc + Math.abs(curr.amount), 0);

  // Prepare data for BarChart (Mocking weekly data for now based on total spend distribution)
  // In a real app, this would be aggregated from actual transaction dates
  const chartData = [
    { label: '2-8', value: Math.floor(totalSpend * 0.2), active: false },
    { label: '9-15', value: Math.floor(totalSpend * 0.15), active: true },
    { label: '16-22', value: Math.floor(totalSpend * 0.4), active: false },
    { label: '23-29', value: Math.floor(totalSpend * 0.25), active: false },
    { label: '30-1', value: Math.floor(totalSpend * 0.1), active: false },
  ];

  const tabs = [
    {
      icon: () => (
        <Box
          className={clsx(
            'w-12 h-12 rounded-full flex items-center justify-center bg-primary-800'
          )}
        >
          <CreditCard className="text-primary-200" width={24} height={24} />
        </Box>
      ),
      label: 'Spending',
      id: 'spending',
    },
    {
      icon: () => (
        <Box
          className={clsx(
            'w-12 h-12 rounded-full flex items-center justify-center bg-green-800'
          )}
        >
          <Coins className="text-green-200" width={24} height={24} />
        </Box>
      ),
      label: 'Income',
      id: 'income',
    },
    {
      icon: () => (
        <Box
          className={clsx(
            'w-12 h-12 rounded-full flex items-center justify-center bg-yellow-700'
          )}
        >
          <Invoice className="text-yellow-900" width={24} height={24} />
        </Box>
      ),
      label: 'Bills',
      id: 'bills',
    },
    {
      icon: () => (
        <Box
          className={clsx(
            'w-12 h-12 rounded-full flex items-center justify-center bg-orange-800'
          )}
        >
          <SackDollar className="text-orange-300" width={24} height={24} />
        </Box>
      ),
      label: 'Savings',
      id: 'savings',
    },
  ];

  const getIconForType = (type: string) => {
    switch (type) {
      case 'spending':
        return <CreditCard className="text-white" width={24} height={24} />;
      case 'income':
        return <Coins className="text-white" width={24} height={24} />;
      case 'bills':
        return <Invoice className="text-white" width={24} height={24} />;
      case 'savings':
        return <SackDollar className="text-white" width={24} height={24} />;
      default:
        return <Wallet className="text-white" width={24} height={24} />;
    }
  };

  const getColorForType = (type: string) => {
    switch (type) {
      case 'spending':
        return 'bg-primary-500';
      case 'income':
        return 'bg-green-600';
      case 'bills':
        return 'bg-yellow-600';
      case 'savings':
        return 'bg-orange-600';
      default:
        return 'bg-neutral-600';
    }
  };

  return (
    <Box className="flex flex-col items-center justify-start w-full h-full gap-4">
      <Page.Header>Spending</Page.Header>

      <Box className="flex flex-col w-full gap-4">
        {/** TODO: Month selector */}

        <Box className="flex gap-4 w-full">
          <Box className="flex flex-col justify-center align-center flex-1 bg-primary rounded-2xl px-4 py-6 text-white w-full">
            <Box className="flex items-center gap-1">
              <CreditCard width={16} height={16} />
              <Typography variant="label" size="sm" className="text-white">
                Total Spend
              </Typography>
            </Box>
            <Typography variant="headline" size="md" className="text-white">
              $
              {totalSpend.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Typography>
          </Box>

          <Box className="flex flex-col justify-center flex-1 bg-yellow-500 rounded-2xl px-4 py-6 text-gray-800">
            <Box className="flex items-center gap-1">
              <CreditCard width={16} height={16} />
              <Typography variant="label" size="sm">
                Available Balance
              </Typography>
            </Box>
            <Typography variant="headline" size="md" weight="medium">
              $
              {currentBalance.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Typography>
          </Box>
        </Box>

        <Box className="bg-[#1E1E1E] rounded-xl p-4 w-full">
          <BarChart.BarChart data={chartData} height={150} />
        </Box>
      </Box>

      <Navigation.Root className="">
        {tabs.map((tab) => (
          <Navigation.Item
            key={tab.id}
            active={tab.id === params.tab}
            onClick={() => navigate(`/transactions/${tab.id}`)}
          >
            <Box className="flex flex-col items-center gap-1">
              <tab.icon />
              <Typography
                variant="label"
                size="sm"
                className={
                  tab.id === params.tab ? 'text-primary-400' : 'text-neutral-50'
                }
              >
                {tab.label}
              </Typography>
            </Box>
          </Navigation.Item>
        ))}
      </Navigation.Root>

      <Box className="flex flex-col w-full">
        <Box className="flex flex-col gap-2 w-full">
          <Box className="flex items-center justify-between">
            <Typography
              variant="headline"
              size="sm"
              weight="medium"
              className="text-white"
            >
              Spending list
            </Typography>
            <IconButton.Wrapper
              size="sm"
              variant="ghost"
              className="text-white"
            >
              <SlidersHorizontalAlt width={20} height={20} />
            </IconButton.Wrapper>
          </Box>
        </Box>
        <List.Root className="!gap-0 w-full">
          {filteredTransactions.map((transaction, index, array) => {
            const isLastItem = index + 1 === array.length;
            return (
              <React.Fragment key={transaction.id}>
                <List.Item className="rounded-[24px] cursor-pointer py-4 !px-0 items-center">
                  <List.Leading>
                    <Box
                      className={clsx(
                        'w-12 h-12 rounded-full flex items-center justify-center',
                        getColorForType(transaction.type)
                      )}
                    >
                      {getIconForType(transaction.type)}
                    </Box>
                  </List.Leading>
                  <List.Body>
                    <Box className="flex flex-col">
                      <Typography
                        variant="body"
                        size="md"
                        className="text-neutral-100"
                      >
                        {transaction.title}
                      </Typography>
                      <Typography
                        variant="label"
                        size="sm"
                        className="text-neutral-400"
                      >
                        {new Date(transaction.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </List.Body>
                  <List.Trailing className="flex items-center gap-3">
                    <Typography
                      variant="body"
                      size="xl"
                      className={clsx(
                        transaction.amount < 0
                          ? 'text-red-500'
                          : 'text-green-500'
                      )}
                    >
                      {transaction.amount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </Typography>
                  </List.Trailing>
                </List.Item>
                {!isLastItem && <Divider />}
              </React.Fragment>
            );
          })}
          {filteredTransactions.length === 0 && (
            <Box className="flex flex-col items-center justify-center p-8 gap-4">
              <Typography
                variant="body"
                size="lg"
                className="text-neutral-400 text-center"
              >
                No transactions found for this category.
              </Typography>
            </Box>
          )}
        </List.Root>
      </Box>
    </Box>
  );
};

export default Transactions;
