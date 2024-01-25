<template>
    <div ref="toolBarWrapper" class="tool-bar-wrapper flex">
        <a class="btn-dark border rounded-full text-center inline-flex items-center font-medium" @click="handleClickFlilter"><IconFilter></IconFilter>筛选</a>
        <div class="search-bar flex relative justify-center flex-col grow rounded-full border">
        <div class="search-container relative flex-1">
            <div class="search-input-wrapper flex h-full">
            <div class="search-icon w-12 flex justify-center items-center">
                <IconSearch class="h-6 w-6"></IconSearch>
            </div>
            <div class="search-form flex-1 relative">
                <input type="search" name="text" autocomplete="off" autocapitalize="off" class="search-input h-full w-full absolute top-0 outline-none" placeholder="搜索工作中的创意世界" aria-label="搜索 Behance" aria-expanded="false" role="combobox" maxlength="100">
            </div>
            <div class="search-icon w-12 flex justify-center items-center">
                <IconClose class="h-6 w-6"></IconClose>
            </div>
            </div>
        </div>
        </div>
        <a class="btn-dark border rounded-full text-center inline-flex items-center font-medium"><IconFilter></IconFilter>推荐</a>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import IconClose from '@/assets/icons/IconClose.vue';

const toolBarWrapper = ref(null)
onMounted(() => {
    window.addEventListener('scroll', () => {
        console.log('滚动高度', window.pageYOffset)
        console.log('距离顶部高度', toolBarWrapper?.value?.getBoundingClientRect()?.top)
        // 获取根元素的字体大小
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

        // 定义一个rem单位的值
        const remValue = 3.5; // 例如，1rem等于根元素字体大小的两倍

        // 计算对应的像素值
        const pixelValue = remValue * rootFontSize;

        const toolBarWrapperTopInstance = toolBarWrapper?.value?.getBoundingClientRect()?.top

        if (toolBarWrapperTopInstance <= pixelValue) {
            toolBarWrapper.value.classList.value = toolBarWrapper.value.classList.value + 'fixed'
            console.log('fixed')
        }

        console.log(`${remValue}rem 等于 ${pixelValue}px`);
    });
})
</script>
