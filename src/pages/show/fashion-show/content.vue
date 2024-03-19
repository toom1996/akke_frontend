<style scoped>
.updates__card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    /* background-size: 100%; */
    background-position-x: center;
    background-position-y: 0%;
    background-repeat: no-repeat;
    transition: all ease-in-out .2s;
}
.updates__card:hover {
    --tw-scale-x: 1.03;
    --tw-scale-y: 1.03;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}


.updates__card-gradient {
    background: linear-gradient(0deg, #ffffff 5%, rgba(255, 255, 255, 0) 100%);
    border-bottom-right-radius: var(--arbutus-border-radius-accent);
    border-bottom-left-radius: var(--arbutus-border-radius-accent);
}
.updates__card:hover .updates__card-content {
    bottom: 0;
}
.updates__card-link {
    transition: all ease-in-out .25s;
    transition-delay: .15s;
    opacity: 0;
}
.updates__card:hover .updates__card-link {
    opacity: 1;
}
.text__color--action {
    color: var(--arbutus-color-action);
}
.updates__card-content {
    position: relative;
    z-index: 1;
    bottom: -16px;
    transition: all ease-in-out .25s;
    padding-bottom: 16px;
}
.tile--padding-relaxed {
    padding: 32px;
}
.tile {
    --tile-shadow: 0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .14), inset 0 0 0px 2px transparent;
    --tile-shadow-hover: 0 0 2px rgba(0, 0, 0, .12), 0 8px 16px rgba(0, 0, 0, .14), inset 0 0 0px 5px #ffffff;
    --accent-border-width: 3px;
    --arbutus-border-radius-accent: 22px;
    text-decoration: none;
    z-index: 1;
    position: relative;
    background-color: #fff;
    border-top-left-radius: var(--arbutus-border-radius-accent);
    border-top-right-radius: var(--arbutus-border-radius-accent);
    border-bottom-right-radius: var(--arbutus-border-radius-accent);
    border-bottom-left-radius: var(--arbutus-border-radius-accent);
    box-shadow: var(--tile-shadow);
    transition: all ease-in-out .25s;
    cursor: pointer;
}

.tile:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, .12), 0 8px 16px rgba(0, 0, 0, .14), inset 0 0 0px 0px #ffffff;
}

.shop-filter-sort-by__dropdown {
    right: 0;
    position: absolute;
    background-color: #fff;
    z-index: 3;
    transition: all .3s cubic-bezier(0.22,0.61,0.36,1);
    border: 1px solid #dedede;
    transition: all .3s cubic-bezier(0.22,0.61,0.36,1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
}

.shop-filter-sort-by__dropdown li {
    display: block;
    border-bottom: 1px solid #dedede;
}

.shop-filter-button__btn {
    @apply text-lg px-3;
    border: 1px solid #000000;
    background-color: transparent;
}
.i-mdi-light-format-list-bulleted {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M20 18v1H7v-1zm-16.5-.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M20 12v1H7v-1zm-16.5-.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M20 6v1H7V6zM3.5 5.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1'/%3E%3C/svg%3E");
  -webkit-mask: var(--un-icon) no-repeat;
  mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  background-color: currentColor;
  color: inherit;
  width: 1.2em;
  height: 1.2em;
}
</style>
<template>
    <div class="container px-0 m-auto">
        <BreadCrumb :path="state.path"></BreadCrumb>
        <div class="px-2 md:px-4 lg:px-6 xl:px-8">
            <div class="flex">
                <div class="shop-filter flex justify-between align-items-center mb-4 flex-1	">
                    <div class="shop-filter-default flex justify-content-between align-items-center">
                        <div class="shop-filter-count d-none d-sm-block text-lg">为您找到了{{ state.dataProvider.total }}条结果</div>
                    </div>
                    <!-- <div class="shop-filter-sort-by"><div class="shop-filter-sort-by__label"><span>Sort by Default</span><i class="lastudioicon-down-arrow"></i></div><ul class="shop-filter-sort-by__dropdown"><li class="active"><a href="#">Sort by Default</a></li><li><a href="#">Sort by Popularity</a></li><li><a href="#">Sort by Rated</a></li><li><a href="#">Sort by Latest</a></li><li><a href="#">Sort by Price:<i class="lastudioicon-arrow-up"></i></a></li><li><a href="#">Sort by Price:<i class="lastudioicon-arrow-down"></i></a></li></ul></div> -->
                </div>
                <div class="shop-filter-button"><button @click="state.isShowFilter = !state.isShowFilter" class="shop-filter-button__btn shop-filter-toggle flex items-center cursor-pointer"><span>筛选</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg></button></div>
            </div>
            <div class="updates__grid grid auto-rows-[32rem] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:mx-auto">
                <a target="_blank" v-for="item, index in state.dataProvider.list" class="tile tile--padding-relaxed updates__card bg-cover border-solid" :style="{ 'background-image': 'url(' + item.cover + ')' }" :href="`${'/v/' + item.hash}`">
                    <span class="updates__card-content">
                        <p class="text-2xl font-bold mt0 mb4">{{ item.brand }}</p>
                        <div class="text-sm font-semibold mt0 mb4 updates__card-description">
                            {{ item.title }}
                        </div>
                        <div class="text--body-2 text__color--action mt0 updates__card-link">查看更多 →</div>
                    </span>
                    <span aria-hidden="true" class="updates__card-gradient absolute bottom-0 left-0 w-full h-48"></span>
                </a>
            </div>
        </div>
        <Drawer :isShow="state.isShowFilter" @closeFilter="closeFilter()"></Drawer>
    </div>
    Scroll down to see the bottom-right button.
  <el-backtop :right="100" :bottom="100" />
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { fashionShow } from '@/api/v1';
import BreadCrumb from '@/components/BreadCrumb.vue'
import Drawer from '@/components/Drawer.vue';

interface DataProviderDataList{
    brand: string
    title: string
    cover: string
    hash: string
}

interface DataProvider {
    list: DataProviderDataList[]
    total: number
}

interface State {
    dataProvider: DataProvider
    isShowFilter: boolean
    path: string[]
}
const state = reactive<State>({
    dataProvider: {
        list: [],
        total: 0
    },
    isShowFilter: false,
    path: ['秀场', '时装发布会']
})

onMounted(() => {
    getIndex()
})

const closeFilter = () => {
    console.log('closeFilter')
    state.isShowFilter = false
}
const getIndex = () => {
    fashionShow({}).then((e) => {
        state.dataProvider = e.data
        console.log(state.dataProvider)
    })
}
</script>