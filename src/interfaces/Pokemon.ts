export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  weight: number;
  height: number;
  stats: Stat[];
  moves: Move[];
  forms: Ability[];
  abilities: Ability2[];
  order: number;
  past_types: any[];
  species: Ability;
  sprites: Sprites;
}

interface Move {
  move: Ability;
  version_group_details: Versiongroupdetail[];
}

interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: Ability;
  version_group: Ability;
}

interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Ability {
  name: string;
  url: string;
}
interface Type {
  slot: number;
  type: Ability;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
}

interface Other {
  dream_world: Dreamworld;
  home: Home;
  'official-artwork': Officialartwork;
}

interface Officialartwork {
  front_default: string;
}

interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface Dreamworld {
  front_default: string;
  front_female?: any;
}

export interface AbilitiesDescriptions {
  effect_changes: [];
  effect_entries: [
    {
      effect: string;
      language: Ability;
      short_effect: string;
    }
  ];
  flavor_text_entries: [
    {
      flavor_text: string;
      language: Ability;
      version_group: Ability;
    }
  ];
  name: string;
}

export const pokemonTypes = [
  { name: 'bug', color: '#7bcf00' },
  { name: 'dark', color: '#5a566a' },
  { name: 'dragon', color: '#0076ff' },
  { name: 'electric', color: '#ffde00' },
  { name: 'fairy', color: '#ff76ff' },
  { name: 'fighting', color: '#ff215b' },
  { name: 'fire', color: '#ff9900' },
  { name: 'flying', color: '#89bdff' },
  { name: 'ghost', color: '#4e6aff' },
  { name: 'grass', color: '#1cd80e' },
  { name: 'ground', color: '#ff6b0d' },
  { name: 'ice', color: '#2ee4c6' },
  { name: 'normal', color: '#9fa39d' },
  { name: 'poison', color: '#f149ff' },
  { name: 'psychic', color: '#ff6c64' },
  { name: 'rock', color: '#d8bc5a' },
  { name: 'steel', color: '#23a1bd' },
  { name: 'water', color: '#14a8ff' },
];
