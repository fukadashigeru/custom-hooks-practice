"use client";

import { useLocalStorage } from '../hooks/useLocalStorage';

export function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('name', '');
  const [age, setAge] = useLocalStorage('age', 0);

  return (
    <div className="p-4 space-y-4">
      <div>
        <label className="block mb-2">名前:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-2">年齢:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mt-4">
        <p>保存された値:</p>
        <p>名前: {name}</p>
        <p>年齢: {age}</p>
      </div>
    </div>
  );
} 
