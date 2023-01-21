<template>
  <div>
    <HomeHeroBanner />
    <HomeHeroText hero-text="Jeune homme authentique à la recherche de nouvelles aventures, Valentin à votre service!" />
    <HomeTextImgGrid
      title="Qui suis-je ?"
      :main-text="`Je voyage à travers le monde depuis plusieurs années en rédigeant vos contenus web. L’ouverture d’esprit,
      le respect de soi et de ce (et ceux) qui nous entoure sont des qualités que je défends et qui me tiennent à cœur.\n\r
      Mes valeurs ? Partage, professionnalisme et respect.`"
      image="home/cliffs.jpg"
    />
    <HomeTextImgGrid
      title="Avez-vous le bon profil ?"
      :main-text="`Si vous êtes en mission pour faire bouger un peu les choses, vous êtes au bon endroit ! Donc par ici les
      startups aux idées révolutionnaires, les petites entreprises respectueuses de leur environnement et les voyageurs qui
      partagent leurs aventures et participent à l’éveil des consciences.`"
      image="home/singer.jpg"
      :reversed="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
