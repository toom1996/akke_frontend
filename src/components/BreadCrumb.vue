<style scoped>
.breadcrumb-wrapper__items {
  flex-wrap: wrap;
  /* margin-top: 12px; */
}

.breadcrumb-wrapper__items li:not(:last-child)::after {
  content: ">";
  line-height: 1;
  color: #ffffff;
  margin: 0 10px;
}

.breadcrumb-wrapper__items li {
  position: relative;
}
</style>
<template>
  <!-- <div class="p-8 lg:p-20 bg-blue-700 rounded-4xl lg:rounded-6xl">
    <div>
      <div class="inline-flex items-center gap-4">
        <div class="w-20 h-1 bg-white hidden md:block"></div>
        <span class="text-xs font-semibold tracking-wide uppercase text-white"
          >Outkast</span
        >
      </div>
      <ul
        class="breadcrumb-wrapper__items flex justify-center font-semibold mt-8 text-4xl font-display md:text-6xl lg:text-9xl text-white"
      >
        <li class="font-display font-semibold">首页</li>
        <li v-for="item in path">
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div> -->
  <div class="border-b pb-3">
    <div>
      <p class="text-lg lg:text-3xl tracking-wide font-semibold text-black md:mt-0 font-display">
      <span class="text-lg lg:text-3xl tracking-wide font-semibold text-black md:mt-0 font-display" >首页</span>
      / <span>秀场</span>
      / <span>时装发布会</span>
    </p>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup>
defineProps({
  path: Array,
});
</script>
