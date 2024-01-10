<template>
    <div class="wrapper pt-60 px-2 md:px-4 lg:px-6 xl:px-8 2xl:mx-auto">
        <ul class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <li v-for="(item, index) in state.dataProvider">
                <div class="img-container relative">
                    <div class="img-content top-0 absolute w-full h-full">
                        <img class="w-full h-full" :src="item.src">
                        <!-- sdfsdfsdf -->
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { gallaryIndex } from '@/api/v1';

interface IDataProvider {
    src: string
}

interface State {
    dataProvider: IDataProvider[]
}
const state = reactive<State>({
    dataProvider: []
})

onMounted(() => {
    gallaryIndex({}).then(e => {
        state.dataProvider = e.list
    })
})
</script>
<style>
.img-body {
    @apply absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.img-container {
    margin-bottom: 16px;
    padding-top: 150%;
    background: #f7f7f7;
}
</style>