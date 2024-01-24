<style scoped>
.wrapper {
  border-right: 1px solid #e1e1e1;
  height: calc(100vh - 55px);
  /* overflow-x: hidden; */
  /* overflow-y: auto; */
  /* padding: 20px; */
  padding-bottom: 40px;
  position: sticky;
  top: calc(55px - 1px);
  /* width: 330px; */
}
</style>
<template>
  <div :class="['wrapper duration-300 overflow-hidden']">
    <div data-fc-type="accordion" class="min-w-[250px]">
      <h2 v-for="item, index in state.dataProvider" id="accordion-collapse-heading-1" class="bg-white" data-fc-type="collapse">
        <button @click="handleCollapseOpen(index)" type="button" class="icon fc-collapse-open:text-primary flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border-b">
          <span class="font-bold">{{ item.title }}</span>
          <IconArrow :id="`arrow-${index}`" class="arrow transition-transform duration-300" />
        </button>
        <div>
          <fieldset v-if="item.params == 'area'">
            <legend>搜索区域</legend>
            <Select></Select>
          </fieldset>
          <fieldset>
            <legend>热门区域</legend>
            <div v-for="city in item.items">
              {{ city.label }}
            </div>
          </fieldset>
        </div>
      </h2>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconArrow from '@/assets/icons/IconArrow.vue';
import { onMounted, reactive, ref } from 'vue';
import Select from '../Select.vue';

interface dataProvider {
  title: string,
  params: string
  items: {
    label:string
  }[]
}

interface State {
  isInit: boolean,
  dataProvider: dataProvider[]
}

const state = reactive<State>({
    isInit: false,
    dataProvider: [
        {
            title: '区域',
            params: 'area',
            items: [
              {
                label: 'tokyo'
              },
              {
                label: 'new york'
              },
              {
                label: 'L.A'
              }
          ]
        },
        {
            title: '品牌',
            params: 'brand',
            items: [{
              label: 'Adidas'
            }]
        },
        {
            title: '分类',
            params: 'category',
            items: [{
              label: '婚礼礼服'
            }]
        }
    ]
})

const wrapperRef = ref(null)

onMounted(() => {
    
})

const handleCollapseOpen = (index:number) => {
  const arrow = document.getElementById(`arrow-${index}`)
    // const arrow = el.target.querySelector('.arrow');
    if (arrow) {
        arrow.classList.toggle('rotate-90');
    }
}
</script>
