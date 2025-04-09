"use client";

import { useFetch } from '../hooks/useFetch';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export function FetchDemo() {
  const { data, loading, error } = useFetch<Todo[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );

  if (loading) {
    return <div className="p-4">読み込み中...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        エラーが発生しました: {error.message}
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Todoリスト</h2>
      <ul className="space-y-2">
        {data?.slice(0, 5).map((todo) => (
          <li
            key={todo.id}
            className={`p-2 border rounded ${
              todo.completed ? 'bg-green-50' : 'bg-white'
            }`}
          >
            <span className={todo.completed ? 'line-through' : ''}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
} 
