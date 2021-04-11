<template>
  <div>
      <button @click="submit">check</button>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        submit(){
            this.$toast('as')
        },
    }
}
</script>

<style>

</style>