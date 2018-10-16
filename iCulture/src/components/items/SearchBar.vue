<template>
    <div class="search-bar">
        <img src="../../assets/home/search.svg">
        <input placeholder="Find new Culture!">
    </div>
</template>

<script>
export default {
    name: "SearchBar"
}
</script>

<style lang="scss" scoped>
.search-bar {
    width: 300px;
    height: 25px;
    background-color: #F0F0F0;
    margin: 15px 0;
    border-radius: 10px;

    img {
        width: 10px;
        height: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }

    input, input:focus {
        height: 100%;
        width: 250px;
        background-color: #F0F0F0;
        border: none;
        outline: none;
    }

    
}
</style>
