import { DebounceDemo } from '../../components/DebounceDemo';

export default function DebouncePage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">useDebounceの例</h1>
      <div className="max-w-md mx-auto">
        <p className="mb-4">
          このデモでは、useDebounceフックを使用して、入力値の変更を一定時間待ってから処理を行います。
          以下のような場面で役立ちます：
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>検索ボックスの入力</li>
          <li>APIリクエストの頻度制限</li>
          <li>パフォーマンスの最適化</li>
        </ul>
        <DebounceDemo />
      </div>
    </main>
  );
}
