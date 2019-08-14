<template>
  <div class="home">
    主页
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'vant';
import 'vant/lib/button/style';

@Component({
  components: {
    [Button.name]: Button,
  },
})
export default class Home extends Vue {}
</script>
