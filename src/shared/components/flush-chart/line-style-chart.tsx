import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts';

import {
  ChartTooltip,
  ChartContainer,
  type ChartConfig,
  ChartTooltipContent
} from '@/shared/components/ui/chart';
import { animator } from '@/shared/helpers';

import type { FlushChartData } from './types';

interface LineStyleChartProps {
  data: FlushChartData[];
  configs: ChartConfig;
}

export function LineStyleChart({ data, configs }: LineStyleChartProps) {
  return (
    <ChartContainer config={configs} className={animator({ name: 'fadeIn' })}>
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <ChartTooltip content={<ChartTooltipContent />} />
        <XAxis
          dataKey='label'
          tickMargin={10}
          axisLine={false}
          interval='preserveStartEnd'
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Line
          type='natural'
          dataKey='pee'
          activeDot={{ r: 6 }}
          stroke='var(--color-pee)'
          dot={{ fill: 'var(--color-pee)' }}
        >
          <LabelList
            offset={12}
            fontSize={12}
            position='top'
            className='fill-foreground'
          />
        </Line>

        <Line
          type='natural'
          dataKey='poop'
          activeDot={{ r: 6 }}
          stroke='var(--color-poop)'
          dot={{ fill: 'var(--color-poop)' }}
        >
          <LabelList
            offset={12}
            fontSize={12}
            position='top'
            className='fill-foreground'
          />
        </Line>
      </LineChart>
    </ChartContainer>
  );
}
