<template>
  <div class="container">
    <h1 class="pb-2">Afiliació <icons :icon="['fas', 'address-card']" /></h1>
    <p>
      Forma part del gimnàs lider de Lleida! Si vols sumar-te als més de
      <strong>1.000</strong> integrants de l'equip Fontbuté omple el formulari
      que podras trobar a recepció. Els socis compten amb accés
      <strong>il·limitat</strong> a les instal·lacions. Més de 900m2 de
      màquines, sales, piscina i pistes de pàdel.
    </p>
    <p>
      Amés cada soci compta amb una invitació mensual per una persona no
      afiliada. Convida als teus amics o familia a portar una vida sana!
    </p>

    <!-- Formulario para añadir personas -->

    <section class="form">
      <form action="" class="text-center">
        <input
          v-model="nom"
          @keyup.enter="crearPersona"
          type="text"
          class="form-control"
          placeholder="Nom"
        />
        <input
          v-model="edat"
          @keyup.enter="crearPersona"
          type="number"
          name="edat"
          placeholder="Edat"
          class="form-control"
        />

        <!-- Botón para añadir -->
        <input
          @click="crearPersona"
          type="button"
          value="Afegir"
          class="btn btn-success"
        />
      </form>
    </section>

    <!-- Tabla donde se muestran los datos -->
    <section class="data">
      <caption>
        Persones
      </caption>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nom</th>
            <th scope="col">Edat</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(persona, index) in persones" :key="persona.id">
            <td>{{ persona.id }}</td>
            <td>
              <span v-if="formActualizar && idActualizar == index">
                <!-- Formulario para actualizar -->
                <input
                  v-model="nomActualizar"
                  type="text"
                  class="form-control"
                />
              </span>
              <span v-else>
                <!-- Dato nombre -->
                {{ persona.nom }}
              </span>
            </td>
            <td>
              <span v-if="formActualizar && idActualizar == index">
                <!-- Formulario para actualizar -->
                <input
                  v-model="edatActualizar"
                  type="text"
                  class="form-control"
                />
              </span>
              <span v-else>
                <!-- Dato edad -->
                {{ persona.edat }}
              </span>
            </td>
            <td>
              <!-- Botón para guardar la información actualizada -->
              <span v-if="formActualizar && idActualizar == index">
                <button
                  @click="guardarActualizacion(index)"
                  class="btn btn-success"
                >
                  Guardar
                </button>
              </span>
              <span v-else>
                <!-- Botón para mostrar el formulario de actualizar -->
                <button
                  @click="verFormActualizar(index)"
                  class="btn btn-warning"
                >
                  Actualtizar
                </button>

                <!-- Botón para borrar -->
                <button @click="borrarPersona(index)" class="btn btn-danger">
                  Borrar
                </button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>




    <script>
export default {
  data() {
    return {
      // Input nombre
      nom: "",
      // Input edad
      edat: "",
      // Ver o no ver el formulario de actualizar
      formActualizar: false,
      // La posición de tu lista donde te gustaría actualizar
      idActualizar: -1,
      // Input nombre dentro del formulario de actualizar
      nomActualizar: "",
      // Input edad dentro del formulario de actualizar
      edatActualizar: "",
      // Lista de personas
      persones: [],
    };
  },
  methods: {
    crearPersona: function () {
      // Anyadimos a nuestra lista
      this.persones.push({
        id: +new Date(),
        nom: this.nom,
        edat: this.edat,
      });

      // Vaciamos el formulario de añadir
      this.nombre = "";
      this.edad = "";
    },
    verFormActualizar: function (persona_id) {
      // Antes de mostrar el formulario de actualizar, rellenamos sus campos
      this.idActualizar = persona_id;
      this.nomActualizar = this.personas[persona_id].nom;
      this.edatActualizar = this.personas[persona_id].edat;

      // Mostramos el formulario
      this.formActualizar = true;
    },
    borrarPersona: function (persona_id) {
      // Borramos de la lista
      this.personas.splice(persona_id, 1);
    },
    guardarActualizacion: function (persona_id) {
      // Ocultamos nuestro formulario de actualizar
      this.formActualizar = false;

      // Actualizamos los datos
      this.personas[persona_id].nombre = this.nomActualizar;
      this.personas[persona_id].edad = this.edatActualizar;
    },
  },
};
</script>