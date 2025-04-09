"use client";

import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export function DebounceDemo() {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-2">検索キーワード:</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="入力してください..."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">リアルタイム入力値:</h3>
          <p className="text-gray-600">{inputValue || '入力なし'}</p>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">デバウンス後の値:</h3>
          <p className="text-gray-600">{debouncedValue || '入力なし'}</p>
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded">
        <p className="text-sm text-gray-600">
          デバウンスの効果:
          <br />
          - 入力が停止してから500ミリ秒後に値が更新されます
          <br />
          - 連続した入力では、最後の入力から500ミリ秒後にのみ値が更新されます
        </p>
      </div>
    </div>
  );
} 
