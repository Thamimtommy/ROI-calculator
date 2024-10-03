import './styles/globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ROI Calculator',
  description: 'Calculate your Return on Investment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen flex flex-col`}>
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image
                src="https://cdn.prod.website-files.com/648b3fb5ff20b9eb641b8ea2/64fbb4c435e8b272d44ae0db_Logo.svg"
                alt="mathingRight Logo"
                width={180}
                height={40}
                priority
              />
            </div>
            <nav>
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</a></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium border border-blue-600 hover:bg-blue-50 transition-colors duration-200">
                Sign Up
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                Calculate ROI
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow container mx-auto px-4 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            <p>&copy; 2024 mathingRight, Inc. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}