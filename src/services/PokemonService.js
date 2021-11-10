import { AppState } from "../AppState"
import Pokemon from "../Models/Pokemon"
import { logger } from "../utils/Logger"
import { bcwApi, pokiApi } from "./AxiosService"

class PokemonService {


  async setActive(name) {
    const res = await pokiApi.get(name)
    logger.log(res.data)
    AppState.activePokemon = new Pokemon(res.data)
  }


async getMyPokemon(){
  const res = await bcwApi.get()
  AppState.myPokemon = res.data.map(p => new Pokemon(p))
}
  async catchPokemon(){
    const res = await bcwApi.post('', AppState.activePokemon)
    logger.log(res.data)
    AppState.myPokemon.push(res.data)
  }

  async releasePokemon(){
    const found = AppState.myPokemon.find(p => p.name === AppState.activePokemon.name)
    await bcwApi.delete(found.id)
    this.getMyPokemon()
  }
}



export const pokemonService = new PokemonService()
