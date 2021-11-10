import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { pokiApi } from "./AxiosService"

class WildPokemonService{
async getWildPokemon(){
 const res =  await pokiApi.get('')
 logger.log(res.data.results)
  AppState.wildPokemon = res.data.results
}
}



export const wildPokemonService = new WildPokemonService()
