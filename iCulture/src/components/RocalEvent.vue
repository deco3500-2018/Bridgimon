<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>

export default {
  name: "RocalEvent",
  mounted() {
      var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
});
  }
};
</script>


