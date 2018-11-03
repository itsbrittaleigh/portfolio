<template>
  <div class="main-content">
    <h1
      class="tagline tagline--right tagline--project m-t-50"
      v-in-viewport.once
    >
      {{ project.name }}
    </h1>
    <component
      :is="project.slug"
      :project="project"
    ></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import _ from 'lodash';

import CitySideVentures from '../components/projects/CitySideVentures.vue';
import Cozilo from '../components/projects/Cozilo.vue';
import DesignerPortfolio from '../components/projects/DesignerPortfolio.vue';
import NovaRemedy from '../components/projects/NovaRemedy.vue';
import SidepitchAuthScreens from '../components/projects/SidepitchAuthScreens.vue';
import SidepitchMobileApplication from '../components/projects/SidepitchMobileApplication.vue';
import TusStar from '../components/projects/TusStar.vue';

export default {
  name: 'Project',
  props: ['title'],
  data() {
    return {
      project: {},
    };
  },
  components: {
    'city-side-ventures': CitySideVentures,
    cozilo: Cozilo,
    'designer-portfolio': DesignerPortfolio,
    'nova-remedy': NovaRemedy,
    'sidepitch-auth-screens': SidepitchAuthScreens,
    'sidepitch-mobile-application': SidepitchMobileApplication,
    tusstar: TusStar,
  },
  computed: {
    ...mapGetters([
      'projects',
    ]),
  },
  mounted() {
    this.project = _.find(this.projects, project => project.slug === this.title);
  },
};
</script>
