<template>
    <div class="local-event-panel">
        <div class="cancel" @click="$emit('cancel')">
            <i class="fas fa-times"></i>
        </div>
        <div class="title">
            {{ event.name }}
            <span>{{ event.howFar }}</span>
        </div>
        <div class="date">{{ event.date }}</div>
        <div class="time">{{ event.time }}</div>
        <img :src="imagePath">
    </div>
</template>

<script>
export default {
    name: "LocalEventPanel",
    props: ["event"],
    data: () => ({
        imagePath: ""
    }),
    created() {
        switch(this.event.id) {
            case 0:
                this.imagePath = require("../../assets/LocalPlace/KingGeorgeSquare.jpg")
                break
            case 1: 
                this.imagePath = require("../../assets/LocalPlace/AlbertStreet.jpg")
                break
            case 2:
                this.imagePath = require("../../assets/LocalPlace/RomaStreetParkland.jpg")
        }
    }
}
</script>

<style lang="scss" scoped>
.local-event-panel {
    position: relative;
    width: 300px;
    height: 375px;
    background-color: #FFFFFF;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 0 20px #F0F0F0;
    overflow: hidden;
    font-family: Georgia, 'Times New Roman', Times, serif;

    .cancel {
        background-color:black;
        color:white;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
    }

    .title {
        margin-top: 50px;
        margin-left: 10px;
        font-size: 18px;
        position: relative;

        span {
            display: inline-block;
            font-size: 16px;
            font-weight: normal;
            margin-left: auto;
            position: absolute;
            right: 10px;
            bottom: 0;
            opacity: 0.5;
        }
    }

    .date, .time {
        margin-left: 10px;
        opacity: 0.5;
    }

    img {
        position: absolute;
        bottom: 0;
        width: 300px;
        height: 200px;
    }
}
</style>


