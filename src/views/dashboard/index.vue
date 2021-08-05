<template>
    <div class="dashboard-container">
        <div class="dashboard-text">name: {{ name }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api/test'
export default {
    name: 'Dashboard',
    created() {
        this.fetchData()
    },
    computed: {
        ...mapGetters([
            'name'
        ])
    },
    methods: {
        fetchData() {
            api.test().then(response => {
                console.log("---------",response)
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
