import { Typography } from '../atoms/Typography';
import { Box } from '../atoms/Box';
import clsx from 'clsx';

export interface BalanceDisplayProps {
  /**
   * The formatted value to display.
   * Example: "$20,000"
   */
  value: string;
}

export const BalanceDisplay = ({ value }: BalanceDisplayProps) => {
  return (
    <Box className="flex flex-col items-center gap-1">
      <Typography
        variant="title"
        size="xl"
        weight="bold"
        className={clsx('text-white text-[40px] leading-tight tracking-tight')}
      >
        <span>$</span>
        {value}
      </Typography>
    </Box>
  );
};

export default BalanceDisplay;
