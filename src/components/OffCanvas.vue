<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="myPokemon" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">My Pokemon</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body container-fluid">
    <div class="row">
      <div class="col-12" v-for="p in myPokemon" :key="p.id">
        <img class="img-fluid rounded" :src="p.img" alt="">
        <p>{{p.name}}</p>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  setup(){
    return {
      myPokemon: computed(() => AppState.myPokemon)
    }
  }
}
</script>


<style lang="scss" scoped>
.rounded{
  height: 200px;
}
</style>
