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
          history:"Filled dumplings were probably a later development in Europe, but Chinese cooks have enjoyed a version known as iiaozi for more than 1,800 years. According to legend, Chinese stuffed dumplings were invented during the Han Dynasty by a man named Zhang Zhongjian",
          img_path: require("../../assets/sample_events/ChineseNewYear/dumplings.jpg"),
          short_description: "Dumplings or Jiao Zi traditionally resemble ingots or money, hence eating dumplings is believed to usher in wealth. This dish is widely popular in China, especially in North China. Dumplings generally consist of minced meat (pork, diced shrimp)...",
          long_description: "Dumplings or Jiao Zi traditionally resemble ingots or money, hence eating dumplings is believed to usher in wealth. This dish is widely popular in China, especially in North China. Dumplings generally consist of minced meat (pork, diced shrimp, fish, ground chicken, beef), vegetables, and wrapped in elastic dough skin. They can be cooked by boiling, steaming, frying or baking."

        },
        {
          id:1,
          name: "Glutinous Rice Cake",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/ricecake.jpg"),
          short_description: "This glutinous rice-based cake (known as Kue Keranjang in Bahasa Indonesia) actually can be found year round, but is tradionally consumed during Chinese New Year for good luck. Nian Gao is homonym for 'higher year' which means that you'll be raising yourself in status in the coming year. Nian Gao is made of sticky..."

        },
        {
          id:2,
          name: "Fish",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/fish.jpg"),
          short_description: "This glutinous rice-based cake (known as Kue Keranjang in Bahasa Indonesia) actually can be found year round, but is tradionally consumed during Chinese New Year for good luck. Nian Gao is homonym for 'higher year' which means that you'll be raising yourself in status in the coming year. Nian Gao is made of sticky..."

        },
        {
          id:3,
          name: "Sweet Rice Bowl",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/riceball.jpg"),
          short_description: "This glutinous rice-based cake (known as Kue Keranjang in Bahasa Indonesia) actually can be found year round, but is tradionally consumed during Chinese New Year for good luck. Nian Gao is homonym for 'higher year' which means that you'll be raising yourself in status in the coming year. Nian Gao is made of sticky...",
          long_description: "This glutinous rice-based cake (known as Kue Keranjang in Bahasa Indonesia) actually can be found year round, but is tradionally consumed during Chinese New Year for good luck. Nian Gao is homonym for 'higher year' which means that you'll be raising yourself in status in the coming year. Nian Gao is made of sticky..."

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
