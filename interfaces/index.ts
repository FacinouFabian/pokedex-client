// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

import { ParsedUrlQuery } from "querystring";

export interface PokemonParams extends ParsedUrlQuery {
  name: string;
}
