<template>
    <div>
        <van-dropdown-menu active-color="#ee0a24">
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
    </div>
</template>

<script>
    export default {
        name: "nextNav",
        data() {
            return {
                value1: 0,
                value2: 'a',
                option1: [
                    { text: '全部景点', value: 0 },
                    { text: '热门景点', value: 1 }
                ],
                option2: [
                    { text: '综合排序', value: 'a' },
                    { text: '价格从高到低', value: 'b' },
                    { text: '价格从低到高', value: 'c' },
                ]
            }
        }

    }
</script>

<style scoped>

</style>