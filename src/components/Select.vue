<style scoped>
</style>
<template>
<div :class="['sel-input relative', 'select', { 'name-input': name }]">
    <!-- <span v-if="name">{{ name }}</span> -->
    <div class="flex border border-slate-200 focus-within:border focus-within:border-slate-900">
        <input class="px-4 outline-none py-2 w-full h-[32px] group" type="text" :value="state.inputText" @focus="inputFocus" @blur="inputBlur" @mousedown="inputMD" :placeholder="placeholder" />
        <div v-if="state.inputText" class="search-icon w-12 flex justify-center items-center">
              <IconClose class="h-6 w-6"></IconClose>
        </div>
    </div>
    <div class="sel-list scroll absolute bg-white w-full max-h-[8rem] overflow-y-scroll border-t-0 border border-slate-900" v-show="state.isShow" tabindex="99">
        <!-- <span class="p-4">抱歉, 我们未找到与""相关的结果。</span> -->
        <ul>
            <li class="p-2 hover:bg-black hover:text-white" v-for="item in state.dataProvider">{{ item.label }}</li>
        </ul>
    </div>
</div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import IconClose from '@/assets/icons/IconClose.vue';

interface stateInterface {
    isShow?:boolean,
    name?: string,
    inputText?: string,
    placeholder?: string,
    dataProvider?: {
        label: string,
        value: string
    }[]
}

const state = reactive<stateInterface>({
    isShow: false,
    name: '',
    inputText: '',
    placeholder: '',
    dataProvider: [
        {
            label: '中国',
            value: '1',
        },
        {
            label: '米国',
            value: '12',
        },{
            label: '米国',
            value: '12',
        },{
            label: '米国',
            value: '12',
        },{
            label: '米国',
            value: '12',
        }
    ]
})
defineProps<stateInterface>()

const inputFocus = () => {
    console.log('focus')
    state.isShow = true
        // if(this.evTag!="imd") {
        //     this.show = true;
        // } else {
        //     this.evTag = "";
        // }
}

const inputBlur = () => {
    console.log('blur')
    state.isShow = false
}

const inputMD = () => {

}

		// inputMD(){
		// 	this.evTag = "imd";
		// 	this.show = !this.show;
		// },
		// inputBlur(){
		// 	if(this.evTag!="lmd")
		// 		this.show = false;				
		// },
		// listMD(){
		// 	this.evTag = "lmd";
		// },
		// listBlur(){
		// 	this.show = false;			
		// },
		// liClick(v){
		// 	this.val = v;
		// 	this.show = false;
		// }
</script>