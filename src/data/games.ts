export type Game = {
  title: string
  tag: string
  description: string
  image: string
  accent: 'gold' | 'pink' | 'violet'
}

export const games: Game[] = [
  {
    title: 'Ludaro',
    tag: 'TACTICAL BOARD MAYHEM',
    description: 'A chaotic board-run where every roll, card and encounter can change the run.',
    image: '/assets/a_highly_detailed_colorful_cartoon_game_ui_scene.png',
    accent: 'gold',
  },
  {
    title: 'Spiritbound',
    tag: 'CHARACTER COLLECTION',
    description: 'Build a team of weird, wonderful spirits and turn every encounter into a story.',
    image: '/assets/a_wide_colorful_cartoon_fantasy_illustration_with.png',
    accent: 'pink',
  },
  {
    title: 'The Next Run',
    tag: 'COMING SOON',
    description: 'New worlds, new rules and a fresh pile of dice. More chaos is on the way.',
    image: '/assets/ChatGPT Image Aug 24, 2026, 12_30_34 PM.png',
    accent: 'violet',
  },
]

export const spirits = [
  { name: 'Banana Gremlin', image: '/assets/Banana Gremlin.png', rarity: 'ODD', color: 'gold' },
  { name: 'Careful Caravaner', image: '/assets/Careful Caravaner.png', rarity: 'RARE', color: 'pink' },
  { name: 'Trihorn Jester', image: '/assets/Trihorn Jester.png', rarity: 'EPIC', color: 'violet' },
  { name: 'Pathfire Jester', image: '/assets/Pathfire Jester.png', rarity: 'MYTHIC', color: 'gold' },
  { name: 'Tiny Titan', image: '/assets/Tiny Titan.png', rarity: 'UNCOMMON', color: 'pink' },
]
