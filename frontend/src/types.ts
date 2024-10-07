export interface Country {
  name: string;
  emoji: string;
  code: string;
  continent?: {
    name: string;
  };
}

export interface CountryListProps {
  countries: Country[];
}
