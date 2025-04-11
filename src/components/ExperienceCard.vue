<template>
    <div class="card">
        <img :src="`/images/${experience.image}`" :alt="experience.name" />

        <div class="card_text">
            {{ experience.name }}
        </div>
    </div>
</template>
<script>
export default {
    props:{
        experience:{
            type: Object,
            required: true

        }
    }
}

</script>
