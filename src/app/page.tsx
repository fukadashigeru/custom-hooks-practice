import Image from "next/image";
import { Counter } from '../components/Counter';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
        <Counter />
        <div className="space-y-4">
          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">カウンターの例</h2>
            <p className="mb-4">シンプルなカウンター機能を実装した例です。</p>
            <Link
              href="/counter"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              カウンターを見る
            </Link>
          </div>

          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">useInputの例</h2>
            <p className="mb-4">フォーム入力を簡単に管理するカスタムフックの例です。</p>
            <Link
              href="/input"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Inputデモを見る
            </Link>
          </div>

          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">LocalStorageの例</h2>
            <p className="mb-4">ブラウザのLocalStorageを使用してデータを永続化する例です。</p>
            <Link
              href="/local-storage"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              LocalStorageデモを見る
            </Link>
          </div>

          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">useFetchの例</h2>
            <p className="mb-4">データフェッチングを簡単に行うカスタムフックの例です。</p>
            <Link
              href="/fetch"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Fetchデモを見る
            </Link>
          </div>

          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">useFormの例</h2>
            <p className="mb-4">フォームの状態管理とバリデーションを行うカスタムフックの例です。</p>
            <Link
              href="/form"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Formデモを見る
            </Link>
          </div>

          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">useDebounceの例</h2>
            <p className="mb-4">入力値の変更を一定時間待ってから処理を行うカスタムフックの例です。</p>
            <Link
              href="/debounce"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Debounceデモを見る
            </Link>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
