<template>
    <div @click="close" class="fixed top-0 left-0 h-screen w-screen bg-black overflow-x-auto z-50">
        <div class="container">
          <img :src="src">
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, type Ref } from 'vue';


const emit = defineEmits(["close"])


interface stateInterface {
  src: string
}
defineProps<stateInterface>()

const close = () => {
    var mo = function (e: any) {
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
    var mo = function (e: any) {
    e.preventDefault()
  }
    document.body.style.overflow = 'hidden'
  document.addEventListener('touchmove', mo, false) //禁止页面滑动
})

defineExpose({
    test
})
</script>