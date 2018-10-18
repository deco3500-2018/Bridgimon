<template>
    <div class="select-area">
        <div 
         class="select-continent"
         v-if="select == 'Continent'"
        >
            <div class="continent-panel">
                ASIA
            </div>
            <div class="continent-info">
                <div class="number-countries">48 Countries</div>
                <div class="number-event">4 upcoming near events</div>
            </div>
        </div>

        <div 
         class="select-country"
         v-if="select == 'Country'"
        >
            <CountryPanel 
             v-for="(country, index) in sample_countries" 
             :key="index"
             :country="country"
            ></CountryPanel>
        </div>

        <Button
         class="select-button"
         @click="changeSelection"
        > SELECT</Button>
    </div>
</template>

<script>
import CountryPanel from '@/components/items/CountryPanel'

export default {
    name: "SelectArea",
    components: { CountryPanel },
    data: () => ({
        select: "Continent",
        sample_countries: [
            {
                name: "CHINA",
                imagePath: require("../../assets/home/Countries/china.svg")
            },
            {
                name: "INDIA",
                imagePath: require("../../assets/home/Countries/india.svg")
            },
            {
                name: "INDONESIA",
                imagePath: require("../../assets/home/Countries/indonesia.svg")
            },
            {
                name: "JAPAN",
                imagePath: require("../../assets/home/Countries/japan.svg")
            }
        ]
    }),
    methods: {
        changeSelection() {
            switch(this.select){
                case "Continent":
                    this.select = "Country"
                    break
                case "Country":
                    this.select = "Continent"
                    break
                default:
                    this.select = "Continent"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.select-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: calc(100% - 115px);
    margin-top: 10px;
    margin-right: 10px;

    .select-continent {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100% + 20px);
        
        .continent-panel {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 225px;
            background-color: #F0F0F0;
            border-radius: 10px;
            box-shadow: 0 0 20px #F0F0F0;
            font-weight: bold;
        }

        .continent-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;

            .number-countries {
                font-weight: bold;
            }

            .number-event {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 12px;
            }
        }
    }

    .select-country {
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
    }

    .select-button {
        position: fixed;  
        bottom: 100px;
        width: 150px;
        height: 40px;
        border: 0;
        border-radius: 30px;
        background-color: #323232;
        color: #FFFFFF;
        font-size: 16px;
    }
}
</style>
