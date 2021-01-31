<template>
  <div>
    <h1 class="pb-2">
      Localització <icons :icon="['fas', 'globe-europe']" />
    </h1>
    <p>
      Vine a visitar-nos al nostre centre a Lleida.
    </p>

    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7093.831938476907!2d0.6152528620336667!3d41.621400160015604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a6e03e900493d7%3A0xb96c06a048fa8be5!2sEkke!5e0!3m2!1sca!2ses!4v1611915237328!5m2!1sca!2ses"
        width="1800"
        height="700"
        
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
/* export default {
  props: {
    name: {
      type: String,
      default: "OtraPagina",
    },
  },
}; */
 
</script>
<style>

  iframe {
    width: 1800px;
    min-height: auto; 
    max-width: 100%;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
     }
</style>