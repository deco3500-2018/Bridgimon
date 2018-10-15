<template>
    <div class="event-info frame">
      <div class="header">
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
        <div v-if="tab == 'videos'">

        </div>
        <div v-if="tab == 'food'">
          <Food></Food>
        </div>
        <div v-if="tab == 'attractions'">

        </div>
      </div>

    </div>
</template>

<script>
import ChinaList from '@/components/items/ChinaList'
import Overview from '@/components/items/Overview'
import Food from '@/components/items/Food'

export default {
    name: "EventInfo",
    components: { ChinaList , Overview , Food},
    data: () => ({
        tab: "overview"
    })
}
</script>

<style lang="scss" scoped>
  .event-info {
    .header {
      height:33%;
      width:100%;
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
    }

  }
</style>
