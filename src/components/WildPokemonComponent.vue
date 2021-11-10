<template>
 <li class="selectable my-2" v-for="p in wildPokemon" :key="p.name" @click="setActivePokemon(p.name)">{{p.name}}</li>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import {pokemonService} from "../services/PokemonService"
export default {
  setup(){
    return {
      wildPokemon: computed(()=> AppState.wildPokemon),
      async setActivePokemon(name){
        try {
          await pokemonService.setActive(name)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
