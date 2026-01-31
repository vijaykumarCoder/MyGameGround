import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center font-bold text-xl">
              MG
            </div>
            <span className="text-xl font-bold">My Game Ground</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
