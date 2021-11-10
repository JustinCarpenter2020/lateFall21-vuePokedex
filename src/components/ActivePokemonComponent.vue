<template>

    <div class="card" style="width: 18rem;" v-if="activePokemon.name">
  <img :src="activePokemon.img" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{activePokemon.name}}</h5>
    <p class="card-text">{{activePokemon.weight}}</p>
    <button class="btn btn-success" v-if="!myPokemon"    @click="catchPokemon">CATCH EM</button>
    <button class="btn btn-danger" v-else @click="release">RELEASE</button>
  </div>
</div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { pokemonService } from "../services/PokemonService"
import Pop from "../utils/Pop"
export default {
  setup(){
    return {
      activePokemon: computed(() => AppState.activePokemon),
      myPokemon: computed(() => AppState.myPokemon.find(p => p.name === AppState.activePokemon.name)),
      async catchPokemon(){
        try {
          await pokemonService.catchPokemon()
          Pop.toast("you caught " + AppState.activePokemon.name, "success")
        } catch (error) {
          logger.error(error)
        }
      },
      async release(){
        if(await Pop.confirm("ARE YOU SURE YOU WANNA RELEASE " + AppState.activePokemon.name)){
          await pokemonService.releasePokemon()
        }

      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
