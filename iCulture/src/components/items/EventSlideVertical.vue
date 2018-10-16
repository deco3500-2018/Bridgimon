<template>
    <div class="event-slide-vertical">
        <div class="title">Up Coming Event</div>
        <div
         class="card"
         v-for="(card, index) in sample_event"
         :key="index"
        >
            <img :src="card.imgPath">
            <div class="event-title">{{ card.title }}</div>
            <div class="description">{{ card.discription }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EventSlideVertical",
    data: () => ({
        sample_event: [
            {
                title: "TIMES SQUARE NEW YEAR'S EVE",
                imgPath: require("../../assets/sample_events/NewYorkNewYear/NEWYOR_ NEW_YEARS_EVE.jpg"),
                discription: "Every year as the clock nears midnight on December 31, the eyes of the world turn once more to the dazzling lights and bustling energy of Times Square. Anticipation runs high. New Year's Eve at the symbolic center of New York City has become more than just a celebration - it's a global tradition."
            }
        ]
    })
}
</script>

<style lang="scss" scoped>
.event-slide-vertical {
    margin-top: 15px;
    margin-right: 10px;

    .title {
        font-size: 18px;
        font-weight: bold;
        color: #040f16;
        margin-bottom: 10px;
    }

    .card {
        width: 100%;
        border: 0;
        color: #040f16;

        img {
            height: 100px;
            border-radius: 10px;
        }

        .event-title {
            margin-top: 10px;
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 12px;
        }

        .description {
            font-size: 10px;
        }
    }
}
</style>


