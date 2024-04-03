<template>
    <View :src="state.viewSrc" :originUrl="state.currentUrl" @close="close" ref="viewComponent" v-if="state.isView" />
    <div class="wrapper py-2 px-2 md:px-4 lg:px-6 xl:px-8 2xl:mx-auto">
        <span class="text-4xl font-bold">Fear of God | 2024/25秋冬米兰男女装发布会</span>
        <!-- <div>
            Fear of god
        </div>
        <div>
            Ermanno Scervino米兰
        </div> -->
        <!-- <div class="flex flex-wrap content-between">
            <div class="flex -space-x-2 items-center">
                <p class="pr-4 text-xs">主色调</p>
                <div class="w-8 h-8 bg-red-600 rounded-full dark:border-gray-800 hover:z-10" src="../assets/images/users/avatar.png" alt=""></div>
                <div class="w-8 h-8 bg-red-600 rounded-full dark:border-gray-800 hover:z-10 hover:bg-black" alt=""></div>
                <div class="w-8 h-8 bg-red-600 hover:z-10 rounded-full dark:border-gray-800" src="../assets/images/users/avatar.png" alt=""></div>
                <div class="w-8 h-8 bg-red-600 hover:z-10 rounded-full dark:border-gray-800" src="../assets/images/users/avatar.png" alt=""></div>
                <div class="w-8 h-8 bg-red-600 hover:z-10 rounded-full dark:border-gray-800" src="../assets/images/users/avatar.png" alt=""></div>
                <div class="w-8 h-8 bg-red-600 hover:z-10 rounded-full dark:border-gray-800" src="../assets/images/users/avatar.png" alt=""></div>
            </div>
         </div> -->
         <el-divider />
         <ul class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <li v-for="(item, index) in state.dataProvider">
                <a @click="eventView(item.url, item.viewUrl)">
                    <div class="img-container relative cursor-pointer">
                        <div :class="['absolute flex items-center top-0 h-full w-full justify-center text-xs', `image-mask${index}`]">
                            <span>图片加载中...</span>
                        </div>
                        <div class='top-0 absolute w-full h-full' :id="`img-content-${index}`">
                            <img class="w-full h-full" :src="item.url" @error="handleError(index)">
                            <!-- sdfsdfsdf -->
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { nextTick, onMounted, reactive, ref} from 'vue';
import { view } from '@/api/v1';
import View from '@/components/GallaryView.vue'
import { urlPushState } from '@/utils/helpers';

interface IDataProvider {
    url: string
    viewUrl: string
}

interface State {
    dataProvider: IDataProvider[],
    isView: boolean,
    viewSrc: string,
    currentUrl: string
}
const state = reactive<State>({
    dataProvider: [],
    isView: false,
    viewSrc: '',
    currentUrl: ''
})

const viewComponent = ref(null)

const eventView = async (src:string, viewUrl:string) => {
    console.log(src)
    state.isView = true
    state.viewSrc = src
    pushState(viewUrl)
    // state.count++
}

const close = () => {
    state.isView = false
}

onMounted(() => {
    // Fear of God | 2024/25秋冬米兰男女装发布会\
    document.title = 'GogoEx - Fear of God | 2024/25秋冬米兰男女装发布会'

    // 监听回退, 恢复url
    window.addEventListener('popstate', function(event) {
        // if (viewComponent?.value) {
        {viewComponent?.value as any}close()
        // }
    });
    console.log('init')
    view({}).then(e => {
        state.dataProvider = e.data
    })
    state.currentUrl = window.location.pathname
})

const pushState = (pushUrl:string) => {
    urlPushState(pushUrl)
}

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