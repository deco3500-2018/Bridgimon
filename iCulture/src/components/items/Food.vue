<template>
    <div class="food">

        <div class="card" v-for="(card, index) in sample_data" :key="index">
          <div class="food-name">
            {{card.name}}
          </div>
          <div class="food-info">
            <div class="food-pic">
              <img :src="card.img_path">
            </div>
            <div class="food-description">
              {{card.description}}
            </div>
          </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Food",
    data: () => ({
      sample_data: [
        {
          name: "Dumplings",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/dumplings.jpg"),
          description: "Dumplings or Jiao Zi traditionally resemble ingots or money, hence eating dumplings is believed to usher in wealth. This dish is widely popular in China, especially in North China. Dumplings generally consist of minced meat (pork, diced, shrimp)..."

        },
        {
          name: "Glutinous Rice Cake",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/ricecake.jpg"),
          description: "This glutinous rice-based cake (known as Kue Keranjang in Bahasa Indonesia) actually can be found year round, but is tradionally consumed during Chinese New Year for good luck. Nian Gao is homonym for 'higher year' which means that you'll be raising yourself in status in the coming year. Nian Gao is made of sticky..."

        },
        {
          name: "Fish",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/fish.jpg"),
          description: "This glutinous rice-based cake (known as Kue Keranjang in Bahasa Indonesia) actually can be found year round, but is tradionally consumed during Chinese New Year for good luck. Nian Gao is homonym for 'higher year' which means that you'll be raising yourself in status in the coming year. Nian Gao is made of sticky..."

        },
        {
          name: "Sweet Rice Bowl",
          event: "Chinese New Year",
          img_path: require("../../assets/sample_events/ChineseNewYear/riceball.jpg"),
          description: "This glutinous rice-based cake (known as Kue Keranjang in Bahasa Indonesia) actually can be found year round, but is tradionally consumed during Chinese New Year for good luck. Nian Gao is homonym for 'higher year' which means that you'll be raising yourself in status in the coming year. Nian Gao is made of sticky..."

        }


      ]
  })
}
</script>


<style lang="scss" scoped>
.food {
  margin-top:10px;
  .card {
    height:180px;
    border: 0px solid black;
    .food-name {

      padding-top:6px;
      padding-left:16px;
      font-family: 'Playfair Display', serif;
      font-weight:bold;
      font-size:20px;
      height:25%;
      border: 0px solid black;
    }
    .food-info {
      height:75%;
      display: flex;
      .food-pic {
        margin-bottom:25px;
        margin-left:15px;
        margin-right:15px;
        width:30%;
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
        font-family: 'Open Sans', sans-serif;
        font-size: 10px;
        width:70%;
        border: 0px solid black;
        padding-right:15px;

      }
    }
  }
}
</style>
