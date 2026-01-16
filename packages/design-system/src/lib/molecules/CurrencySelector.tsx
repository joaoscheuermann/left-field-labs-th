import { useState } from 'react';
import { Us, Br, Gb, Au, Ca, AngleDown } from '@org/icons';

import { Typography } from '../atoms/Typography';
import * as Dialog from '../organisms/Dialog';
import * as List from '../organisms/List';

export const COUNTRIES = [
  { code: 'US', name: 'US Dollar', Icon: Us },
  { code: 'BR', name: 'Brazilian Real', Icon: Br },
  { code: 'GB', name: 'British Pound', Icon: Gb },
  { code: 'AU', name: 'Australian Dollar', Icon: Au },
  { code: 'CA', name: 'Canadian Dollar', Icon: Ca },
];

interface CurrencySelectorProps {
  value?: (typeof COUNTRIES)[number];
  onSelect?: (value: (typeof COUNTRIES)[number]) => void;
}

export const CurrencySelector = ({
  value,
  onSelect,
}: CurrencySelectorProps) => {
  const [internalSelectedCountry, setInternalSelectedCountry] = useState(
    COUNTRIES[0]
  );
  const { isOpen, setOpen, close } = Dialog.useDialog();

  const selectedCountry = value || internalSelectedCountry;

  const handleSelect = (country: (typeof COUNTRIES)[number]) => {
    if (!value) {
      setInternalSelectedCountry(country);
    }
    onSelect?.(country);
    close();
  };

  return (
    <Dialog.Root isOpen={isOpen} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <button className="flex p-2 items-center gap-2 cursor-pointer group rounded-full rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
          <selectedCountry.Icon height="12px" width="12px" />

          <Typography
            variant="label"
            size="sm"
            className="flex items-center text-white font-medium select-none pt-[1px]"
            as="span"
          >
            {selectedCountry.name}
          </Typography>

          <AngleDown className="w-3 h-3" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Select a currency</Dialog.Title>
          </Dialog.Header>

          <List.Root>
            {COUNTRIES.map((country) => (
              <List.Item
                key={country.code}
                onClick={() => handleSelect(country)}
                className="bg-neutral-800 text-white cursor-pointer hover:bg-neutral-700 transition-colors"
              >
                <List.Leading>
                  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center relative">
                    <country.Icon
                      width="100%"
                      height="100%"
                      className="min-w-[140%] min-h-[140%]"
                    />
                  </div>
                </List.Leading>
                <List.Body>
                  <Typography variant="label" size="md">
                    {country.name}
                  </Typography>
                </List.Body>
              </List.Item>
            ))}
          </List.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
