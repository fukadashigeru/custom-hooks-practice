import { Counter } from '../../components/Counter';

export default function CounterPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">カウンターの例</h1>
      <Counter />
    </main>
  );
}
