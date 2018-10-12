<template>
    <div class="home frame">
        <!-- Title page -->
        <div v-if="cover" class="cover">
            <div class="logo">
                <img src="../assets/logo.png">
            </div>
            <div class="title">iCulutre</div>
            <div class="text">Find new Culture</div>
            <button @click="cover = false">Continue</button>
        </div>

        <!-- Home page -->
        <div v-else class="main">

            <!-- Header -->
            <div class="header">
                <div
                 class="switch"
                 :class="{active: window == 'home'}"
                 @click="window = 'home'"
                >Home</div>
                <div
                 class="switch"
                 :class="{active: window == 'events'}"
                 @click="window = 'events'"
                >Events</div>
            </div>

            <!-- Search Bar -->
            <div class="search">
                <img src="../assets/search.svg">
                <input placeholder="Find New Culture!">
            </div>

            <!-- Home Events -->
            <div
             class="main-window"
             v-if="window == 'home'"
            >
                <!-- Popular Events -->
                <EventSlide :type="'Popular Events'"></EventSlide>

                <!-- Events Near You -->
                <EventSlide :type="'Events Near You'"></EventSlide>

                <!-- Upcoming Events -->
                <EventSlide :type="'Upcoming Events'"></EventSlide>
            </div>

            <!-- All Events -->
            <div
             class="main-window"
             v-if="window == 'events'"
            >
            Events
            </div>
        </div>
    </div>
</template>

<script>
import EventSlide from '@/components/items/EventSlide'

export default {
    name: "Home",
    components: { EventSlide },
    data: () => ({
        cover: true,
        window: "home"
    })
}
</script>

<style lang="scss" scoped>
.home {
    
    // Title Page
    .cover {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        font-family: "Georgia";

        .logo > img {
            margin-bottom: 30px;
            width: 100px;
            height: 100px;
        }

        .title {
            font-size: 40px;
            height: 100px;
        }

        .text {
            font-size: 25px;
            font-style: italic;
        }

        button {
            width: 275px;
            height: 40px;
            margin-top: 200px;
            border: 0;
            border-radius: 4px;
            background-color: #f2bb05;
            color: #FFFFFF;
            font-size: 24px;
            font-family: "Arial";
            box-shadow: 0 0 8px #f2bb05;
        }
    }

    // Home Page
    .main {
        width: 100%;
        height: 100%;
        font-family: "Arial";
        
        .header {
            display: flex;
            width: 100%;
            height: 60px;

            .switch {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50%;
                background-color: #d74e09;
                color: #FFFFFF;
                font-size: 30px;
                box-shadow: 0 0 15px #6e0e0a inset;
                z-index: 2;

                &.active{
                    box-shadow: none;
                    border-bottom: 5px solid #6e0e0a;
                }
            }
        }

        .search {
            display: flex;
            width: 100%;
            height: 40px;
            background-color: #FFFFFF;
            box-shadow: 0 0 4px #000000;
            z-index: 1;
            margin-bottom: 10px;

            img {
                height: 20px;
                width: 20px;
                padding: 10px;
            }

            input {
                border: 0;
                font-size: 18px;
                padding-left: 10px;
            }
        }

        .main-window {
            height: calc(100% - 130px);
            padding: 10px;
            overflow: scroll;
        }
    }
}
</style>


