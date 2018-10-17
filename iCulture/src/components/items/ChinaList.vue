<template>
    <div class="china-list">

      <div v-if="type == 'length'">
        <nobr>
          {{sample_data.length}} Featured Events
        </nobr>
      </div>


      <div v-if="type == 'card'">
          <div class="card" v-for="(card, index) in sample_data" :key="index">
            <router-link to="/EventCover">
            <div class="card-pic">
              <img :src="card.img_path">
            </div>
            <div class="card-name">
              {{card.name}}
            </div>
            <br>
            <div class="card-desc">
              {{card.description}}
            </div>
            </router-link>
          </div>
      </div>

      <div v-if="type == 'name'">
        {{sample_data[0].name}}
      </div>

      <div v-if="type == 'date'">
        {{sample_data[0].date}}
      </div>

    </div>
</template>

<script>
export default {
    name: "ChinaList",
    props: ["type"],
    data: () => ({
      sample_data: [
        {
          name: "Chinese New Year",
          date: "16 February 2018",
          description: "Chinese New Year, also known as Lunar New Year or Spring Festival, is the most important Chinese holiday. It is defined as the first day of the first month in the traditional Chinese calendar.",
          img_path: require("../../assets/sample_events/ChineseNewYear/chinesenewyear.jpg")
        },
        {
          name: "Lantern Festival",
          date: "03 February 2018",
          description: "Signaling the climax of the Chinese New Year, the Lantern Festival is a wonderous, light-filled experience with fascinating cultural performances.",
          img_path: require("../../assets/sample_events/LanternFestival/lanternfestival.png")
        },
        {
          name: "Dragon Boat Festival",
          date: "04 April 2018",
          description: "It’s famous for the races held on that day in traditional paddled long boats, each ornamented with a dragon’s head at the prow.",
          img_path: require("../../assets/sample_events/Dragonboat/dragonboatfest.jpg")
        }
      ]
    })

}
</script>
<style lang="scss" scoped>
.china-list {

  .card {
    border: 0px solid black;
    border-radius:15px;
    height: 250px;
    margin:10px 20px;
    :hover {
      text-decoration: none!important;
    }
    }
    .card-pic {
      border:0px solid black;
      border-radius:15px;
      height:68%;
      img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        border-radius:15px;
      }
    }
    .card-name {
      color:black;
      font-size: 11px;
      left:10px;
      position:relative;
      top:5px;
      font-family: 'Playfair Display', serif;
      font-weight: 1000;
      font-size: 18px;
    }
    .card-desc {
      color:black;
      font-family: 'Playfair Display', serif;
      font-size: 9px;
      left:2px;
      bottom:20px;
      position:relative;
      margin:0px 9px;
  }
}
</style>
