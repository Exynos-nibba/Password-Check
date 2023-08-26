<template>
    <div>
    </div>
</template>

<style>
.flag-text {
    margin-right: 5px;
}
</style>

<script>
export default {
  name: 'LanguagesButtons',
  methods: {
    updateLocal (local) {
      this.$store.commit('EDIT_LOCAL', local)
    }
  }
}
</script>
