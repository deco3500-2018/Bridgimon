<template>
    <div class="home frame">
        <!-- Title page -->
        <div v-if="cover" class="cover">
            <div class="logo">
                <img src="../assets/home/logo.png">
            </div>
            <div class="title">iCulture</div>
            <div class="text">Find new Culture</div>
            <button @click="cover = false">Continue</button>
            <img src="../assets/sample_events/ChineseNewYear/lanterns1.jpg">
        </div>

        <!-- Home page -->
        <div v-else class="main">

            <!-- Header -->
            <div class="header">
                <div
                 class="switch"
                 :class="{active: window == 'home'}"
                 @click="window = 'home'"
                >
                 Home
                 <div 
                  v-if="window == 'home'"
                  class="active-border"
                ></div>
                </div>
                <div
                 class="switch"
                 :class="{active: window == 'events'}"
                 @click="window = 'events'"
                >
                 Events
                 <div 
                  v-if="window == 'events'"
                  class="active-border"
                ></div>
                </div>
                
            </div>

            <!-- Home Events -->
            <div
             class="main-window"
             v-if="window == 'home'"
            >
                <!-- Search Bar -->
                <div class="search">
                    <SearchBar></SearchBar>
                </div>

                <!-- Popular Events -->
                <EventSlide :type="'Popular Events'"></EventSlide>

                <!-- Events Near You -->
                <EventSlide :type="'Events Near You'"></EventSlide>

                <!-- Upcoming Events -->
                <EventSlideVertical></EventSlideVertical>
            </div>

            <!-- All Events -->
            <div
             class="main-window"
             v-if="window == 'events'"
            >
                <!-- Search Bar -->
                <div class="search">
                    <SearchBar></SearchBar>
                </div>

                <!-- Select continents and countries -->
                <div class="select-header">Origin</div>
                <SelectArea></SelectArea>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/items/SearchBar'
import EventSlide from '@/components/items/EventSlide'
import EventSlideVertical from '@/components/items/EventSlideVertical'
import SelectArea from '@/components/items/SelectArea'




export default {
    name: "Home",
    components: { EventSlide, SearchBar, EventSlideVertical, SelectArea },
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
        position: relative;
        opacity: 0.9;

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
            height: 60px;
            margin-top: 200px;
            border: 0;
            border-radius: 30px;
            background-color: #323232;
            color: #FFFFFF;
            font-size: 24px;
            box-shadow: 0 0 8px #323232;
        }

        > img {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.3;
        }
    }

    // Home Page
    .main {
        width: 100%;
        height: 100%;
        font-family: "Georgia";
        display: flex;
        flex-direction: column;
        align-items: center;
  

        .header {
            display: flex;
            width: 100%;
            height: 80px;
            background-color: #323232;
            justify-content: space-around;

            .switch {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: flex-end;
                position: relative;
                width: 40%;
                color: #FFFFFF;
                font-size: 24px;
                z-index: 2;

                &.active{
                    color: #d74e09;
                }

                .active-border {
                    // position: absolute;
                    // bottom: -2.5px;
                    height: 5px;
                    width: 100%;
                    border-radius: 5px;
                    background-color: #d74e09;
                }
            }
        }

        .main-window {
            height: calc(100% - 80px);
            width: 100%;
            overflow: scroll;
            padding-left: 10px;

            .search {
                display: flex;
                justify-content: center;
                margin-right: 10px;
            }

            .select-header {
                text-align: center;
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 30px;
            }
        }


    }
}
</style>
