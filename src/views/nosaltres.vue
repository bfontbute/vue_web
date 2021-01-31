<template>
  <div>
    <h1 class="pb-2">Nosaltres <icons :icon="['fas', 'users']" /></h1>
    <p>
      <strong>Gym Fontbuté</strong> és una empresa fundada a <strong>Lleida</strong> el 2016. Ara mateix som més de 1000 socis a la <strong>comunitat esportista</strong> més gran del Segrià! Oferim <strong>cursos</strong> portats per monitors i entrenadors professionals per a tots els gustos. Des de zumba, cross-fit, body pump o defensa personal fins yoga o pilates. Disposem també d'una àmplia <strong>sala de màquines</strong> i una <strong>piscina climatitzada</strong> de tamany olímpic. Com a novetat hem integrat també en l'espai una pista reglamentària de <strong>pàdel</strong>.
    </p>

    <!-- <div aling-v="center"> -->
    <div class="container-md">
      <b-card-group columns>
        <div columns v-for="proyecto in proyectos" :key="proyecto.id">
          <Card2
            :autor="proyecto.autor"
            :srcimg="proyecto.srcimg"
            :alt="proyecto.alt"
            :titulo="proyecto.titulo"
            :texto="proyecto.texto"
            :url="proyecto.url"
          ></Card2>
        </div>
      </b-card-group>
    </div>

    <!--
    <b-container class="bv-example-row">
      <b-row aling-v="center">
      <b-col v-for="proyecto in proyectos" :key="proyecto.id">
        <Card2 :img-src="proyecto.imagen" :img-alt="proyecto.alt" :title="proyecto.titulo" :texto="proyecto.texto" :url="proyecto.url"></Card2> 
      </b-col>
     </b-row>
    </b-container>
-->
    <div>
      <b-embed
        type="iframe"
        aspect="16by9" 
        src="https://www.youtube.com/embed/e-QQ_CjXf0w"
        allowfullscreen
        gyroscope
      ></b-embed>
    </div>
  </div>
</template>

<script>
import Card2 from "../components/Card2.vue";
//(para utilizar en localhos)
//const lstProysJson = '/public/../proyectosWD2021.json';
//para utilizar en produccion
const lstProysJson = "../assets/dades.json";

export default {
  props: {
    name: {
      type: String,
      default: "nosaltres",
    },
  },
  components: {
    Card2,
  },
  data() {
    return {
      proyectos: [],
      githubPage: 1,
      page: 1,
      loading: false,
      perPage: 5,
    };
  },
  mounted() {
    this.fetchData();
  },
  /*
    computed: {
      showRepos() {
        let start = (this.page - 1) * this.perPage;
        let end = start + this.perPage;
        return this.repositories.slice(start, end);
      },
      lastPage() {
        let length = this.repositories.length;
        return length / this.perPage;
      }
    },*/
  methods: {
    async fetchData() {
      const res = await fetch(lstProysJson);
      const val = await res.json();
      this.proyectos = val;
      console.log(val);
    },
    /*
      fetchData() {
        this.loading = true;
        axios.get(lstProysJson + this.githubPage)
          .then(({data}) => {
            this.repositories = this.repositories.concat(data.items);
            this.loading = false;
          })
          .catch((err) => {
            throw err;
          })
      },
      prevPage() {
        this.page--;
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
      nextPage() {
        if (this.page == this.lastPage - 1) {
          this.githubPage++;
          this.fetchData();
        }
        this.page++;
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
      */
  },
};
</script>
 <style>
iframe {
  width: 100%;
  height: auto;
  min-width:560px ;
  min-height:315px;
}
</style>