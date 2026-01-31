'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { gamesData } from '@/data/gamesData';

export default function GameDetailPage() {
  const params = useParams();
  const router = useRouter();
  const gameId = params.id as string;
  const game = gamesData.find((g) => g.id === gameId);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Game Not Found</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  const suggestedGames = gamesData.filter((g) => g.id !== gameId).slice(0, 4);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Game Preview Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="relative w-full aspect-video max-w-4xl mx-auto cursor-pointer group"
                 onClick={handlePlayClick}>
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all">
                <div className="bg-white rounded-full p-4 md:p-6 shadow-xl transform group-hover:scale-110 transition-transform">
                  <svg
                    className="w-12 h-12 md:w-16 md:h-16 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {game.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                {game.description}
              </p>
            </div>
          </div>

          {/* Suggested Games Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Suggested Games</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {suggestedGames.map((suggestedGame) => (
                <Link
                  key={suggestedGame.id}
                  href={`/game/${suggestedGame.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative w-full aspect-square overflow-hidden">
                      <img
                        src={suggestedGame.thumbnail}
                        alt={suggestedGame.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                        {suggestedGame.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Game Iframe */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full"
            >
              <iframe
                src={game.gameUrl}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Close game"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
