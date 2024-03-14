<style scoped>
.breadcrumb-wrapper__items {
  flex-wrap: wrap;
  margin-top: 12px;
}

.breadcrumb-wrapper__items li:not(:last-child)::after {
  content: ">";
  line-height: 1;
  color: #886e6e;
  margin: 0 10px;
}

.breadcrumb-wrapper__items li {
  position: relative;
}
</style>
<template>
  <ul class="breadcrumb-wrapper__items flex justify-center text-xl pb-8">
    <li><a href="/">首页</a></li>
    <li v-for="item in path">
        <span>{{ item }}</span>
    </li>
  </ul>
</template>
<script setup>
defineProps({
    path: Array
});

</script>
