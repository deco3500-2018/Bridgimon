<template>
  <div class="page-food-pics">
      <div class="card-food" v-for="(card,index) in sample_data[id].images" :key="index">
        <div class="food-pic">
          <img :src='card' @click="$emit('expandImage', card)">
        </div>
      </div>
  </div>
</template>



<script>
export default {
    name: "PhotoGallery",
    props: ['id'],
    data: () => ({
      expandImage: null,
      sample_data: [
        {
          id:0,
          name: "Dumplings",
          images: [
            "https://www.reluctantgourmet.com/wp-content/uploads/2010/09/d0781aab6107ab09663a5b35f9583041.jpg",
            "https://omnivorescookbook.com/wp-content/uploads/2015/02/1502_How-to-Make-Chinese-Dumplings-From-Scratch_002.jpg",
            "http://www.dinnerwithjulie.com/wp-content/uploads/2017/01/Dumplings-potstickers-2-800x1200.jpg",
            "http://i0.wp.com/www.foodrepublic.com/wp-content/uploads/2016/09/dumplings_anchor.jpg?resize=700%2C467"
          ]
        },

        {
          id:1,
          name: "Glutinous Rice Cake",
          images: [

            "https://previews.123rf.com/images/kenishirotie/kenishirotie1802/kenishirotie180200205/96198278-nian-gao-or-chinese-glutinous-rice-cake.jpg",
            "http://www.tastehongkong.com/wp/2014/sticky-rice-cake.jpg",
            "http://jeanetteshealthyliving.com/wp-content/uploads/2018/02/Jujube-Date-Sticky-Rice-Cake-5.jpg",
            "http://3.bp.blogspot.com/-gE8D01U88CU/UR0l8Z-KtEI/AAAAAAAAXnU/DcDOxceVgpc/s1600/Sticky+Rice+Cake+-+Nian+Gao+for+Chinese+New+Year.jpg",
            "https://yestocooking.files.wordpress.com/2014/01/dsc_2921-copy.jpg"

          ]
        },

        {
          id:2,
          name: "Fish",
          images: [
            "https://media1.popsugar-assets.com/files/2013/02/06/2/192/1922195/5b51e17e12ee9b39_chinese-steamed-fish-close.preview.jpg",
            "http://www.sheridanrogers.com.au/wp-content/uploads/2011/02/Steamed-whole-fish-Chinese-style.jpg",
            "https://www.indoindians.com/wp-content/uploads/2017/01/fishes.jpg",
            "https://thewoksoflife.com/wp-content/uploads/2016/01/pan-fried-fish-3.jpg",
            "https://thewoksoflife.com/wp-content/uploads/2013/09/DSC_0907.jpg"

          ]
        },
        {
          id:3,
          name: "Sweet Rice Ball",
          images: [
            "https://www.kcet.org/sites/kl/files/atoms/article_atoms/www.kcet.org/living/food/image/assets/2909170208_e1bcc1a8dd_o.jpg",
            "https://www.rotinrice.com/wp-content/uploads/2012/12/TangYuan-1.jpg",
            "https://cdn.instructables.com/FQ4/N4KT/HH11RYZ9/FQ4N4KTHH11RYZ9.LARGE.jpg",
            "https://previews.123rf.com/images/dolphfyn/dolphfyn1407/dolphfyn140700047/30448388-traditional-chinese-sweet-rice-ball.jpg",
            "https://previews.123rf.com/images/dolphfyn/dolphfyn1403/dolphfyn140300024/26373414-traditional-chinese-sweet-rice-ball.jpg"



          ]
        },
        {
          id:4,
          name: "Lion Dance",
          images: [
            "https://scontent.fbne3-1.fna.fbcdn.net/v/t1.0-9/16473765_1243866305648604_4464656860211956181_n.jpg?_nc_cat=104&oh=c2f8258004031ae46a095df9d4d8573e&oe=5C549F1C",
            "https://mustsharenews.com/wp-content/uploads/2018/02/Lion-4-e1518503872694.jpg",
            "http://www.bodhimeditationvan.org/wp-content/uploads/2017/01/lion-dance.jpg",
            "https://goldenjadephoto.files.wordpress.com/2013/10/jing-wo-lion-dance-02-20131012-dsc_93991.jpg?w=600&h=599",
            "https://www.davisenterprise.com/files/2016/01/ArboretumLionDanceW-1024x685.jpg"
          ]
        },
        {
          id:5,
          name: "Dragon Dance",
          images: [
            "https://www.scmp.com/sites/default/files/styles/980w/public/images/methode/2016/02/22/9e52eaa2-d911-11e5-ba33-b7a5a5ded6db_image_hires.jpg?itok=bLb7Pkaz",
            "https://www.scmp.com/sites/default/files/styles/980w/public/images/methode/2016/02/22/9eacb262-d911-11e5-ba33-b7a5a5ded6db_image_hires.jpg?itok=IdU6tXof",
            "https://www.scmp.com/sites/default/files/styles/980w/public/images/methode/2016/02/22/9ccf38ca-d911-11e5-ba33-b7a5a5ded6db_image_hires.jpg?itok=cfrm6vv1",
            "https://archive.shine.cn/newsimage/2017/09/12/020170912235825.jpg",
            "http://www.hongdelion.com.au/Portals/5/2013/RS0001.JPG"
          ]
        },
        {
          id:6,
          name: "Fireworks",
          images: [
            "https://cdn3.i-scmp.com/sites/default/files/styles/980w/public/2013/12/13/fireworks_tiananmen.jpg?itok=spN_2xiS",
            "https://enabdullahu.files.wordpress.com/2013/01/rraketa-tkines.jpg",
            "https://cdn3.i-scmp.com/sites/default/files/styles/980w/public/images/methode/2016/01/29/44989dac-c41e-11e5-bbaf-0bb83de8b470_1280x720.jpg?itok=ZB1bRIru",
            "http://www.nouahsark.com/data/images/infocenter/culture/holidays/national-holiday4.jpg",
            "http://www.absoluteresorts.com/our-stories/wp-content/uploads/2018/02/Chinese-new-year-fireworks-phuket.jpg"
          ]
        },
        {
          id:7,
          name: "Giving Red Envelopes",
          images: [
            "https://static.seattletimes.com/wp-content/uploads/2017/01/01242017_LunarNYEnvelopes-780x520.jpg",
            "http://www.chineseamericanfamily.com/wp-content/uploads/2015/10/red-envelopes-chinese-new-year.jpg",
            "http://limitlesslaowai.com/wp-content/uploads/2015/02/hongbao-rmb.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4a0d7462045239.5a82ff6cc529a.jpg",
            "http://english.cri.cn/mmsource/images/2014/01/25/afa62d1960044e7fa0f275c8da3680f5.jpg"
          ]
        },

      ]
  }),
  methods: {
    expand(image) {
      this.expandImage = image
    }
  }
}
</script>

<style lang="scss" scoped>
.page-food-pics {
  width: 100%;
  height:100%;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  .card-food {

    display:inline-block;
    flex-direction: column;
    height:75px;
    width:75px;
    margin-right:10px;
    .food-pic {
      margin-right:5px;
      border-radius:5px;
      width:100%;
      height:75px;
      object-fit: cover;
      overflow: hidden;
    }
    img {
      margin-right:5px;
      border-radius:5px;
      width:100%;
      height:100%;
      object-fit: cover;
      overflow: hidden;
    }
  }

  // .expand-image {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100vw;
  //   height: 100vh;
  //   display: flex;
  //   -webkit-box-pack: center;
  //   -ms-flex-pack: center;
  //   justify-content: center;
  //   -webkit-box-align: center;
  //   -ms-flex-align: center;
  //   align-items: center;
  //   z-index: 100;

  //   img {
  //     max-width: calc(100vw - 20px);
  //     max-height: calc(100vh - 20px);
  //   }
  // }
}
</style>
