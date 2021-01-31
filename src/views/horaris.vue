<template>
  <b-container>
    <div class="horaris">
      <h1>Horaris <icons :icon="['fas', 'calendar-alt']" /></h1>
      <!-- <p>
        Esta web es un <strong>ejemplo</strong> de la asignatura de Web Dinámica
        del
        <b-link href="http://www.graudissenydigitalitec.udl.cat/"
          >Grado Diseño Digital y Tecnologías Creativas</b-link
        >
        de la
        <b-link href="http://www.udl.cat/">Universitat de Lleida</b-link>.
      </p>
      <p>
        Consulta
        <b-link href="https://www.instagram.com/creartive.lleida/"
          >Instagram</b-link
        >
        para ver más información del grupo de alumnos.
      </p> -->
      <h2>___________________________________________</h2>
    </div>

    <div class="mt-5">
      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <b-row>
        <b-col cols="6" md="4" class="borde-negre"><strong>Dies</strong></b-col>
        <b-col cols="6" md="4" class="borde-negre"><strong>Matí</strong></b-col>
        <b-col cols="6" md="4" class="borde-negre"
          ><strong>Tarda</strong></b-col
        >
      </b-row>

      <b-row>
        <b-col cols="6" md="4" class="borde-negre"
          ><strong>Dilluns</strong></b-col
        >
        <b-col cols="6" md="4" class="borde-negre">9:00 - 14:00</b-col>
        <b-col cols="6" md="4" class="borde-negre">16:00 - 20:00</b-col>
      </b-row>
      <b-row>
        <b-col cols="6" md="4" class="borde-negre"
          ><strong>Dimarts</strong></b-col
        >
        <b-col cols="6" md="4" class="borde-negre">9:00 - 14:00</b-col>
        <b-col cols="6" md="4" class="borde-negre">16:00 - 20:00</b-col>
      </b-row>
      <b-row>
        <b-col cols="6" md="4" class="borde-negre"
          ><strong>Dimecres</strong></b-col
        >
        <b-col cols="6" md="4" class="borde-negre">9:00 - 14:00</b-col>
        <b-col cols="6" md="4" class="borde-negre">16:00 - 20:00</b-col>
      </b-row>
      <b-row>
        <b-col cols="6" md="4" class="borde-negre"
          ><strong>Dijous</strong></b-col
        >
        <b-col cols="6" md="4" class="borde-negre">9:00 - 14:00</b-col>
        <b-col cols="6" md="4" class="borde-negre">16:00 - 20:00</b-col>
      </b-row>
      <b-row>
        <b-col cols="6" md="4" class="borde-negre"
          ><strong>Divendres</strong></b-col
        >
        <b-col cols="6" md="4" class="borde-negre">9:00 - 14:00</b-col>
        <b-col cols="6" md="4" class="borde-negre">16:00 - 20:00</b-col>
      </b-row>
      <b-row>
        <b-col cols="6" md="4" class="borde-negre"
          ><strong>Dissabte</strong></b-col
        >
        <b-col cols="6" md="4" class="borde-negre">9:00 - 14:00</b-col>
        <b-col cols="6" md="4" class="borde-negre">15:00 - 21:00</b-col>
      </b-row>
      <b-row align-h="around">
        <b-col cols="6" md="4" class="borde-negre"
          ><strong>Diumenge</strong></b-col
        >
        <b-col cols="6" md="4" class="borde-negre">Tancat</b-col>
        <b-col cols="6" md="4" class="borde-negre">Tancat</b-col>
      </b-row>
    </div>

    <div class="mt-5 mb-5">
      <h2>___________________________________________</h2>
    </div>

    <div class="mt-5 mb-5">
      <p>
        Aquesta pàgina mostra els horaris vigents. L'entrada serà valida
        mostrant el carnet de soci a recepció o el ticket corresponent. Les
        instal·lacions han estat adaptades complint amb la normativa sanitaria
        vigent i respectant els protocols <strong>Covid</strong>.
      </p>
      <P> Us desitgem un feliç entrenament.</P>

      <!-- <b-link
         href="https://bootstrap-vue.org/docs/components/layout#responsive-classes"
        >Enlace a la web de boostra vue con la explicación del grid
        responsive</b-link> -->
    </div>
  </b-container>
</template>


<script>
export default {
  name: "about",
};
</script>

<style scoped>
.borde-negre {
  border: 2px solid rgb(0, 0, 0, 0);
}
.borde-azul {
  border: 1px solid blue;
}
</style>