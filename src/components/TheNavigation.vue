<template>
  <div id="nav">
    <AppLink id="logo" to="/">Travel App</AppLink>
    <AppLink
  
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
      >
        {{ destination.name }}
</AppLink>
<AppLink :to="{name: 'protected'}">Dashboard</AppLink>
<AppLink to="https://theuselessweb.com" target="_blank" style="color: hotpink; font-weight: bold;">
  🌈✨ Take Me Somewhere Weird!
</AppLink>
  
  </div>
</template>
<script>
import sourceData from '@/data.json'
export default {
  data(){
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>

    