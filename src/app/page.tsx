'use client';

import Link from 'next/link';
import { FaUsers, FaHeadset } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-white">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://blog.nfon.com/hubfs/13.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">📞 Contact Center</h1>
        <p className="text-lg mb-6">Administra agentes y clientes en espera de manera eficiente.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/agents">
            <div className="flex flex-col items-center gap-3 bg-white/20 p-6 rounded-lg shadow-md hover:bg-white/30 transition-all cursor-pointer">
              <FaUsers className="text-blue-400 text-4xl" />
              <span className="text-xl font-medium">Ver Agentes</span>
            </div>
          </Link>

          <Link href="/clients">
            <div className="flex flex-col items-center gap-3 bg-white/20 p-6 rounded-lg shadow-md hover:bg-white/30 transition-all cursor-pointer">
              <FaHeadset className="text-green-400 text-4xl" />
              <span className="text-xl font-medium">Ver Clientes</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}


