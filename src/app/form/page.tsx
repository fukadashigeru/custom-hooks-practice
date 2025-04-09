import { FormDemo } from '../../components/FormDemo';

export default function FormPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">useFormの例</h1>
      <div className="max-w-md mx-auto">
        <p className="mb-4">
          このデモでは、useFormフックを使用して、フォームの状態管理とバリデーションを行います。
          以下の機能が含まれています：
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>フォームの状態管理</li>
          <li>バリデーション</li>
          <li>エラーメッセージの表示</li>
          <li>フィールドのタッチ状態の管理</li>
        </ul>
        <FormDemo />
      </div>
    </main>
  );
} 
