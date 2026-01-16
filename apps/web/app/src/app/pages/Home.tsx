import {
  Divider,
  Page,
  Typography,
  IconButton,
  Box,
  CurrencySelector,
  Search,
  BalanceDisplay,
  Button,
  List,
} from '@org/design-system';

import { useTransactionStore } from '../stores/transaction.store';
import { useCurrencyStore } from '../stores/currency.store';
import { useBalanceStore } from '../stores/balance.store';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import {
  DollarSendCircle,
  DollarReceiveCircle,
  Bank1,
  TrophyStar,
  Bell,
  Wallet,
  ArrowRight,
  AngleRight,
  Coins,
  CreditCard,
  Invoice,
  SackDollar,
} from '@org/icons';

// Type mapping to icons
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

// Start color mapping
const getColorForType = (type: string) => {
  switch (type) {
    case 'spending':
      return 'bg-primary-500'; // Blueish
    case 'income':
      return 'bg-green-600';
    case 'bills':
      return 'bg-orange-600';
    case 'savings':
      return 'bg-yellow-600';
    default:
      return 'bg-neutral-600';
  }
};

const Home = () => {
  const navigate = useNavigate();
  const { currencyCode, setCurrencyCode } = useCurrencyStore();
  const { balances } = useBalanceStore();
  const { transactions } = useTransactionStore();

  const selectedCurrency =
    CurrencySelector.COUNTRIES.find((c) => c.code === currencyCode) ||
    CurrencySelector.COUNTRIES[0];

  const currentBalance = balances[selectedCurrency.code] || 0;

  const formattedNumber = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(currentBalance);

  return (
    <Box className="flex flex-col gap-4 relative w-full h-full">
      <Box className="relative mt-[-16px] ml-[-16px] mr-[-16px] bg-primary mb-[42px]">
        <Box className="flex flex-col p-4 pb-[90px] gap-8">
          <Page.Header sticky>
            <IconButton.Wrapper variant="primary" size="sm">
              <TrophyStar width="24px" height="24px" />
            </IconButton.Wrapper>

            <Search.Search />

            <IconButton.Wrapper variant="primary" size="sm">
              <Bell width="24px" height="24px" />
            </IconButton.Wrapper>
          </Page.Header>

          <Box className="flex flex-col items-center gap-3">
            <CurrencySelector.CurrencySelector
              value={selectedCurrency}
              onSelect={(country) => setCurrencyCode(country.code)}
            />

            <Box className="flex flex-col items-center">
              <BalanceDisplay.BalanceDisplay value={formattedNumber} />
              <Typography
                variant="body"
                size="md"
                weight="regular"
                className="text-primary-100 opacity-90"
              >
                Available Balance
              </Typography>
            </Box>

            {/* TODO: This Button can be a Organism that opens a Dialog to add funds and just calls a success callback when the user is done */}
            <Button.Wrapper
              variant="white"
              size="md"
              outline
              onClick={() => navigate('/wip')}
            >
              <Button.Icon>
                <Wallet className="text-white" />
              </Button.Icon>
              <Button.Label>Add Money</Button.Label>
            </Button.Wrapper>
          </Box>
        </Box>

        <Box className="absolute bottom-[-44px] left-0 right-0 h-[88px] px-4">
          <Box className="flex row justify-evenly items-center w-full h-full bg-neutral-900 rounded-xl">
            <Box
              className="flex flex-col items-center gap-1 cursor-pointer"
              onClick={() => navigate('/wip')}
            >
              <DollarSendCircle
                height="28px"
                width="28px"
                className="text-primary-400"
              />
              <Typography
                variant="label"
                size="sm"
                className="text-neutral-200"
              >
                Send
              </Typography>
            </Box>

            <Divider orientation="vertical" size="third" />

            <Box
              className="flex flex-col items-center gap-1 cursor-pointer"
              onClick={() => navigate('/wip')}
            >
              <DollarReceiveCircle
                height="28px"
                width="28px"
                className="text-yellow-800"
              />
              <Typography
                variant="label"
                size="sm"
                className="text-neutral-200"
              >
                Request
              </Typography>
            </Box>

            <Divider orientation="vertical" size="third" />

            <Box
              className="flex flex-col items-center gap-1 cursor-pointer"
              onClick={() => navigate('/wip')}
            >
              <Bank1 height="28px" width="28px" className="text-orange-800" />
              <Typography
                variant="label"
                size="sm"
                className="text-neutral-200"
              >
                Bank
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Transactions */}
      <Box className="flex-1">
        <Box className="flex flex-col gap-2 w-full">
          {/* Header */}
          <Box className="flex items-center justify-between">
            <Typography
              variant="headline"
              size="sm"
              weight="medium"
              className="text-white"
            >
              Transactions
            </Typography>
            <IconButton.Wrapper
              size="sm"
              variant="ghost"
              onClick={() => navigate('/wip')}
              className="text-white"
            >
              <ArrowRight width={20} height={20} />
            </IconButton.Wrapper>
          </Box>

          {/* List Container */}
          <Box className="flex flex-col rounded-xl bg-neutral-900 px-4">
            <List.Root className="!gap-0">
              {transactions.map((transaction, index, transactions) => {
                const isLastItem = index + 1 === transactions.length;

                return (
                  <>
                    <List.Item
                      key={transaction.id}
                      className="rounded-[24px] cursor-pointer py-4 !px-0 items-center"
                      onClick={() =>
                        navigate(`/transactions/${transaction.type}`)
                      }
                    >
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
                      <List.Body className="">
                        <Typography
                          variant="body"
                          size="md"
                          className="text-neutral text-neutral-100"
                        >
                          {transaction.title}
                        </Typography>
                      </List.Body>
                      <List.Trailing className="flex items-center gap-3">
                        <Typography
                          variant="body"
                          size="xl"
                          className={clsx(
                            // 'font-medium',
                            transaction.amount < 0
                              ? 'text-red-500'
                              : 'text-green-500'
                          )}
                        >
                          {transaction.amount < 0
                            ? '-$' + Math.abs(transaction.amount)
                            : '$' + transaction.amount}
                        </Typography>
                        <AngleRight
                          width={24}
                          height={24}
                          className="text-neutral-300"
                        />
                      </List.Trailing>
                    </List.Item>
                    {!isLastItem && <Divider />}
                  </>
                );
              })}
            </List.Root>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
