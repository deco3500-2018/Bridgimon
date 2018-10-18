<template>
    <div class="food">

        <div class="page">
          <div class="page-details">
            <div class="page-food-name">
              {{ sample_data[id].name }}
            </div>
            <div class="page-food-desc">
              {{ sample_data[id].long_description }}
            </div>
          </div>
          <br>
          <div class="page-details">
            <div class="page-food-subname">
              History
            </div>
            <div class="page-food-desc">
              {{ sample_data[id].history }}
            </div>
          </div>
          <br>
          <div class="page-details">
            <div class="page-food-subname">
              Photos
            </div>
            <div class="page-food-pics">
              <silentbox-group>
                <div class="card-food">
                  <silentbox-item src="https://www.reluctantgourmet.com/wp-content/uploads/2010/09/d0781aab6107ab09663a5b35f9583041.jpg">
                      <img src="https://www.reluctantgourmet.com/wp-content/uploads/2010/09/d0781aab6107ab09663a5b35f9583041.jpg">
                  </silentbox-item>
                  <silentbox-item src="https://omnivorescookbook.com/wp-content/uploads/2015/02/1502_How-to-Make-Chinese-Dumplings-From-Scratch_002.jpg">
                      <img src="https://omnivorescookbook.com/wp-content/uploads/2015/02/1502_How-to-Make-Chinese-Dumplings-From-Scratch_002.jpg">
                  </silentbox-item>
                  <silentbox-item src="http://www.dinnerwithjulie.com/wp-content/uploads/2017/01/Dumplings-potstickers-2-800x1200.jpg">
                      <img src="http://www.dinnerwithjulie.com/wp-content/uploads/2017/01/Dumplings-potstickers-2-800x1200.jpg">
                  </silentbox-item>
                  <silentbox-item src="https://www.recipetineats.com/wp-content/uploads/2016/01/Gyoza-Japanese-Dumplings_1-680x900.jpg">
                      <img src="https://www.recipetineats.com/wp-content/uploads/2016/01/Gyoza-Japanese-Dumplings_1-680x900.jpg">
                  </silentbox-item>
                  <silentbox-item src="http://i0.wp.com/www.foodrepublic.com/wp-content/uploads/2016/09/dumplings_anchor.jpg?resize=700%2C467">
                      <img src="http://i0.wp.com/www.foodrepublic.com/wp-content/uploads/2016/09/dumplings_anchor.jpg?resize=700%2C467">
                  </silentbox-item>
                </div>
              </silentbox-group>
            </div>
          </div>
          <br>
          <div class="page-details">
            <div class="page-food-subname">
              Best Places To Eat
            </div>
            <div class="page-food-places">
              <div class='card-places' v-for="(card,index) in sample_data[id]" :key="index">
              </div>
            </div>
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
    props: ["id"],
    data: () => ({
      sample_data: [
        {
          id:0,
          name: "Dumplings",
          event: "Chinese New Year",
          history:"Filled dumplins were probably a later development in Europe, but Chinese cooks have enjoyed a version known as iiaozi for more than 1,800 years. According to legend, Chinese stuffed dumplings were invented during the Han Dynasty by a man named Zhang Zhongjian",
          img_path: require("../../assets/sample_events/ChineseNewYear/dumplings.jpg"),
          short_description: "Dumplings or Jiao Zi traditionally resemble ingots or money, hence eating dumplings is believed to usher in wealth. This dish is widely popular in China, especially in North China. Dumplings generally consist of minced meat (pork, diced shrimp)...",
          long_description: "Dumplings or Jiao Zi traditionally resemble ingots or money, hence eating dumplings is believed to usher in wealth. This dish is widely popular in China, especially in North China. Dumplings generally consist of minced meat (pork, diced shrimp, fish, ground chicken, beef), vegetables, and wrapped in elastic dough skin. They can be cooked by boiling, steaming, frying or baking."

        },
        {
          id:1,
          name: "Glutinous Rice Cake",
          event: "Chinese New Year",
          history:"Filled dumplins were probably a later development in Europe, but Chinese cooks have enjoyed a version known as iiaozi for more than 1,800 years. According to legend, Chinese stuffed dumplings were invented during the Han Dynasty by a man named Zhang Zhongjian",
          img_path: require("../../assets/sample_events/ChineseNewYear/ricecake.jpg"),
          short_description: "This glutinous rice-based cake (known as Kue Keranjang in Bahasa Indonesia) actually can be found year round, but is tradionally consumed during Chinese New Year for good luck. Nian Gao is homonym for 'higher year' which means that you'll be raising yourself in status in the coming year. Nian Gao is made of sticky...",
          long_description: "This glutinous rice-based cake (known as Kue Keranjang in Bahasa Indonesia) actually can be found year round, but is tradionally consumed during Chinese New Year for good luck. Nian Gao is homonym for 'higher year' which means that you'll be raising yourself in status in the coming year. Nian Gao is made of sticky..."

        },
        {
          id:2,
          name: "Fish",
          event: "Chinese New Year",
          history:"Filled dumplins were probably a later development in Europe, but Chinese cooks have enjoyed a version known as iiaozi for more than 1,800 years. According to legend, Chinese stuffed dumplings were invented during the Han Dynasty by a man named Zhang Zhongjian",
          img_path: require("../../assets/sample_events/ChineseNewYear/fish.jpg"),
          short_description: "This glutinous rice-based cake (known as Kue Keranjang in Bahasa Indonesia) actually can be found year round, but is tradionally consumed during Chinese New Year for good luck. Nian Gao is homonym for 'higher year' which means that you'll be raising yourself in status in the coming year. Nian Gao is made of sticky...",
          long_description: "This glutinous rice-based cake (known as Kue Keranjang in Bahasa Indonesia) actually can be found year round, but is tradionally consumed during Chinese New Year for good luck. Nian Gao is homonym for 'higher year' which means that you'll be raising yourself in status in the coming year. Nian Gao is made of sticky..."

        },
        {
          id:3,
          name: "Sweet Rice Bowl",
          event: "Chinese New Year",
          history:"Filled dumplins were probably a later development in Europe, but Chinese cooks have enjoyed a version known as iiaozi for more than 1,800 years. According to legend, Chinese stuffed dumplings were invented during the Han Dynasty by a man named Zhang Zhongjian",
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
