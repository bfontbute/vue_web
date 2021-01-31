<template>
  <div id="home">
    <h1>Gym Fontbuté</h1>
    
    <Diapos />
    
    <p>
     <strong>GYM Fontbuté</strong> Ofereix tot tipus d'entenaments i esports. Així com entrenadors personals i sessions grupals de crossfit.
    </p>
    
  </div>
</template>

<script>
import Diapos from "../components/Diapos.vue";

export default {
  name: "Home",
  components: {
    Diapos,
  },
};
</script>