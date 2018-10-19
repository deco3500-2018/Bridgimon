<template>
    <div class="event-slide">
        <div class="title">
            {{ type }}
            <span class="see-more">See more ></span>
        </div>
        <div class="slide">
            <div class="card" v-for="(card, index) in sample_data" :key="index" @click="moveEventPage(card.name)">
                <img :src="card.img_path">
                <div class="name">{{ card.name }}</div>
                <div
                 v-if="type == 'Popular Events'"
                 class="info"
                >
                    <img src="../../assets/home/hearts.svg">
                    {{ card.likes }}
                </div>
                <div
                 v-if="type == 'Events Near You'"
                 class="info"
                >
                    {{ card.location }}
                </div>
                <div
                 v-if="type == 'Upcoming Events'"
                 class="info"
                >
                    {{ card.date }}
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EventSlide",
    props: ["type"],
    data: () => ({
        sample_data: [
            {
                name: "Chinese New Year",
                likes: 609,
                img_path: require("../../assets/sample_events/ChineseNewYear/sample01.jpg"),
                location: "St Lucia(0.7km)",
                date: "16 February 2018"
            },
            {
                name: "Songkran",
                likes: 338,
                img_path: require("../../assets/sample_events/Songkran/sample01.jpg"),
                location: "Toowong(2.3km)",
                date: "16 February 2018"
            },
            {
                name: "St. Patrick's Day",
                likes: 427,
                img_path: require("../../assets/sample_events/StPatricksDay/sample01.jpg"),
                location: "Indooroopilly(7.8km)",
                date: "27 December 2018"
            }
        ]
    }),
    methods: {
        moveEventPage(event) {
            switch(event) {
                case "Chinese New Year":
                    this.$router.push("/EventCover")
                    break
                default:
                    break
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.event-slide {
    width: 100%;

    .title {
        position: relative;
        width: 100%;
        font-size: 18px;
        font-weight: bold;
        color: #040f16;
        margin-bottom: 10px;

        .see-more {
            position: absolute;
            right: 10px;
            top: 9px;
            font-size: 10px;
            font-weight: bold;
            color: #868a8b;
        }
    }

    .slide {
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;

        .card {
            display: inline-block;
            width: 120px;
            margin-right: 15px;
            flex-direction: column;
            color: #040f16;
            border: 0;

            > img {
                width: 120px;
                height: 70px;
                margin-bottom: 10px;
                border-radius: 10px;
            }

            .name {
                font-weight: bold;
                font-size: 12px;
            }

            .info {
                display: flex;
                align-items: center;
                font-size: 10px;

                img {
                    width: 16px;
                    height: 16px;
                    margin-right: 8px;
                }
            }
        }
    }
}
</style>
