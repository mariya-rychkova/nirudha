<template>
  <b-container fluid class="global-container">
  <b-row align-h="center">
    <b-col class="mindmap-prev">
      <b-card-group columns>
        <b-card
          v-for="mindmap in mindmaps"
          v-bind:key="mindmap.id"
          v-bind:title="mindmap.title"
          v-bind:img-src="mindmap.imageURL"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            {{ mindmap.description }}
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapState({
      mindmaps: 'mindmaps'
    })
  }
}
</script>

<style media="screen">
  .global-container {
    margin: 0 50px;
  }
  .mindmap-prev {

  }
</style>
