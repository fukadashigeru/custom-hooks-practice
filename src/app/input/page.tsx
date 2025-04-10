import { InputDemo } from '../../components/InputDemo';

export default function InputPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">useInputの例</h1>
      <div className="max-w-md mx-auto">
        <p className="mb-4">
          このデモでは、useInputフックを使用して、フォーム入力の状態管理を簡単に行います。
          以下の特徴があります：
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>inputPropsによるスプレッド構文の使用</li>
          <li>フォーム値の簡単な取得</li>
          <li>リセット機能</li>
          <li>型安全な実装</li>
        </ul>
        <InputDemo />
      </div>
    </main>
  );
}
