<template>
  <div class="details">
    <div v-if="qurey.type == 'plantingGrass' || qurey.type == 'brand'">
      <h2>{{ articleName }}</h2>
      <div class="detail-info" v-html="articleInfo"></div>
    </div>
    <div v-if="qurey.type == 'apply'">
      <h2>{{ specstitle }}</h2>
      <div class="detail-info" v-html="specsValues"></div>
    </div>
  </div>
</template>

<script lang="ts">
import api from '@/api/index';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class Details extends Vue {
  // 品牌和种草详情的标题和内容
  private articleName: string = '';
  private articleInfo: string = '';
  // 试用详情的标题和内容
  private specstitle: string = '';
  private specsValues: string = '';
  private qurey: object = {};
  public mounted() {
    const qurey = this.$route.query;
    this.qurey = qurey;
    if (qurey.id && qurey.type) {
      if (qurey.type === 'plantingGrass' || qurey.type === 'brand') {
        this.getDetail(qurey.id);
      } else if (qurey.type === 'apply') {
        this.getApplyDetail(qurey.id);
      } else {
        this.$toast('页面访问缺少参数，稍后再试～');
      }
    } else {
      this.$toast('页面访问缺少参数，稍后再试～');
    }
  }
  /**
   * getDetail 获取品牌和种草详情
   * @param {[any]}
   */
  public async getDetail(id: any) {
    const { success, code, data, message } = await api.details.getArticleDetails({ id });
    if (success && code === '200') {
      this.articleName = data.articleName;
      this.articleInfo = data.articleInfo;
    } else {
      this.$toast(message);
    }
  }
  /**
   * getApplyDetail 获取试用详情
   *  @param {[any]}
   */
  public async getApplyDetail(id: any) {
    const { success, code, data, message } = await api.details.getApplyDetails({ id });
    if (success && code === '200') {
      this.specstitle = data.title;
      this.specsValues = data.specsValues;
    } else {
      this.$toast(message);
    }
  }
}
</script>

<style lang="scss" scoped>
.details {
  padding: 20px 0px;
  background: #ffffff;
  h2 {
    // text-align: center;
    font-weight: normal;
    margin-left: 20px;
  }
  .detail-info {
    padding: 20px;
  }
}
</style>