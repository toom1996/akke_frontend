<template>
  <div class="wrapper pt-60 px-2 md:px-4 lg:px-6 xl:px-8 2xl:mx-auto">
    <ul class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <li v-for="(item, index) in state.dataProvider">
        <div class="cover-container relative">
            <div class="cover-content">
              <div :class="['flex items-center justify-center absolute w-full bottom-0 left-0 top-0 right-0 text-xs', `cover-mask${index}`, state.isInit == false ? 'animate-pulse' : '']">
                <span>loading...</span>
              </div>
              <div v-show="state.isInit" :id="`cover-${index}`">
                <picture class="ProjectCoverNeue-picture-NuE h-full w-full absolute top-0">
                  <source media="(min-width: 1200px)" :srcset="getSrcSet(item.cover)"/>
                  <!-- <source media="(min-width: 800)" :srcset="getWebpSrcSet(item.cover)" type="image/webp" /> -->
                  <img :src="item.cover" class="h-full w-full object-cover" :alt="item.title" @error="handleError(index)" loading="lazy"/>
                </picture>
              </div>
            </div>
          </div>
          <div class=" flex justify-between">
            <div class="">
              <span>
                <a :href="item.src" class="text-xs font-bold">{{ item.brand_srt }} - {{ item.title }} | Social Media</a>
                <div class="text-xs" >
                    <a href="https://www.behance.net/mahdyhasanhridoy?tracking_source=search_projects">
                      Mahdy Hasan Hridoy
                    </a>
                </div>
              </span>
            </div>
            <div class="detail-wrapper">
              <div class="detail-content">
                <MaterialSymbolsAddPhotoAlternateOutline class="img" />
                <span title="647">{{ item.img_count }}</span>
              </div>
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, computed } from "vue";
import MdiLightEye from '@/assets/icons/MdiLightEye.vue';
import { mainSearch } from '@/api/v1';
import MaterialSymbolsAddPhotoAlternateOutline from '../../assets/icons/MaterialSymbolsAddPhotoAlternateOutline.vue'
interface IDataProvider {
  title: string,
  cover: string,
  src: string,
  img_count: number,
  brand_srt: string
}

interface State {
  isInit: boolean,
  dataProvider: IDataProvider[]
}
const state = reactive<State>({
  isInit: false,
  dataProvider: [],
})

const handleError = (index:number) => {
  var elementToRemove = document.getElementById(`cover-${index}`); // 获取要删除的元素
  document.getElementsByClassName
  elementToRemove?.remove(); // 直接移除该元素
  document.getElementsByClassName(`cover-mask${index}`)[0].innerHTML = '<span>This image is temporary unavailable</span>'
};

const getSrcSet = (src:string):string => {
  // https://aliyun-img.hypebeast.cn/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2023%2F08%2FLB_3x2_01.jpg?q=85 808w,
  // https://aliyun-img.hypebeast.cn/https%3A%2F%2Fhbx.hypebeast.com%2Ffiles%2F2023%2F08%2FLB_3x2_01.jpg?q=85 404w,
  //                     https://mir-s3-cdn-cf.behance.net/projects/202_webp/dde47c184704669.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png 202w,
  //                     https://mir-s3-cdn-cf.behance.net/projects/230_webp/dde47c184704669.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png 230w,
  //                     https://mir-s3-cdn-cf.behance.net/projects/115_webp/dde47c184704669.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png 115w
  //                   "

  // http://toomhub.image.23cm.cn/005PuN3Egy1go4g3gmnjlj30a00f0gp0.jpg_1614762182619_0.4770089478803292 808w
  // imageView2/0/format/webp/q/75
  return `${src}123 808w,
  ${src}123 404w,
  ${src}123 202w,
  ${src}123 230w,
  ${src}123 115w`
}

onMounted(() => {
  mainSearch({}).then(e => {
    state.isInit = true
    console.log(e.list)
    state.dataProvider = e.list
  })
});
</script>
<style>
.cover-container {
  @apply mb-1;
}

.detail-content {
  @apply font-bold flex items-center text-xs leading-7;
}

.cover-content::before {
  display: block;
  content: "";
  width: 100%;
  padding-top: 56.25%;
  background-color: rgb(241, 241, 241)
}

@media screen {
  
}
</style>