<template>
  <div>
    <!-- header -->
    <v-header :seller="seller"></v-header>
    <!-- main-content -->
    <div class="tab-wrap">
      <div class="tab-item">
         <router-link v-bind:to="'/goods'"> 商品</router-link>
      </div>
      <div class="tab-item">
        <router-link v-bind:to="'/ratings'"> 评价</router-link>
      </div>
      <div class="tab-item">
        <router-link v-bind:to="'/ratings'"> 商家</router-link>
      </div>
    </div>
    <!-- active -->
    <keep-active>
       <router-view :seller="seller"></router-view>
    </keep-active>
  </div>
</template>
<script>
import header from './components/header/header.vue'
import {urlParse} from 'common/js/util'
import data from 'common/json.data.json'
export default {
  data () {
    return {
      seller: {},
      id : (() => {
        let queryParam = urlParse();
        return queryParam
      
      })()
    }
  },
  created() {
    this.seller = data.seller
  },
  components: {
    'v-header': header
  }
}
</script>
<style  lang="less">
  .tab {
    display: flex;
    width:100%;
    height:40px;
    line-height:40px;
  }
</style>

