<style scoped>
.title {
    line-height: 80px;
    font-size: 32px;
    font-weight: bold;
    color: #555;
}

.container {
    flex: 1;
    overflow: hidden;
    width: 1320px;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.row1 {
    height: 80%;
    margin-bottom: 15px;
}

.row1 {
    display: flex;
    align-items: stretch;
}

.col {
    width: 50%;
    border-radius: 5px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.col:first-child {
    margin-right: 15px;
}

.col:last-child {
    margin-left: 15px;
}

.col-title {
    line-height: 50px;
    font-weight: bold;
    font-size: 18px;
    color: #777;
    padding-left: 20px;
}

.col-con {
    flex: 1;
    padding: 20px;
}

.row {
    height: 42px;
    padding: 5px 0;
    display: flex;
    line-height: 32px;
}

.row>.key {
    width: 132px;
    text-align: right;
    padding-right: 18px;
}

.row>.val {
    flex: 1;
    padding-right: 52px;
}

.row-console {
    margin-top: 50px;
}

.row-console textarea {
    width: 100%;
    height: 120px;
}
</style>
<template>
<div :class="['sel-input relative', 'select', { 'name-input': name }]">
    <span v-if="name">{{ name }}</span>
    <input class="w-full border" type="text" :value="text" @focus="inputFocus" @blur="inputBlur" @mousedown="inputMD" :placeholder="placeholder" />
    <div class="sel-list scroll absolute bg-red-500 w-full" v-show="state.isShow" tabindex="99">
        <ul>
            <li class="disable" v-for="item in state.dataProvider">{{ item.label }}</li>
        </ul>
    </div>
    <!-- <div class="sel-list scroll" v-show="show" tabindex="99" @blur="listBlur" @mousedown="listMD">
        <ul class='scroll-con'>
            <li class="disable" v-if='!list||list.length==0'>鏆傛棤鏁版嵁</li>
                <template v-else>
                    <template v-if="liType==1">
                        <li v-for="li in list" :class="{active:li[lid]==val}" @click="liClick(li[lid])">{{li[lname]}}</li>
                    </template>
                    <template v-else-if="liType==2">
                        <li v-for="li in list" :class="{active:li==val}" @click="liClick(li)">{{li}}</li>
                    </template>
                    <template v-else>
                        <li v-for="(li,i) in list" :class="{active:i==parseInt(val)}" @click="liClick(i)">{{li}}</li>
                    </template>
                </template>
        </ul>
    </div> -->
</div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

interface stateInterface {
    isShow?:boolean,
    name?: string,
    text?: string,
    placeholder?: string,
    dataProvider: {
        label: string,
        value: string
    }[]
}

const state = reactive<stateInterface>({
    isShow: false,
    name: '',
    text: '',
    placeholder: '',
    dataProvider: [
        {
            label: '中国',
            value: '1',
        },
        {
            label: '米国',
            value: '12',
        },
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