<style scoped>

.i-openmoji-flag-united-states {
  background: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 72 72' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='%23fff' d='M5 17h62v38H5z'/%3E%3Cpath fill='%23d22f27' d='M5 17h62v5H5zm0 9h62v4H5zm0 8h62v4H5z'/%3E%3Cpath fill='%231e50a0' d='M5 17h32v21H5z'/%3E%3Cpath fill='%23d22f27' d='M5 42h62v4H5z'/%3E%3Ccircle cx='9.5' cy='22' r='1.75' fill='%23fff'/%3E%3Ccircle cx='17.5' cy='22' r='1.75' fill='%23fff'/%3E%3Ccircle cx='25.5' cy='22' r='1.75' fill='%23fff'/%3E%3Ccircle cx='33.5' cy='22' r='1.75' fill='%23fff'/%3E%3Ccircle cx='29.5' cy='26' r='1.75' fill='%23fff'/%3E%3Ccircle cx='21.5' cy='26' r='1.75' fill='%23fff'/%3E%3Ccircle cx='13.5' cy='26' r='1.75' fill='%23fff'/%3E%3Ccircle cx='9.5' cy='30' r='1.75' fill='%23fff'/%3E%3Ccircle cx='17.5' cy='30' r='1.75' fill='%23fff'/%3E%3Ccircle cx='25.5' cy='30' r='1.75' fill='%23fff'/%3E%3Ccircle cx='33.5' cy='30' r='1.75' fill='%23fff'/%3E%3Ccircle cx='29.5' cy='34' r='1.75' fill='%23fff'/%3E%3Ccircle cx='21.5' cy='34' r='1.75' fill='%23fff'/%3E%3Ccircle cx='13.5' cy='34' r='1.75' fill='%23fff'/%3E%3Cpath fill='%23d22f27' d='M5 50h62v5H5z'/%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 17h62v38H5z'/%3E%3C/svg%3E") no-repeat;
  background-size: 100% 100%;
  background-color: transparent;
  width: 1.2em;
  height: 1.2em;
}

.i-openmoji-flag-china {
  background: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 72 72' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='%23d22f27' d='M5 17h62v38H5z'/%3E%3Ccircle cx='24' cy='34' r='1.75' fill='%23f1b31c'/%3E%3Ccircle cx='24' cy='24' r='1.75' fill='%23f1b31c'/%3E%3Ccircle cx='28' cy='31' r='1.75' fill='%23f1b31c'/%3E%3Ccircle cx='28' cy='26' r='1.75' fill='%23f1b31c'/%3E%3Cpath fill='%23f1b31c' stroke='%23f1b31c' stroke-linecap='round' stroke-linejoin='round' d='m13.528 32.445l2.472-8l2.473 8L12 27.5h8z'/%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 17h62v38H5z'/%3E%3C/svg%3E") no-repeat;
  background-size: 100% 100%;
  background-color: transparent;
  width: 1.2em;
  height: 1.2em;
}

footer a {
  @apply px-4 font-bold text-slate-600 cursor-pointer;
}

.wrapper {
  @apply pt-1 pb-1;
}

.tooltip {
  @apply absolute bottom-[calc(100%)] border border-slate-950 py-2 bg-white z-50 hidden;
}

.footer-other a:hover {
  @apply text-blue-500 no-underline;
}

footer .link:hover {
  color: #0057ff;
  text-decoration: none;
}

.footer-more-btn::after {
  content: "";
  display: inline-block;
  left: 3px;
  position: relative;
  top: -2px;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 3px solid dimgray;
  height: 0;
  width: 0
}

.footer-language-btn::after {
  content: "";
  display: inline-block;
  left: 3px;
  position: relative;
  top: -2px;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 3px solid dimgray;
  height: 0;
  width: 0
}

.footer-more-btn:hover::after {
  @apply rotate-180;
}

.footer-language-btn:hover::after {
  @apply rotate-180;
}

.arrow {
  @apply border-l border-b top-px z-50 w-2 h-2 absolute rotate-45 border-slate-950;
  box-sizing: border-box;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-translate-x: -50%;
  --tw-translate-y: -50%;
  --tw-rotate: -45deg;
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  background-color: rgba(255,255,255,var(--tw-bg-opacity));
  border-color: rgba(0,0,0,var(--tw-border-opacity));
}

.wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent; /* 需要设置透明背景色以便看到底部的内容 */
  z-index: -1; /* 将伪元素置于元素的底层，以便触发:hover */
}

</style>

<template>
<footer>
  <div class="flex fixed bg-white z-50 bottom-0 border-t border-slate-950 w-full">
    <div class="wrapper footer-more group/more">
      <div class=" border-r border-slate-950">
        <a class="footer-more-btn">
          更多 Behance
        </a>
        <div class="tooltip footer-more-tooltip group-hover/more:block left-3">
          <div class="absolute bottom-0 left-3">
            <div class="arrow border-l border-b top-px z-50 w-2 h-2 absolute rotate-45 border-slate-950"></div>
          </div>
          <ul class="flex flex-col-reverse">
            <li class="">
              <a class="" href="/careers" target="_blank">
                Behance 中的工作机会
              </a>
            </li>
            <li class="">
              <a href="https://portfolio.adobe.com/?promoid=ZKD5FJ7P&mv=other" target="_blank">
                Adobe Portfolio
              </a>
            </li>
            <li class="">
              <a href="/blog" target="_blank">
                博客
              </a>
            </li>
            <li class="">
              <a aria-expanded="false">
                下载应用程序
              </a>
            </li>
            <li class="">
              <a href="/about" target="_blank">
                关于 Behance
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="wrapper footer-language group/languages">
      <div class="border-r border-slate-950 flex items-center justify-center">
        <button type="button" class="text-black px-2 text-center inline-flex items-center">
          <icon :class="state.currentLanguage.flag"></icon>
          {{ state.currentLanguage.lang_str }}
        </button>
        <div class="tooltip group-hover/languages:block">
          <div class="absolute bottom-0 left-6">
            <div class="arrow"></div>
          </div>
          <ul class="flex flex-col-reverse">
            <li v-for="item in state.dataProvider.languages">
                <a :class="['inline-flex items-center justify-center', item.lang_str == state.currentLanguage.lang_str ? 'bg-black text-white' : '']">
                  <icon :class="item.flag"></icon>
                    {{ item.lang_str }}
                </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="wrapper footer-other">
      <ul class="flex items-center">
        <li class="">
          <a href="http://www.adobe.com/legal/terms.html" target="_blank">
            使用条款
          </a>
        </li>
        <li class="">
          <a href="http://www.adobe.com/privacy.html" target="_blank">
            隐私
          </a>
        </li>
        <li class="">
          <a href="/misc/community" target="_blank">
            社区
          </a>
        </li>
        <li class="">
          <a href="https://help.behance.net/" target="_blank">
            帮助
          </a>
        </li>
        <li>
          <a aria-label="Cookie 偏好设置">
            Cookie 偏好设置
          </a>
        </li>
        <li class="">
          <a href="https://www.adobe.com/privacy/us-rights.html" target="_blank">
            意见反馈
          </a>
        </li>
      </ul>
    </div>
    <div class="ml-auto">
      <a>v1.0</a>
    </div>
  </div>
</footer>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, reactive } from "vue";
import { localStorageGetItem, localStorageSetItem } from '@/utils/storage'
import { LANGUAGE, getCurrentLanguage } from '@/utils/languages'
import { arrayToObject } from '@/utils/helpers'

type Language = {
  language: string;
  flag: any;
  lang_str: string;
};

interface dataProviderInterface {
    languages: Language[]
}
interface stateInterface {
    currentLanguage: Language
    dataProvider: dataProviderInterface
}
const state = reactive<stateInterface>({
    currentLanguage: {
        language: 'zh-CN',
        lang_str: '中文(简体)',
        flag: 'i-openmoji-flag-china'
    },
    dataProvider: {
        languages: [
            {
                'language': 'zh-CN',
                'lang_str': '中文(简体)',
                'flag': 'i-openmoji-flag-china'
            },
            {
                'language': 'EN',
                'lang_str': 'English',
                'flag': 'i-openmoji-flag-united-states'
            }
        ]

    }
})

function initializeLanguage() {
    let lang = getCurrentLanguage()
    state.currentLanguage = arrayToObject(state.dataProvider.languages, 'language')[lang]
}
onBeforeMount(() => {
    // 是否选择过语言
    initializeLanguage()
})

onMounted(() => {

})
</script>
