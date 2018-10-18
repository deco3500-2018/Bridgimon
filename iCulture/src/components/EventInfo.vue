<template>
    <div class="event-info frame">
      <div class="header">

        <router-link class="back" to="/EventCover">
        <i class="fas fa-times"></i>
        </router-link>

        <div class="header-info">
          <div class="event-name">
            <ChinaList :type="'name'"></ChinaList>
          </div>
          <div class="event-date">
            <ChinaList :type="'date'"></ChinaList>
          </div>
        </div>
        <div class="tabs">
          <div class="tab col-sm-3" :class="{active: tab == 'overview'}" @click="tab = 'overview'">
            Overview
          </div>
          <div class="tab col-sm-3" :class="{active: tab == 'videos'}" @click="tab = 'videos'">
            Videos
          </div>
          <div class="tab col-sm-3" :class="{active: tab == 'food'}" @click="tab = 'food'">
            Food
          </div>
            <div class="tab col-sm-3" :class="{active: tab == 'attractions'}" @click="tab = 'attractions'">
            Attractions
          </div>
        </div>
      </div>

      <div class="main">

        <div class='overview' v-if="tab == 'overview'">
          <Overview></Overview>

        </div>
        <div class='videos' v-else-if="tab == 'videos'">
          <VideoList></VideoList>
        </div>
        <div class='food' v-else-if="tab == 'food'">
          <FoodList></FoodList>
        </div>
        <div class='attractions' v-else-if="tab == 'attractions'">
          <AttractionsList :type="'cover'"></AttractionsList>
        </div>
      </div>

    </div>
</template>

<script>
import ChinaList from '@/components/items/ChinaList'
import Overview from '@/components/items/Overview'
import FoodList from '@/components/items/FoodList'
import AttractionsList from '@/components/items/AttractionsList'
import VideoList from '@/components/items/VideoList'

export default {
    name: "EventInfo",
    props: ["page"],
    components: { ChinaList , Overview , FoodList , AttractionsList, VideoList },
    data: function () {
      return {
        tab: this.page
      }
    }
}
</script>

<style lang="scss" scoped>
  .event-info {
    .header {
      height:33%;
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
        padding-top:90px;
        position: relative;
        padding-left:20px;
        font-family: 'Playfair Display', serif;
        color:white;
        display: block;
        background-image: url("../assets/sample_events/ChineseNewYear/lanterns2-blur.png");
        background-repeat: no-repeat;
        background-position: 20% 100%;
        background-size: cover;
        height:78%;
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

      .overview {
        font-size:12px;
        padding:15px 12px;
        text-align: justify;
      }
      .attractions {
        margin-top:10px;
      }
      .food {
        margin-top:10px;
      }
    }
  }
</style>
