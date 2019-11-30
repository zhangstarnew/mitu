<template>
    <div class="xl-loading">
        <div class="ay_loading_toast data-loading" >
            <div class="ay_mask_transparent"></div>
            <div class="ay_toast" style="position: absolute;">
                <div class="loading-box">
                    <img src="../../assets/images/xl_home_img/loading.gif">
                    <p class="ay_toast_content">
                        努力加载中
                    </p>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "xl_loding"
    }
</script>

<style scoped>
    .xl-loading{
        height: 100%;
        width: 100%;
        background-color: #f5f5f5;
    }
     .ay_mask_transparent {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
         /*z-index: 999;*/
    }
     .data-loading.ay_loading_toast .ay_toast {
         margin-top: -45px;
         width: 90px;
         height: 90px;
         min-height: 90px;
     }
    .data-loading .ay_mask_transparent {
        background-color: transparent;
    }
    .ay_mask_transparent {
        z-index: 5001;
    }
     .ay_loading_toast .ay_toast {
         background: transparent;
         top: 50%;
     }
     .ay_toast {
         z-index: 50000;
         top: 180px;
         left: 50%;
         text-align: center;
         border-radius: 5px;
         color: #fff;
     }
     .ay_toast {
         transform: translateX(-50%);
         margin-left: 0!important;
     }
     .loading-box {
         align-items: center;
         margin: 0 auto;
         width: 100px;
         height: 100px;
         background-color: #f5f5f5;
         border-radius: 6px;
     }
     .loading-box img {
         display: block;
         margin: 0 auto;
         width: 60px;
         border: none;
     }
    .ay_toast_content{
        color: #333333;
    }
</style>