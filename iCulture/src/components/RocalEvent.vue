<template>
  <div class="rocal-event frame">
    <div id="map"></div>
    <router-link class="back" to="/EventList">
        <i class="fas fa-chevron-left"></i>
        <p> Back</p>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "RocalEvent",
  data: () => ({
      map: null,
  }),
  mounted() {
    this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -27.499280, lng: 153.014430},
        zoom: 13,
        disableDefaultUI: true
    });

    var myLatLng = {lat: -27.468280, lng: 153.023520};

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'King George Squere'
    });
  }
};
</script>

<style lang="scss" scoped>
.rocal-event {
    position: relative;

    #map {
        width: 100%;
        height: 100%;
    }

    .back {
        position: absolute;
        top: 50px;
        left: 25px;
        font-family: 'Playfair Display', serif;
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
</style>



