<template>
  <ul class="project-overview">
    <li class="project-overview__item hidden" v-in-viewport.once>
      <strong>Client: </strong>
      {{ project.client }}
    </li>
    <li class="project-overview__item hidden" v-in-viewport.once>
      <strong>Location: </strong>
      {{ project.location }}
    </li>
    <li class="project-overview__item hidden" v-in-viewport.once>
      <strong>Services: </strong>
      {{ project.services }}
    </li>
    <li class="project-overview__item hidden" v-in-viewport.once>
      <strong>Project date: </strong>
      {{ project.date }}
    </li>
    <li class="project-overview__item hidden" v-in-viewport.once>
      <strong>Project duration: </strong>
      {{ project.duration }}
    </li>
    <li class="project-overview__item hidden" v-in-viewport.once>
      <strong>Project URL: </strong>
      <a
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        :title="`${project.name} live site`"
      >
        {{ project.url }}
      </a>
    </li>
    <li
      v-if="project.github"
      class="project-overview__item hidden" v-in-viewport.once>
    >
      <strong>GitHub URL: </strong>
      <a
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        :title="`${project.name} code on GitHub`"
      >
        {{ project.github }}
      </a>
    </li>
    <li class="project-overview__item project-overview__item--full hidden" v-in-viewport.once>
      <strong>Project overview: </strong>
      {{ project.overview }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProjectOverview',
  props: ['project'],
  data() {
    return {};
  },
};
</script>
