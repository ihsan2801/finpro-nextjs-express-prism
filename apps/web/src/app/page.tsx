import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* Description Section */}
      <section className="text-center mb-8">
        <p className="text-lg font-medium mb-4">
          Get started by editing&nbsp;
          <code className="px-2 py-1 bg-gray-200 rounded-md text-sm font-mono">
            src/app/page.tsx
          </code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-blue-600 hover:underline"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
              className="inline-block"
            />
          </a>
        </div>
      </section>

      {/* Center Logo Section */}
      <section className="mb-12">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
          className="mx-auto"
        />
      </section>

      {/* Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="block p-6 border rounded-lg shadow-sm bg-white hover:shadow-md hover:bg-gray-50 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-xl font-semibold mb-2">
            Docs <span>-&gt;</span>
          </h2>
          <p className="text-sm text-gray-600">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="block p-6 border rounded-lg shadow-sm bg-white hover:shadow-md hover:bg-gray-50 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-xl font-semibold mb-2">
            Learn <span>-&gt;</span>
          </h2>
          <p className="text-sm text-gray-600">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="block p-6 border rounded-lg shadow-sm bg-white hover:shadow-md hover:bg-gray-50 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-xl font-semibold mb-2">
            Templates <span>-&gt;</span>
          </h2>
          <p className="text-sm text-gray-600">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="block p-6 border rounded-lg shadow-sm bg-white hover:shadow-md hover:bg-gray-50 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-xl font-semibold mb-2">
            Deploy <span>-&gt;</span>
          </h2>
          <p className="text-sm text-gray-600">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </section>
    </main>
  );
}
