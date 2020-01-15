<script>

export default {
  name: 'Header'
}

</script>

<template>
  <b-container fluid>
    <b-navbar>
      <b-nav-item href="#" class="logo">Neruda</b-nav-item>
      <b-navbar-nav class="ml-auto">
       <b-nav-form>
         <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
         <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
       </b-nav-form>
       <b-nav-item href="#">Logout</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </b-container>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Megrim&display=swap');

  li.logo {
    list-style:none;

  }

  li.logo a {
    font-family: 'Megrim', cursive;
    font-size: 55px;
    color: #130f40;
    text-decoration: none;
    text-shadow: 1px 6px #95afc0;
    text-transform: uppercase;
  }
</style>
