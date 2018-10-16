<template>
    <router-link 
     class="country-panel"
     to="EventList"
    >
        {{ country.name }}
    </router-link>
</template>

<script>
export default {
    name: "CountryPanel",
    props: ["country"]
}
</script>

<style lang="scss" scoped>
.country-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 150px;
    margin: 10px;
    background-color: #F0F0F0;
    border-radius: 10px;
    box-shadow: 0 0 20px #F0F0F0;
    font-weight: bold;
    color: #040f16;
}

.country-panel:hover {
    text-decoration: none;
}

</style>


