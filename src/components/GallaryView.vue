<template>
    <div @click="close" class="fixed top-0 left-0 h-screen w-screen bg-black overflow-x-auto z-50 ">
        <div class="h-full flex">
          <img class="h-full mx-auto" :src="src">
        </div>
    </div>
</template>
<script setup lang="ts">
import { urlPushState } from '@/utils/helpers';
import { onMounted, reactive } from 'vue';


const emit = defineEmits(["close"])


interface stateInterface {
  src: string
  originUrl: string
}
const props = defineProps<stateInterface>()

const close = () => {
    var mo = function (e: any) {
    e.preventDefault()
  }
  document.body.style.overflow = '' //出现滚动条
  document.removeEventListener('touchmove', mo, false)
  urlPushState(props.originUrl)
    emit("close", false)
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
        close
    })

</script>