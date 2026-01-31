export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailheader: string;
  gameUrl: string;
}

export const gamesData: Game[] = [
  {
    id: '1',
    title: 'Liquid Sort - Tube Puzzle Game',
    description: 'Embark on an epic journey through the cosmos in this thrilling space adventure game. Navigate through asteroid fields, battle alien invaders, and explore distant planets.',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fliquid-sort%2Ffeatured_img%2Ffeatured_img-1724136427719.jpg&w=640&q=75',
    thumbnailheader: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fliquid-sort%2Ffeatured_img%2Ffeatured_img-1724136427719.jpg&w=640&q=75',
    gameUrl: 'https://www.punogames.com/games/liquid-sort',
  },
  {
    id: '2',
    title: 'Bubble Shooter - Pop Blast',
    description: 'Experience high-speed racing action with stunning graphics and realistic physics. Compete against the best drivers and become a racing legend.',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fbubble-shooter%2Ffeatured_img%2Ffeatured_img-1723624280706.jpg&w=640&q=100',
    thumbnailheader: 'https://play-lh.googleusercontent.com/pqjLxXgTrZFNFuvgD5vCujkHhcVFH3bOPmc5i49htdoAmOsiBegwNmOnRhjUaT5jSw',
    gameUrl: 'https://www.punogames.com/games/bubble-shooter',
  },
  {
    id: '3',
    title: 'Carnival Ducks - Shooting Game',
    description: 'Challenge your mind with hundreds of brain-teasing puzzles. From simple jigsaws to complex logic puzzles, test your problem-solving skills.',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fcarnival-ducks%2Ffeatured_img%2Ffeatured_img-1724226031798.jpg&w=640&q=75',
    thumbnailheader: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fcarnival-ducks%2Ffeatured_img%2Ffeatured_img-1724226031798.jpg&w=640&q=75',
    gameUrl: 'src="https://www.punogames.com/games/carnival-ducks"',
  },
  {
    id: '4',
    title: 'Line Dot Puzzle',
    description: 'Fight for survival in a post-apocalyptic world overrun by zombies. Gather resources, build defenses, and survive the undead hordes.',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lcJ_OcP6Jgr0XV-enaHT5fTOx_Vuo5fIFQ&s',
    thumbnailheader: 'https://raw.githubusercontent.com/jayminSorathiya/eternal-assets/refs/heads/main/LineDotPuzzle.jpg',
    gameUrl: 'https://api.eternalgames.io/games/f6db2adf-baf4-40d1-8f5e-51379ee5c40b/LineDot_webGL_1/index.html',
  },
  {
    id: '5',
    title: 'ColorBump - Addictive Color Matching Game',
    description: 'Enter a magical realm filled with dragons, wizards, and ancient treasures. Complete quests, level up your character, and save the kingdom.',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fcolor-bump%2Ffeatured_img%2Ffeatured_img-1724226064115.jpg&w=640&q=75',
    thumbnailheader: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fcolor-bump%2Ffeatured_img%2Ffeatured_img-1724226064115.jpg&w=640&q=75',
    gameUrl: 'https://www.punogames.com/games/color-bump',
  },
  {
    id: '6',
    title: 'Pool 8 Ball - Ultimate Online Billiards Game',
    description: 'Compete in various sports including football, basketball, and tennis. Master different game modes and become a sports champion.',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fpool-8-ball%2Ffeatured_img%2Ffeatured_img-1723894000837.jpg&w=640&q=75',
    thumbnailheader: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fpool-8-ball%2Ffeatured_img%2Ffeatured_img-1723894000837.jpg&w=640&q=75',
    gameUrl: 'https://www.punogames.com/games/pool-8-ball',
  }
];
