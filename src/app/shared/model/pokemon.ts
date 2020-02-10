export class Pokemon{
  base: PokemonBase;
  id: number;
  name: PokemonName;
  type: string[];
}

export class PokemonBase{
  Attack: number;
  Defense: number;
  HP: number;
  "Sp. Attack": number;
  "Sp. Defense": number;
  Speed: number;
}
export class PokemonName{
  chinese: number;
  english: number;
  french: number;
  japanese: number;
}
