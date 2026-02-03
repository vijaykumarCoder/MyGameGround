import Link from 'next/link';

const quickLinks = [
  { href: '/about-us', label: 'About Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Gaming Portal. All rights reserved.
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Quick links">
            <span className="sr-only md:not-sr-only md:mr-2 md:inline text-gray-500 text-sm font-medium">
              Quick Links
            </span>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
