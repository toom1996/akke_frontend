<template>
    <View @close="close" ref="componentView" v-if="state.isView" />
    <div class="wrapper pt-60 px-2 md:px-4 lg:px-6 xl:px-8 2xl:mx-auto">
        <ul class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <li v-for="(item, index) in state.dataProvider">
                <div class="img-container relative cursor-pointer" @click="view">
                    <div :class="['absolute flex items-center top-0 h-full w-full justify-center text-xs', `image-mask${index}`]">
                        <span>图片加载中...</span>
                    </div>
                    <div class='top-0 absolute w-full h-full' :id="`img-content-${index}`">
                        <img class="w-full h-full" :src="item.src" @error="handleError(index)">
                        <!-- sdfsdfsdf -->
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { gallaryIndex } from '@/api/v1';
import View from '@/components/GallaryView.vue'

interface IDataProvider {
    src: string
}

interface State {
    dataProvider: IDataProvider[],
    isView: boolean
}
const state = reactive<State>({
    dataProvider: [],
    isView: false,
})
const componentView = ref(null)
const view = async () => {
    state.isView = true
    console.log(componentView)
}

const close = () => {
    state.isView = false
}

onMounted(() => {
    gallaryIndex({}).then(e => {
        state.dataProvider = e.list
    })
})

const handleError = (index:number) => {
  var elementToRemove = document.getElementById(`img-content-${index}`); // 获取要删除的元素
  document.getElementsByClassName
  elementToRemove?.remove(); // 直接移除该元素
  document.getElementsByClassName(`image-mask${index}`)[0].innerHTML = '<span>This image is temporary unavailable</span>'
};

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