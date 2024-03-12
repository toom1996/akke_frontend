<template>
    <View :src="state.viewSrc" :originUrl="state.originUrl" @close="close" ref="viewComponent" v-show="state.isView" />
    <div class="wrapper pt-60 px-2 md:px-4 lg:px-6 xl:px-8 2xl:mx-auto">
        <span class="text-4xl font-bold"><a href="/detail?id=123">2024/25秋冬米兰(Fear of God)男女装发布会</a></span>
        <div>
            Fear of god
        </div>
        <div>
            Ermanno Scervino米兰
        </div>
        <div class="flex flex-wrap content-between mt-4">
            <div class="flex -space-x-2">
                <div class="w-8 h-8 bg-red-600 rounded-full dark:border-gray-800 hover:z-10" src="../assets/images/users/avatar.png" alt=""></div>
                <div class="w-8 h-8 bg-red-600 rounded-full dark:border-gray-800 hover:z-10 hover:bg-black" alt=""></div>
                <div class="w-8 h-8 bg-red-600 hover:z-10 rounded-full dark:border-gray-800" src="../assets/images/users/avatar.png" alt=""></div>
                <div class="w-8 h-8 bg-red-600 hover:z-10 rounded-full dark:border-gray-800" src="../assets/images/users/avatar.png" alt=""></div>
                <div class="w-8 h-8 bg-red-600 hover:z-10 rounded-full dark:border-gray-800" src="../assets/images/users/avatar.png" alt=""></div>
                <div class="w-8 h-8 bg-red-600 hover:z-10 rounded-full dark:border-gray-800" src="../assets/images/users/avatar.png" alt=""></div>
            </div>
         </div>
         <ul class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <li v-for="(item, index) in state.dataProvider">
                <a @click="eventView(item.src)">
                    <div class="img-container relative cursor-pointer">
                        <div :class="['absolute flex items-center top-0 h-full w-full justify-center text-xs', `image-mask${index}`]">
                            <span>图片加载中...</span>
                        </div>
                        <div class='top-0 absolute w-full h-full' :id="`img-content-${index}`">
                            <img class="w-full h-full" :src="item.src" @error="handleError(index)">
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
import { gallaryIndex } from '@/api/v1';
import View from '@/components/GallaryView.vue'

interface IDataProvider {
    src: string
}

interface State {
    dataProvider: IDataProvider[],
    isView: boolean,
    viewSrc: string,
    originUrl: string
}
const state = reactive<State>({
    dataProvider: [],
    isView: false,
    viewSrc: '',
    originUrl: ''
})

const viewComponent = ref(null)

const eventView = async (src:string) => {
    console.log(src)
    state.isView = true
    state.viewSrc = src
    window.history.pushState({}, '', '/new-url');
    // state.count++
}

const close = () => {
    state.isView = false
}

onMounted(() => {
    window.addEventListener('popstate', function(event) {
  // 检查存储的页面状态
//   var pageState = sessionStorage.getItem('pageState');
//   if (pageState === 'A') {
//     // 根据需要执行操作，例如更新页面内容
//     console.log('用户点击了后退按钮，但不重新加载页面');
//   }
    console.log(viewComponent.value.close())
});
    console.log('init')
    gallaryIndex({}).then(e => {
        state.dataProvider = e.list
    })
})


const pushState = () => {
    const state = { page_id: 1, user_id: 5 };
    const url = "/detail";

    window.history.pushState({}, '', '/new-url');
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