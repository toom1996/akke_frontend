<style scoped>
.wrapper {
  border-right: 1px solid #e1e1e1;
  height: calc(100vh - 55px);
  /* overflow-x: hidden; */
  /* overflow-y: auto; */
  padding: 20px;
  padding-bottom: 40px;
  position: sticky;
  top: calc(55px - 1px);
  /* width: 330px; */
}
</style>
<template>
  <div class="wrapper min-w-[300px]">
    <div data-fc-type="accordion">
      <h2 v-for="item, index in state.dataProvider" id="accordion-collapse-heading-1" class="bg-white" data-fc-type="collapse" @click="handleCollapseOpen">
        <button type="button" class="icon fc-collapse-open:text-primary flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border-b">
          <span>{{ item.title }}</span>
          <IconArrow class="arrow transition-transform duration-300" />
        </button>
      </h2>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconArrow from '@/assets/icons/IconArrow.vue';
import { onMounted, reactive } from 'vue';

const state = reactive({
    dataProvider: [
        {
            title: '区域',
            items: [{
                
            }]
        },
        {
            title: '品牌',
            items: [{

            }]
        },
        {
            title: '分类',
            items: [{

            }]
        }
    ]
})

onMounted(() => {
    document.querySelectorAll('.icon').forEach(function(icon) {
    icon.addEventListener('click', function() {
        console.log(icon)
    });
});
})

const handleCollapseOpen = (el: any) => {
    // console.log(el.target.querySelector('.arrow'))
    const arrow = el.target.querySelector('.arrow');
    if (arrow) {
        arrow.classList.toggle('rotate-90');
    }
}
</script>
