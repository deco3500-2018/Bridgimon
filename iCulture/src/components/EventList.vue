
<template>

    <div class="event-list frame">

      <div class='header'>
          <router-link class="back" to="/Home">
            <i class="fas fa-chevron-left"></i>
            <p> Back</p>
          </router-link>
          <div class="header-title">
            <p>China</p>
          </div>
      </div>

      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input class="search-box" type="text" placeholder="Search">
      </div>

      <div class="main">
        <div class="featured">
          <ChinaList :type="'length'"></ChinaList>
        </div>
          <ChinaList :type="'card'"></ChinaList>
      </div>

    </div>
</template>

<script>
import ChinaList from '@/components/items/ChinaList'
export default {
    name: "EventList",
    components: { ChinaList },
    data: () => ({
        cover: true,
        window: "home"
    })

}
</script>


<style lang="scss" scoped>
.event-list {
  position: relative;
  overflow: scroll;
  .main{
    margin-top:15px;
    .featured {
      font-family: 'Playfair Display', serif;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      margin-bottom:15px;
      white-space: nowrap;
    }
  }
  .header {
    margin-top:30px;
    padding-top:15px;
    display:flex;
    justify-content: center;
    border:0px solid black;
    :hover {
      text-decoration: none!important;
    }
    .header-title {
      font-family: 'Playfair Display', serif;
      font-weight: 1000;
      font-size: 21px;
      margin-left:165px;
      margin-top:3px;
    }
    .back {
      font-family: 'Playfair Display', serif;
      margin-top:6px;
      font-size: 12px;
      color:white;
      background-color: black;
      height:30px;
      width:90px;
      display:flex;
      justify-content: center;
      border:1px solid black;
      border-radius: 15px;
      i {
        margin-top:8px;
        margin-right:5px;

      }
      p {
        margin-top:5px;
      }

    }
  }
  .search-bar {
    width:90%;
    height: 36px;
    color: #B8B8B8;
    border-radius: 10px;
    margin:0px 20px;
    text-align:left;
    padding-left: 10px;
    background-color: #F5F5F5;
    input:focus {
      outline: none!important;
      box-shadow: none;
    }

    .search-box {
      background-color: #F5F5F5;
      color: #B8B8B8;
      height:100%;
      border:none;

    }
  }



}
</style>
