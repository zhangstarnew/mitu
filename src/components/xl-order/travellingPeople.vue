<template>
    <div class="white-header">
        <div class="white-header">
            <div class="ay-header">
                <div class="ay-header-left">
                    <a class="ay-header-back v-transition" style="display: none;"></a>
                    <div class="left-arrow v-transition" style="display: none;"></div>
                    <a slot="left">取消</a>
                </div>
                <h1 class="ay-header-title">
                    <span class="v-transition" style="display: none;"></span>
                    <p>选择出行人</p>
                </h1>
                <div class="ay-header-right">
                    <a slot="right">完成</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "travellingPeople"
    }
</script>

<style scoped>

</style>