<template>
    <div class="ay_loading_toast" >
        <div class="ay_mask_transparent"></div>
        <div class="ay_toast" style="position: absolute;">
            <div class="loading-box"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "xl_order_loading"
    }
</script>

<style scoped>
    .ay_loading_toast {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background-color: #f5f5f5;
    }
    .ay_mask_transparent {
        z-index: 5001;
    }
     .ay_mask_transparent {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .ay_toast {
        background: transparent;
        margin-top: -70px;
        top: 50%;
    }
    .ay_toast {
        z-index: 50000;
        width: 7.6em;
        min-height: 7.6em;
        left: 50%;
        text-align: center;
        border-radius: 5px;
        color: #fff;
        transform: translateX(-50%);
        margin-left: 0!important;
    }
    .loading-box {
        display: flex;
        align-items: center;
        margin: 0 auto;
        background-color: #f5f5f5;
        border-radius: 6px;
        background-image: url('../../assets/images/xl_home_img/loading3.gif');
        background-size: 120px;
        width: 120px;
        height: 120px;
        background-repeat: no-repeat;
    }

</style>