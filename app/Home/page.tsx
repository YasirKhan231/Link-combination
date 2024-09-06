import Link from 'next/link';

export default function Home () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl mb-8">My Linktree</h1>
      <div className="space-y-4">
        <Link href="https://github.com/YasirKhan231">
          <a className="px-4 py-2 bg-blue-500 text-white rounded-lg">GitHub</a>
        </Link>
        <Link href="https://x.com/yasir_juned">
          <a className="px-4 py-2 bg-blue-400 text-white rounded-lg">Twitter</a>
        </Link>
        <Link href="https://www.linkedin.com/in/yasir-khan-397989234/">
          <a className="px-4 py-2 bg-blue-700 text-white rounded-lg">LinkedIn</a>
        </Link>
        <Link href="">
          <a className="px-4 py-2 bg-yellow-500 text-white rounded-lg">LeetCode</a>
        </Link>
        <Link href="#">
          <a className="px-4 py-2 bg-gray-500 text-white rounded-lg">Other Platform</a>
        </Link>
      </div>
    </div>
  );
}
