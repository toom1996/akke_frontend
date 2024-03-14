<template>
    <div v-show="isShow" class="fixed inset-0 flex z-50" x-data="{ isOpen: false }">
            <!-- 抽屉背景，透明的灰色背景 -->
            <div class="fixed inset-0 bg-black opacity-50" x-show="isOpen" @click="close()"></div>

            <!-- 抽屉主体，包含内容 -->
            <div class="fixed inset-y-0 right-0 w-64 bg-white shadow-lg" x-show="isOpen">
                <div class="p-4">
                <!-- 抽屉内容 -->
                <h2 class="text-lg font-semibold mb-4">Drawer Content</h2>
                <p>这里是抽屉内容。</p>
                </div>
            </div>

            <!-- 切换抽屉的按钮 -->
            <button class="fixed top-0 right-0 m-4 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
</template>
<script setup>

const emit = defineEmits(["closeFilter"])

defineProps({
    isShow: false,

})
const close = () => {
    console.log('close')
    emit('closeFilter', false)
}
</script>