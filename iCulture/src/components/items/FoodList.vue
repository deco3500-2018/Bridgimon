<template>
    <div class="food">

        <div class="info">
          <div class="card" v-for="(card, index) in sample_data" :key="index">
            <router-link :to="{ name: 'EventPage', params: {id:card.id, type:'food'} }">
              <div class="food-name">
                {{card.name}}
              </div>
              <div class="food-info">
                <div class="food-pic">
                  <img :src="card.img_path">
                </div>
                <div class="food-description">
                  {{card.short_description}}
                </div>
              </div>
            </router-link>
          </div>
        </div>

      </div>


</template>

<script>
import Vue from 'vue'
import VueSilentbox from 'vue-silentbox'

Vue.use(VueSilentbox);

export default {
    name: "FoodList",
    props: ["type"],

    data: () => ({
      sample_data: [
        {
          id:0,
          name: "Dumplings",
          event: "Chinese New Year",

          img_path: require("../../assets/sample_events/ChineseNewYear/dumplings.jpg"),
          short_description: "Jiaozi, or dumplings, are also known as water dumplings, meaning they are boiled in water. It is one of the major staple foods or local specialties in north China and enjoyed by many Chinese."


        },
        {
          id:1,
          name: "Glutinous Rice Cake",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/ricecake.jpg"),
          short_description: "Nian gao (also niangao; nin gou in Cantonese), sometimes translated as year cake or Chinese New Year's cake, is a food prepared from glutinous rice and consumed in Chinese cuisine. While it can be eaten all year round, traditionally it is most popular during Chinese New Year."

        },
        {
          id:2,
          name: "Fish",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/fish.jpg"),
          short_description: "Steamed fish (清蒸魚), a symbol of auspiciousness according to Chinese tables, one of the most emblematic dishes of Chinese New Year. They are first and foremost supposed to bring luck. These “lucky” preparations are thus served throughout this period, i.e. for 16 days, and more especially on New Year’s Eve."

        },
        {
          id:3,
          name: "Sweet Rice Ball",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/riceball.jpg"),
          short_description: "汤圆 (tāng yuán) are glutinous rice balls stuffed with varying flavors of paste filling. It is a traditional Chinese dessert, a light yet tasty option for both festivals or for an after-meal desserts with family."


        }


      ]
  })
}
</script>


<style lang="scss" scoped>
.food {
  .header-pic {
    img {
      width:100%;
      height:100%;
      object-fit: cover;
      overflow: hidden;
    }
  }
  .page {
    .page-details {
      .page-food-name {
        color:black;
        font-family: 'Playfair Display', serif;
        font-weight:bold;
        font-size:20px;
      }
      .page-food-subname {
        color:black;
        font-family: 'Playfair Display', serif;
        font-weight:bold;
        font-size:16px;
      }
      .page-food-desc {
        font-size: 10px;
        font-family: 'Open Sans', sans-serif;
        text-align: justify;
      }
      .page-food-pics {
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        .card-food {
          display:inline-block;
          flex-direction: column;
          height:75px;
          width:75px;
          margin-right:10px;
          img {
            margin-right:5px;
            border-radius:5px;
            width:100%;
            height:100%;
            object-fit: cover;
            overflow: hidden;
          }
        }
      }
      .page-food-places {
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        .card-places {
          display:inline-block;
          flex-direction: column;
          border:1px solid black;
          border-radius: 5px;
          height:75px;
          width:150px;
          margin-right:10px;
        }
      }
    }
  }
  .info {
    .card {
      height:180px;
      border: 0px solid black;
      padding: 0px 20px;
      :hover {
        text-decoration: none!important;
      }
      .food-name {
        color:black;
        padding-left: 1px;
        font-family: 'Playfair Display', serif;
        font-weight:bold;
        font-size:20px;
        height:25%;
        border: 0px solid black;
      }
      .food-info {
        color:black;
        height:75%;
        display: flex;
        padding-top:10px;

        .food-pic {
          height: 105px;
          width:32%;
          border: 0px solid black;
          border-radius:7px;
          img {
            border-radius:7px;
            object-fit: cover;
            height: 100%;
            max-width: 100%;
          }
        }
        .food-description {
          margin-left:10px;
          font-family: 'Open Sans', sans-serif;
          font-size: 10px;
          width:70%;
          border: 0px solid black;


        }
      }
    }
}
}
</style>
