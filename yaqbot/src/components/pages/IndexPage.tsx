import { Link } from 'react-router-dom';
import AnimatedContent from '../react-bits/AnimatedContent';
import Silk from '../react-bits/Silk';

export const IndexPage = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Fondo animado Silk - Cubre toda la pantalla */}
        <div className="absolute inset-0 w-full min-h-[100vh]">
          <Silk speed={5} scale={2} color="#0c5226" noiseIntensity={1.5} rotation={0} />
        </div>

        {/* Card con efecto glassmorphism en el centro */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="backdrop-blur-xs bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16 max-w-2xl mx-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
              Bienvenido a YAQBOT
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-center mb-8">
              Tu plataforma integral para el cuidado de plantas. Compra, monitorea y comparte con la
              comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="login"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Comenzar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
