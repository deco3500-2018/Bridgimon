<template>
    <div class="china-list">
      <div v-if="type == 'length'">
        ({{sample_data.length}})
      </div>
      <div v-else>
        <router-link to="/">
          <div class="card" v-for="(card, index) in sample_data" :key="index">
            <div class="card-name">
              {{card.name}}
            </div>
            <br>
            <div class="card-date">
              {{card.date}}
            </div>
          </div>
        </router-link>
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
          date: "16 February 2018"
        },
        {
          name: "Lantern Festival",
          date: "03 February 2018"
        },
        {
          name: "Qingming Festival",
          date: "04 April 2018"
        }
      ]
    })

}
</script>


<style lang="scss" scoped>
.china-list {

  .card {
    border: 1px solid black;
    height: 200px;
    margin:10px 20px;
    .card-name {
      font-size: 11px;
      left:15px;
      position:absolute;
      bottom:27px;

    }
    .card-date {
      font-size: 11px;
      left:15px;
      position:absolute;
      bottom: 12px;
    }
  }

}
</style>
