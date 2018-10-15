<template>
    <div class="event-page frame">

      <div class="main">
        <div class='header'>
            <router-link class="back" to="/EventList">
              <i class="fas fa-chevron-left"></i>
              <p> Back</p>
            </router-link>
        </div>
        <div class="content">
          <div class="name">
            <ChinaList :type="'name'"></ChinaList>
          </div>
          <div class="date">
            <ChinaList :type="'date'"></ChinaList>
          </div>
        </div>

        <div class="footer">
          <router-link class="next" to="/EventInfo">
            <p> NEXT</p>
          </router-link>
        </div>
      </div>

    </div>
</template>

<script>
import ChinaList from '@/components/items/ChinaList'
export default {
    name: "EventPage",
    components: { ChinaList }
}
</script>

<style lang="scss" scoped>
.event-page {
  .main {
    position:relative;
    width:100%;
    border:1px solid black;
    height:100%;
    background-image: url("../assets/sample_events/ChineseNewYear/lanterns1.jpg");
    background-repeat: no-repeat;
    background-position: 25% 100%;
    background-size: cover;
    .header {
      margin-top:30px;
      padding-top:15px;
      display:flex;
      justify-content: flex-start;
      margin-left: 25px;
      border:0px solid black;
      :hover {
        text-decoration: none!important;
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
          margin-top:4px;
        }
      }
    }
    .footer {
      position:absolute;
      display:flex;
      bottom:0px;
      height:120px;
      width:100%;
      justify-content: flex-end;
      text-align: right;
      :hover {
        text-decoration: none!important;
      }
      .next {
        margin-top:auto;
        margin-bottom:auto;
        margin-right:30px;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 12px;
        color:white;
        background-color: black;
        height:40px;
        width:130px;
        display:flex;
        justify-content: center;

        border-radius: 15px;
        float:right;


        p {
          margin:auto;
        }

      }
    }
    .content {
      padding-left: 25px;
      color:white;
      position:absolute;
      width:100%;
      bottom:120px;
      height:10%;
      .name {
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size:21px;
      }
      .date {
        font-family: 'Playfair Display', serif;
        font-size:13px;
      }
    }
  }


}
</style>
