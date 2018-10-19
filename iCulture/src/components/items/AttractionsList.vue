<template>
    <div class="food">

        <div class="info">
          <div class="card" v-for="(card, index) in sample_data" :key="index">
            <router-link :to="{ name: 'EventPage', params: {id:card.id , type:'attractions'} }">
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
    name: "Attractions",
    props: ["type"],
    data: () => ({
      sample_data: [
        {
          id:0,
          name: "Lion Dance",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/liondance.jpg"),
          short_description:"Lion dance is a form of traditional dance in Chinese culture and other Asian countries in which performers mimic a lion's movements in a lion costume to bring good luck and fortune. ",

        },
        {
          id:1,
          name: "Dragon Dance",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/dragondance.jpg"),
          short_description:"Dragon dance is a traditional dance form in Chinese culture. The dragon represents wisdom, power and wealth. Like the lion dance it is most often seen in festive celebrations."

        },
        {
          id:2,
          name: "Fireworks",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/fireworks.jpg"),
          short_description: "It is an important custom to set off firecrackers and fireworks during the Chinese New Year period. Chinese New Year celebrations would not be complete without them.",


        },
        {
          id:3,
          name: "Giving Red Envelopes",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/redenvelopes.jpg"),
          short_description: "Ang Pow red envelopes also known as “red packets” “Ang Pow” “laisee” “lai see” “hung bao” or “Hung-Bao”. They are considered extremely auspicious to receive as a gift and even more auspicious if they contain money."

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
        z-index: 10;
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
