<template>

    <div class="event-page frame">
      <div class="header">
        <router-link class="back" :to="{ name: 'EventInfo', params: {page: event_type} }">
          <i class="fas fa-times"></i>
        </router-link>
        <div class="header-info">
          <img :src="background">
        </div>
      </div>

      <div class="main">

        <div class="description">
          <div v-if="event_type == 'attractions'">
            <AttractionsPage  v-bind:id="id" @changeImagePath="changeBackground"></AttractionsPage>
          </div>
          <div v-if="event_type == 'food'">
            <FoodPage v-bind:id="id" @changeImagePath="changeBackground"></FoodPage>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import ChinaList from '@/components/items/ChinaList'
import Overview from '@/components/items/Overview'
import FoodList from '@/components/items/FoodList'
import AttractionsPage from '@/components/items/AttractionsPage'
import FoodPage from '@/components/items/FoodPage'

export default {
    name: "EventInfo",
    props: ["type","id"],
    components: { ChinaList , Overview , FoodList , AttractionsPage , FoodPage},
    data: function () {
      return {
        event_type: this.type,
        background: ""
      }
    },
    methods: {
      changeBackground(imagePath) {
        this.background = imagePath;
      }
    }

}
</script>

<style lang="scss" scoped>
  .event-page {
    .header {

      height:35%;
      width:100%;
      .back {
        background-color:black;
        color:white;
        margin-left:15px;
        margin-top:25px;
        padding:0px 8px;
        position:absolute;
        font-size: 19px;
        border-radius:15px;
        z-index:1;
        :active {
          background-color:grey;
        }
      }
      .header-info {


        position: relative;

        font-family: 'Playfair Display', serif;
        color:white;
        display: block;

        height:100%;
        img {

          width:100%;
          height:100%;
          object-fit: cover;
          overflow: hidden;
        }
        .event-name {
          font-size:21px;
        }
        .event-date {
          font-size:13px;
        }
      }
      .tabs {
        background-color: #E8E8E8;
        display: flex;
        height:22%;
        width:100%;
        position:relative;
        :hover{
            box-shadow: none;
            border-bottom: 2px solid #6e0e0a;
        }
        .tab {
          font-size:11px;
          color: #A8A8A8;
          font-family: 'Playfair Display', serif;
          display: flex;
          justify-content: center;
          align-items: center;
          margin:auto;
          position: relative;
          height:100%;
          &.active {
            color: #6e0e0a;
            border-bottom:2px solid #6e0e0a;
          }
        }
      }
    }
    .main {
      overflow: scroll;
      height:67%;
      padding:20px;
    }
  }
</style>
