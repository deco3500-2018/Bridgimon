<template>
  <div class="local-event frame">

    <!-- Google Map -->
    <div id="map"></div>

    <!-- Buck Button -->
    <router-link class="back" :to="{ name: 'EventInfo', params: {page:'overview'} }">
        <i class="fas fa-chevron-left"></i>
        <p>Back</p>
    </router-link>
    <div class="local-panel-area">
        <LocalEventPanel
         :event="panelEvent"
         v-if="panelEvent != null"
         @cancel="cancel"
         @calendar="calendar"
        ></LocalEventPanel>

    </div>
  </div>
</template>

<script>
import LocalEventPanel from '@/components/items/LocalEventPanel'

export default {
  name: "LocalEvent",
  components: { LocalEventPanel },
  data: () => ({
      map: null,
      sample_data: [
          {
              id: 0,
              name: "Chinese New Year Countdown in King George Square",
              date: "Saturday, 02 February 2019",
              time: "1pm - 6pm",
              imagePath: require("../assets/LocalPlace/KingGeorgeSquare.jpg"),
              howFar: "2km",
              location: {
                  lat: -27.468280,
                  lng: 153.023520
              }
          },
          {
              id: 1,
              name: "Albert St Chinese new year food festival",
              date: "Saturday, 02 February 2019",
              time: "1pm - 6pm",
              imagePath: require("../assets/LocalPlace/AlbertStreet.jpg"),
              howFar: "2km",
              location: {
                  lat: -27.469452,
                  lng: 153.025019
              }
          },
          {
              id: 2,
              name: "Chinese New Year Festival in Roma Street Parkland",
              date: "Saturday, 02 February 2019",
              time: "1pm - 6pm",
              imagePath: require("../assets/LocalPlace/RomaStreetParkland.jpg"),
              howFar: "2km",
              location: {
                  lat: -27.464060,
                  lng: 153.018780
              }
          },
      ],
      marker: [],
      panelEvent: null
  }),
  methods: {
      markerEvent(i) {
          var self = this
          this.marker[i].addListener('click', function() {
           self.panelEvent = self.sample_data[i]
        })
      },
      cancel() {
          this.panelEvent = null
      },
      calendar() {

        alert("This event has been added to your calendar!")
      }
  },
  mounted() {
    this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -27.469399, lng: 153.021874},
        zoom: 15,
        disableDefaultUI: true
    });

    for(var i = 0; i < this.sample_data.length; i++) {

        this.marker[i] = new google.maps.Marker({
            position: this.sample_data[i].location,
            map: this.map
        })
        this.markerEvent(i)
    }
  }
};
</script>

<style lang="scss" scoped>
.local-event {
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

    .local-panel-area {
        position: absolute;
        width: 100%;
        bottom: 75px;
    }
}
</style>
