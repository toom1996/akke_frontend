<template>
    <div class="my-8 flex items-center justify-center">
        <el-pagination class="my-8" background layout="prev, pager, next" :total="total" />
    </div>
</template>
<script setup lang="ts">
interface stateInterface {
  total: Number
}
const props = defineProps<stateInterface>()
</script>