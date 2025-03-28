import { FlushChart } from '@/shared/components/flush-chart';

export function MainPage() {
  const chartData = [
    { poop: 0, pee: 4, label: 'Mon', day: 22, month: 3, year: 2025 },
    { poop: 0, pee: 6, label: 'Tue', day: 23, month: 3, year: 2025 },
    { poop: 1, pee: 7, label: 'Wed', day: 24, month: 3, year: 2025 },
    { poop: 0, pee: 10, label: 'Thu', day: 25, month: 3, year: 2025 },
    { poop: 2, pee: 9, label: 'Fri', day: 26, month: 3, year: 2025 },
    { poop: 1, pee: 4, label: 'Sat', day: 27, month: 3, year: 2025 },
    { poop: 2, pee: 4, label: 'Sun', day: 28, month: 3, year: 2025 }
  ];
  return (
    <div>
      <FlushChart data={chartData} />
    </div>
  );
}
