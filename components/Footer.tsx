import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Gaming Portal. All rights reserved.
          </div>
          <nav className="flex space-x-6">
            <Link 
              href="/about" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              About
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
