import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import type { Metadata } from 'next';
import './globals.css';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Contact Center',
  description: 'Administración de agentes y clientes en espera',
  icons: {
    icon: "./favicon.ico",
  },
};

//Barra de navegación

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">📞 Contact Center</h1>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-black"
          >
            <FaHome className="text-lg" />
            <span>Inicio</span>
          </Link>
        </header>
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}



