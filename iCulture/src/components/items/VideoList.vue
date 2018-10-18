<template>
    <div class="video-list">
        <div class="video-panel" 
         v-for="(videoPath, index) in sample_videoPaths"
         
         :key="index">
            <iframe
             @click.stop="goYoutube"
             :src="videoPath"
             frameborder="0" 
             allow="vr"
             allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "VideoList",
    data: () => ({
        sample_videoPaths: [
            "https://www.youtube.com/embed/Rrq_xBfgQMM?ecver=2",
            "https://www.youtube.com/embed/qFBnUhIwHUQ?ecver=2",
            "https://www.youtube.com/embed/LAYqf_KTlUQ?ecver=2"
        ]
    }),
    methods: {
        goYoutube() {
            console.log("test");
        }
    }
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
        margin-bottom: 75px;
        border-radius: 20px;
        width: 340px;
        height: 180px;
        overflow-x: hidden;

        iframe {
            width: 340px;
            height: 180px;
        }
    }

    
}
</style>
