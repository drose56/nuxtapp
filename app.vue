<template>
  <div>
    <CorgiGallery :images="images"/>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const { data: images } = await useAsyncData('images', async () => client.from('corgis').select(), { transform: result => result.data})
</script>