export type Game = {
  title: string
  tag: string
  description: string
  image: string
  link:string
  accent: 'gold' | 'pink' | 'violet'
}

export const games: Game[] = [
  {
    title: 'Ludaro',
    tag: 'TACTICAL BOARD MAYHEM',
    description: 'A chaotic board-run where every roll, card and encounter can change the run.',
    image: '/assets/a_highly_detailed_colorful_cartoon_game_ui_scene.png',
    accent: 'gold',
    link: 'https://play.google.com/store/apps/details?id=com.evolxgames.ludaro&pcampaignid=web_share',
  },
  {
    title: 'MergeMons',
    tag: '',
    description: 'Discover magical creatures, merge and evolve them into powerful companions, and embark on an exciting adventure.',
    image: '/assets/banner3.png',
    accent: 'violet',
    link: '',
  },
   {
    title: 'Merge Flow Stories',
    tag: 'MERGE PUZZLE ADVENTURE',
    description: 'Merge shapes, solve puzzles, choose your path, and uncover a magical story adventure.',
    image: '/assets/a_wide_colorful_cartoon_fantasy_illustration_with.png',
    accent: 'pink',
    link: 'https://play.google.com/store/apps/details?id=com.evolxgames.mergeflowstory&pcampaignid=web_share',
  },
]

export const spirits = [
  { name: 'Banana Gremlin', image: '/assets/Banana Gremlin.png', rarity: 'ODD', color: 'gold' },
  { name: 'Careful Caravaner', image: '/assets/Careful Caravaner.png', rarity: 'RARE', color: 'pink' },
  { name: 'Trihorn Jester', image: '/assets/Trihorn Jester.png', rarity: 'EPIC', color: 'violet' },
  { name: 'Pathfire Jester', image: '/assets/Pathfire Jester.png', rarity: 'MYTHIC', color: 'gold' },
  { name: 'Tiny Titan', image: '/assets/Tiny Titan.png', rarity: 'UNCOMMON', color: 'pink' },
]
