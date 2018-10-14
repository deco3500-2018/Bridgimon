<template>
    <div class="event-slide">
        <div class="title">{{ type }}</div>
        <div class="slide">
            <div class="card" v-for="(card, index) in sample_data" :key="index">
                <img :src="card.img_path">
                <span>{{ card.name }}</span>
                <div
                 v-if="type == 'Popular Events'"
                 class="info"
                >
                    <img src="../../assets/hearts.svg">
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
    })
}
</script>

<style lang="scss" scoped>
.event-slide {
    margin-bottom: 20px;

    .title {
        font-size: 24px;
        font-weight: bold;
        color: #f2bb05;
        margin-bottom: 10px;
    }

    .slide {
        display: flex;
        width: 100%;
        overflow: scroll;
        padding-bottom: 10px;
        box-shadow: 0px 4px 3px -3px rgba(0,0,0,0.5);

        .card {
            display: flex;
            margin-right: 15px;
            flex-direction: column;
            color: #d74e09;

            > img {
                width: 140px;
                height: 80px;
                margin-bottom: 10px;
            }

            span {
                font-weight: bold;
                font-size: 16px;
            }

            .info {
                display: flex;
                align-items: center;
                font-size: 14px;

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
