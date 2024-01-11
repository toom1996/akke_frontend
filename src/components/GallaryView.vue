<template>
    <div @click="close" class="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 overflow-x-auto">
        1231231231312
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

const emit = defineEmits(["close"])

const close = () => {
    var mo = function (e) {
    e.preventDefault()
  }
  document.body.style.overflow = '' //出现滚动条
  document.removeEventListener('touchmove', mo, false)
    emit("close", false)
}

const test = () => {
    console.log('test')
}

onMounted(() => {
    console.log('11111111')
    var mo = function (e) {
    e.preventDefault()
  }
    document.body.style.overflow = 'hidden'
  document.addEventListener('touchmove', mo, false) //禁止页面滑动
})

defineExpose({
    test
})
</script>