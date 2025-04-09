"use client";

import { useCounter } from '../hooks/useCounter';

export function Counter() {
  const { count, increment, decrement, reset } = useCounter(0, 1);

  return (
    <div className="p-4">
      <p className="text-xl mb-4">カウント: {count}</p>
      <div className="space-x-2">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          増加
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          減少
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          リセット
        </button>
      </div>
    </div>
  );
} 
