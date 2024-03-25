<template>
    <div class="my-8 flex items-center justify-center">
        <el-pagination class="my-8" background layout="prev, pager, next" :current-page="currentPage" :total="total" @current-change="handleCurrentChange"/>
    </div>
</template>
<script setup lang="ts">
const emit = defineEmits(["changePage"])

interface stateInterface {
  total: Number
  currentPage: Number
}
const props = defineProps<stateInterface>()

const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  emit("changePage", val)
}
</script>