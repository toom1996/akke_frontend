<template>
  <div>
    <div class="wrapper pt-60">
      <ul class="flex">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
const dataProvider = [

];
onMounted(() => {
const dataProvider = reactive({
    
})
//   setLoginState()
  console.log(88888)
  console.log(document.cookie)


  // 向给定ID的用户发起请求
  // axios.post('http://localhost:8080/api/v1/get-user-info')
  //   .then(function (response) {
  //     // 处理成功情况
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // 处理错误情况
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // 总是会执行
  //   });
})

console.log('ppp')
</script>