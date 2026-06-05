export interface AppRoute {
  name: string;
  slug: string;
  category: 'calculator' | 'game';
  icon: string;
}

export const navigationRegistry: AppRoute[] = [
  { name: "Calculator Engine 1", slug: "calc-1", category: "calculator", icon: "📊" },
  { name: "Calculator Engine 2", slug: "calc-2", category: "calculator", icon: "📈" },
  { name: "Calculator Engine 3", slug: "calc-3", category: "calculator", icon: "📉" },
  { name: "Calculator Engine 4", slug: "calc-4", category: "calculator", icon: "🧮" },
  { name: "Calculator Engine 5", slug: "calc-5", category: "calculator", icon: "📅" },
  { name: "Calculator Engine 6", slug: "calc-6", category: "calculator", icon: "🔢" },
  { name: "Game Engine 1", slug: "game-1", category: "game", icon: "🕹️" },
  { name: "Game Engine 2", slug: "game-2", category: "game", icon: "🧩" },
  { name: "Game Engine 3", slug: "game-3", category: "game", icon: "🃏" },
  { name: "Game Engine 4", slug: "game-4", category: "game", icon: "🎲" },
  { name: "Game Engine 5", slug: "game-5", category: "game", icon: "🧠" }
];
