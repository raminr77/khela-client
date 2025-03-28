import { Bar, BarChart, CartesianGrid, XAxis, LabelList } from 'recharts';

import {
  ChartTooltip,
  ChartContainer,
  type ChartConfig,
  ChartTooltipContent
} from '@/shared/components/ui/chart';
import { animator } from '@/shared/helpers';

import type { FlushChartData } from './types';

interface BarStyleChartProps {
  data: FlushChartData[];
  configs: ChartConfig;
}

export function BarStyleChart({ data, configs }: BarStyleChartProps) {
  return (
    <ChartContainer config={configs} className={animator({ name: 'fadeIn' })}>
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <ChartTooltip content={<ChartTooltipContent />} />
        <XAxis
          dataKey='label'
          tickMargin={10}
          axisLine={false}
          interval='preserveStartEnd'
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <Bar dataKey='pee' fill='var(--color-pee)' radius={4}>
          <LabelList
            offset={12}
            fontSize={12}
            position='top'
            className='fill-foreground'
          />
        </Bar>

        <Bar dataKey='poop' fill='var(--color-poop)' radius={4}>
          <LabelList
            offset={12}
            fontSize={12}
            position='top'
            className='fill-foreground'
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
