import { FetchDemo } from '../../components/FetchDemo';

export default function FetchPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">useFetchの例</h1>
      <div className="max-w-md mx-auto">
        <p className="mb-4">
          このデモでは、useFetchフックを使用して、JSONPlaceholderからTodoデータを取得します。
          ローディング状態、エラーハンドリング、データ表示の例を示しています。
        </p>
        <FetchDemo />
      </div>
    </main>
  );
} 
