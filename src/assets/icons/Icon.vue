<template>
    <KeepAlive>
        <component :is="name"></component>
    </KeepAlive>
</template>
<script setup lang="ts">
import FlagChina from './FlagChina.vue';
import { defineComponent } from 'vue';


interface stateInterface {
  name: string
}
defineProps<stateInterface>()

</script>