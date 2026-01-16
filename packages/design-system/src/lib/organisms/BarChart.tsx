import clsx from 'clsx';
import { Typography } from '../atoms/Typography';
import { Box } from '../atoms/Box';

export interface BarChartProps {
  data: {
    label: string;
    value: number;
    active?: boolean;
  }[];
  height?: number;
  barColor?: string;
  activeBarColor?: string;
  className?: string;
}

export const BarChart = ({
  data,
  height = 150,
  barColor = 'bg-primary-800',
  activeBarColor = 'bg-primary-500',
  className,
}: BarChartProps) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <Box
      className={clsx('flex items-end justify-between gap-2 w-full', className)}
      style={{ height }}
    >
      {data.map((item, index) => {
        const percentage = maxValue > 0 ? (item.value / maxValue) * 100 : 0;

        return (
          <Box
            key={index}
            className="flex flex-col items-center gap-2 flex-1 h-full justify-end"
          >
            <Typography
              variant="label"
              size="sm"
              className="text-neutral-400 rotate-[-90deg] mb-2"
            >
              ${item.value}
            </Typography>
            <Box
              className={clsx(
                'w-full rounded-t-md transition-all duration-300',
                item.active ? activeBarColor : barColor
              )}
              style={{ height: `${percentage}%` }}
            />
            <Typography
              variant="label"
              size="sm"
              className={clsx(
                'text-center',
                item.active ? 'text-white' : 'text-neutral-400'
              )}
            >
              {item.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};
