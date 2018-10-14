
<template>

    <div class="event-list frame">

      <div class='header'>
          <router-link class="back" to="/">
            <i class="fas fa-chevron-left"></i>
          </router-link>
          <p>China</p>
      </div>

      <div class="main">
        <div class="featured">
          <p> Featured Events <ChinaList :type="'length'"></ChinaList> </p>
        </div>
          <ChinaList ></ChinaList>
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
  .header {
    padding: 15px 0px;
    margin-bottom:10px;
    display: flex;
    justify-content: center;
    .back {
      position:absolute;
      left:15px;
    }
    p {
      margin:0;
    }

    button {
      position:inherit;
      left:0;
      top:0;
    }

  }
  .featured {
    padding-left:30px;
  }


}
</style>
