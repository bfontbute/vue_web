<template>
  <b-navbar toggleable="md" type="dark" variant="info" id="menu">
    <b-navbar-brand class="nav-link" to="/home"
      ><img src="../assets/logo.png" rel="logo"
    /></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-container>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!--
            <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
            <b-nav-item :to="{name: 'contacto'}">Contacto</b-nav-item>
           -->
          <b-nav-item class="nav-link" to="/horaris"
            >Horaris <icons :icon="['fas', 'calendar-alt']"
          /></b-nav-item>
          <b-nav-item class="nav-link" to="/nosaltres"
            >Nosaltres <icons :icon="['fas', 'users']"
          /></b-nav-item>
          <b-nav-item class="nav-link" to="/afiliacio"
            >Afiliació <icons :icon="['fas', 'address-card']"
          /></b-nav-item>
          <b-nav-item class="nav-link" to="/localitzacio"
            >Localització <icons :icon="['fas', 'globe-europe']"
          /></b-nav-item>
          <!--  <b-nav-item class="nav-link" to="/otrapagina">OtraPagina</b-nav-item>
          <b-nav-item class="nav-link" to="/about">About</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>


<script>
export default {};
</script>


<style scoped>
.router-link-exact-active,
.router-link-active {
  background-color: rgb(49, 49, 49, 0);
}
.bg-info {
  background-color: #465253 !important;
}
img {
  vertical-align: middle;
  border-style: none;
  max-width: 35%;
  min-width: 30%;
  max-height: 35%;
  min-height: 30%;
}
</style>