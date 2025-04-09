import { LocalStorageDemo } from '../../components/LocalStorageDemo';

export default function LocalStoragePage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">LocalStorageの例</h1>
      <div className="max-w-md mx-auto">
        <p className="mb-4">
          このデモでは、useLocalStorageフックを使用して、フォームの値をブラウザのLocalStorageに保存します。
          ページをリロードしても値が保持されます。
        </p>
        <LocalStorageDemo />
      </div>
    </main>
  );
} 
