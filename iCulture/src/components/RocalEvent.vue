<template>
  <div class="rocal-event frame">
    <div id="map"></div>
  </div>
</template>

<script>

export default {
  name: "RocalEvent",
  mounted() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -27.499280, lng: 153.014430},
        zoom: 13
    });
  }
};
</script>

<style lang="scss" scoped>
.rocal-event {

    #map {
        width: 100%;
        height: 100%;
    }
}
</style>



