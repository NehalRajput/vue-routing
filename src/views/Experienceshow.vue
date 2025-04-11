<template>
  <div> 
    <section>
      <h1>{{ experience.name }}</h1>
      <img :src="`/images/${experience.image}`" :alt="experience.name">
      <p>{{ experience.description }}</p>
    </section>

    <div class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{ name: 'experience.show', params: { id: destination.id, experienceSlug: experience.slug } }"
        >
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'

export default {
  props: {
    id: { type: Number, required: true },
    experienceSlug: { type: String, required: true }
  },
  computed: {
    destination() {
      return sourceData.destinations.find(destination => destination.id === this.id)
    },
    experience() {
      return this.destination.experiences.find(experience => experience.slug === this.experienceSlug)
    }
  },
  components: {
    ExperienceCard
  }
}
</script>
