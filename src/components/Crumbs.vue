<template>
  <Breadcrumb :style="{padding: '20px 20px', textAlign: 'left',background: '#fff'}">
    <BreadcrumbItem>{{crumbsText}}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {

      }
    },
    props: ['list'],
    computed: {
      ...mapGetters([
        'crumbsText'
      ])
    }
  }
</script>
