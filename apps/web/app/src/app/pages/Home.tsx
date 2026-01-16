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
} from '@org/design-system';

import { useCurrencyStore } from '../stores/currency.store';
import { useBalanceStore } from '../stores/balance.store';

import {
  DollarSendCircle,
  DollarReceiveCircle,
  Bank1,
  TrophyStar,
  Bell,
  Wallet,
} from '@org/icons';

const Home = () => {
  const { currencyCode, setCurrencyCode } = useCurrencyStore();
  const { balances } = useBalanceStore();

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
          <Page.Header>
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
            <Button.Wrapper variant="white" size="md" outline>
              <Button.Icon>
                <Wallet className="text-white" />
              </Button.Icon>
              <Button.Label>Add Money</Button.Label>
            </Button.Wrapper>
          </Box>
        </Box>
        <Box className="absolute bottom-[-44px] left-0 right-0 h-[88px] px-4">
          <Box className="flex row justify-evenly items-center w-full h-full bg-neutral-900 rounded-xl">
            <Box className="flex flex-col items-center gap-1">
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

            <Box className="flex flex-col items-center gap-1">
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

            <Box className="flex flex-col items-center gap-1">
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
      <Box>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
        quibusdam nihil qui suscipit tenetur deserunt, ratione itaque adipisci
        officiis ullam rem reprehenderit corporis natus quaerat temporibus autem
        excepturi. Nisi, reiciendis.
      </Box>
    </Box>
  );
};

export default Home;
