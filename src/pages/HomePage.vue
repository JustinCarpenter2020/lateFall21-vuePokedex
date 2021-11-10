<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 wild-height bg-danger">
        <ul>
         <WildPokemonComponent />
        </ul>
      </div>
      <div class="col-md-6">
       <ActivePokemonComponent />
      </div>
      <div class="col-md-2 my-3">
        <button class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#myPokemon">My pokemon</button>
      </div>
    </div>
    <OffCanvas />
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core"
import {wildPokemonService} from '../services/WildPokemonService'
import { logger } from "../utils/Logger"
import { pokemonService } from "../services/PokemonService"
export default {
  name: 'Home',
  setup(){
    onMounted(async ()=> {
      try {
        await wildPokemonService.getWildPokemon()
        await pokemonService.getMyPokemon()
      } catch (error) {
        logger.error(error)
      }
    })
    return{

    }
  }
}
</script>

<style scoped lang="scss">
.wild-height{
  height: 81vh;
  overflow-y: auto;
}
</style>
