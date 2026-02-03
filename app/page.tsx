import Link from 'next/link';
import { gamesData } from '@/data/gamesData';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
      YOUR GAME GROUND ALWAYS ON
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {gamesData.map((game) => (
          <Link
            key={game.id}
            href={`/game/${game.id}`}
            className="group"
          >
            <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 md:p-4">
                <h2 className="text-sm md:text-base font-semibold text-gray-900 line-clamp-2">
                  {game.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
