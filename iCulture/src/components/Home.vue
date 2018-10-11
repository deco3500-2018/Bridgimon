<template>
    <div class="home frame">
        <div v-if="cover" class="cover">
            <div class="logo">
                <img src="../assets/logo.png">
            </div>
            <div class="title">iCulutre</div>
            <div class="text">Find new Culture</div>
            <button @click="cover = false">Continue</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data: () => ({
        cover: true,
    })
}
</script>

<style lang="scss" scoped>
.home {
    

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
            border: 1px solid #000000;
            border-radius: 4px;
            background-color: #f2bb05;
            color: #FFFFFF;
            font-size: 24px;
            font-family: "Georgia";
        }
    }
}
</style>


