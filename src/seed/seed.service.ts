import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    const response = data.results.map((pokemon) => {
      const name = pokemon.name;
      const no: number = +pokemon.url.split('/').at(-2);

      return { name, no };
    });

    return response;
  }
}
