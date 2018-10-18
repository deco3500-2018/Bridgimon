<template>
    <div class="video-list">
        <a class="video-panel" 
         v-for="(videoInfo, index) in sample_videoPaths"
         :href="videoInfo.link"
         :key="index">
            <div class="title">{{ videoInfo.title }}</div>
            <img class="video-image" :src="videoInfo.imagePath">
            <img class="icon" src="../../assets/other/start_icon.svg">
        </a>
    </div>
</template>

<script>
export default {
    name: "VideoList",
    data: () => ({
        sample_videoPaths: [
            {
                title: "A VR New Years in Hong Kong",
                imagePath: "http://i.ytimg.com/vi/Rrq_xBfgQMM/hqdefault.jpg",
                link: "https://www.youtube.com/watch?v=Rrq_xBfgQMM"
            },
            {
                title: "Chinese New Year Lion Dance 360 Video Virtual Reality",
                imagePath: "http://i.ytimg.com/vi/qFBnUhIwHUQ/hqdefault.jpg",
                link: "https://www.youtube.com/watch?v=qFBnUhIwHUQ&feature=youtu.be&t=16"
            },
            {
                title: "360° 4K SAN FRANCISCO CHINESE NEW YEAR PARADE (VR)",
                imagePath: "http://i.ytimg.com/vi/LAYqf_KTlUQ/hqdefault.jpg",
                link: "https://www.youtube.com/watch?v=LAYqf_KTlUQ"
            },
            
        ]
    })
}
</script>

<style lang="scss" scoped>
.video-list {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .video-panel {
        position: relative;
        margin-bottom: 25px;
        width: 340px;
        height: 250px;
        overflow-x: hidden;
        text-decoration: none;

        .title {
            font-family: Georgia, 'Times New Roman', Times, serif;
            color: #040f16;
            padding-left: 10px;
        }

        .video-image {
            width: 340px;
            height: 180px;
            border-radius: 20px;
        }

        .icon {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 100px;
            left: 145px;
            color: #FFFFFF;
            opacity: 0.7;
        }
    }

    
}
</style>
