"use client";

import { useInput } from '../hooks/useInput';

export function InputDemo() {
  const name = useInput('');
  const email = useInput('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify({ name: name.value, email: email.value }, null, 2));
    name.reset();
    email.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">名前:</label>
        <input
          {...name.inputProps}
          className="w-full p-2 border rounded"
          placeholder="名前を入力してください"
        />
      </div>
      <div>
        <label className="block mb-2">メール:</label>
        {/* <input
          value={name.value}
          onChange={name.onChange}  // ここで使用
          className="..."
        /> */}
        {/* <input
          {...name.inputProps}  // value と onChange の両方を一度に渡す
          className="..."
        /> */}
        <input
          type="email"
          {...email.inputProps}
          className="w-full p-2 border rounded"
          placeholder="メールアドレスを入力してください"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          送信
        </button>
        <button
          type="button"
          onClick={() => {
            name.reset();
            email.reset();
          }}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          リセット
        </button>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded">
        <h3 className="font-semibold mb-2">現在の入力値:</h3>
        <p>名前: {name.value || '(未入力)'}</p>
        <p>メール: {email.value || '(未入力)'}</p>
      </div>
    </form>
  );
}
