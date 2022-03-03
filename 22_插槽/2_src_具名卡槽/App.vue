<template>
  <div class="container">
    <Category title="美食">
      <img src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
      alt="" slot="center">
      <a slot="footer" href="https://www.alibaba.com" target="_blank">阿里巴巴</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
      <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.tencent.com" target="_blank">腾讯科技</a>
        <a href="https://www.bytedance.com" target="_blank">字节跳动</a>
      </div>
    </Category>

    <Category title="电影" :listData="films">
      <video slot="center" controls src="https://cdn.videvo.net/videvo_files/video/premium/video0229/large_watermarked/07_usa_day_4_360_lob_couple_preview.mp4"></video>
      <template v-slot:footer>
        <div class="foot" >
          <a href="https://www.bilibili.com" target="_blank">哔哩哔哩</a>
          <a href="https://www.baidu.com" target="_blank">百度技术</a>
          <a href="https://www.shopee.com" target="_blank">Shopee</a>
        </div> 
        <h4>欢迎点击观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category'
  export default {
    name:"App",
    components:{Category},
    data() {
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《四海》']
      }
    },
  }
</script>

<style lang="css">
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }

  img{
    width: 100%;
  }

  video{
    width: 100%;
  }

  h4{
    text-align: center;
  }
</style>