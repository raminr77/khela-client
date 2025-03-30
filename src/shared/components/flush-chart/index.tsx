import { ChartBarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription
} from '@/shared/components/ui/card';
import { type ChartConfig } from '@/shared/components/ui/chart';
import { Button } from '@/shared/components/ui/button';
import { Toggle } from '@/shared/components/ui/toggle';
import { getMonthName } from '@/shared/helpers';

import { LineStyleChart } from './line-style-chart';
import { BarStyleChart } from './bar-style-chart';
import type { FlushChartData } from './types';

const CHART_CONFIGS = {
  pee: {
    label: 'pee',
    color: '#FFA725'
  },
  poop: {
    label: 'poop',
    color: '#a36a10'
  }
} satisfies ChartConfig;

interface FlushChartProps {
  title?: string;
  data: FlushChartData[];
  description?: string;
}

export function FlushChart({
  data = [],
  title = 'Flush Counter',
  description = 'How many times you’ve flushed?'
}: FlushChartProps) {
  const [showBarChart, setShowBarChart] = useState<boolean>(false);

  const lastDataIndex = data.length - 1;
  const startDate = `${data[0].day} ${getMonthName(data[0].month)}`;
  const endDate = `${data[lastDataIndex].day} ${getMonthName(data[lastDataIndex].month)}`;

  const handleToggleChart = (isBar: boolean) => {
    setShowBarChart(isBar);
  };

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle>{title}</CardTitle>
          <Toggle
            size='sm'
            variant='outline'
            aria-label='Toggle Chart Style'
            onPressedChange={handleToggleChart}
            className='data-[state=on]:bg-amber-400 data-[state=on]:border-amber-400'
          >
            <ChartBarIcon />
          </Toggle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className='overflow-hidden'>
        {showBarChart ? (
          <BarStyleChart data={data} configs={CHART_CONFIGS} />
        ) : (
          <LineStyleChart data={data} configs={CHART_CONFIGS} />
        )}
      </CardContent>
      <CardFooter>
        <div className='flex items-center justify-between w-full gap-3'>
          <Button variant='outline' size='icon'>
            <ChevronLeft />
          </Button>

          <span className='text-sm'>{`${startDate} - ${endDate}`}</span>

          <Button variant='outline' size='icon'>
            <ChevronRight />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
