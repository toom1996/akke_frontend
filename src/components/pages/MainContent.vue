<template>
  <div style="max-width: calc(1980px + 120px);padding:0px 60px">
    <div class="wrapper pt-60">
      <ul class="grid grid-cols-4 gap-5">
        <li v-for="(item, index) in dataProvider">
          <div class="cover-wrapper">
            <div aria-label="Social Media Design for OpusClip | Social Media Post" class="ProjectCoverNeue-root-B1h ProjectCoverNeue-statsVisible-Sg2 ProjectCover-cover-ucA qa-search-project-item"
            >
              <div
                class="Cover-cover-gDM ProjectCoverNeue-cover-X3S e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-statsVisible-Sg2 ProjectCoverNeue-loaded-sa9"
              >
                <div
                  class="cover-container"
                >
                  <div class="Cover-content-yv3">
                    <div
                      style="background-color: rgb(22, 20, 21)"
                      class="DominantColor-dominantColor-iv4 ProjectCoverNeue-dominantColor-oi6"
                    ></div>
                    <picture class="ProjectCoverNeue-picture-NuE">
                      <source
                        srcset="
                        https://imgwf2.pop-fashion.com/upload/flash_report/2023/2023122810/ANAREPORT_658cda073b90c_9728.jpg 808w,
                          https://mir-s3-cdn-cf.behance.net/projects/404_webp/dde47c184704669.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png 404w,
                          https://mir-s3-cdn-cf.behance.net/projects/202_webp/dde47c184704669.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png 202w,
                          https://mir-s3-cdn-cf.behance.net/projects/230_webp/dde47c184704669.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png 230w,
                          https://mir-s3-cdn-cf.behance.net/projects/115_webp/dde47c184704669.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png 115w
                        "
                        type="image/webp"
                      />
                      <source
                        srcset="
                        https://imgwf2.pop-fashion.com/upload/flash_report/2023/2023122810/ANAREPORT_658cda073b90c_9728.jpg 115w,
                          https://mir-s3-cdn-cf.behance.net/projects/202/dde47c184704669.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png 202w,
                          https://mir-s3-cdn-cf.behance.net/projects/230/dde47c184704669.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png 230w,
                          https://mir-s3-cdn-cf.behance.net/projects/404/dde47c184704669.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png 404w,
                          https://mir-s3-cdn-cf.behance.net/projects/max_808/dde47c184704669.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png 808w
                        "
                        type="image/png"
                      />
                      <img
                        sizes="404px"
                        :src="item.cover"
                        class="ProjectCoverNeue-image-TFB js-cover-image ProjectCoverNeue-imageHoverOverlay-m1P"
                        alt="Social Media Design&nbsp;for OpusClip | Social Media Post"
                        loading="lazy"
                        style=""
                      />
                    </picture>
                  </div>
                  <div class="Cover-overlay-r1A Cover-showOnHover-oZ2">
                    <a
                      href="/gallery/184704669/Social-Media-Designfor-OpusClip-Social-Media-Post?tracking_source=search_projects&amp;l=0"
                      class="ProjectCoverNeue-coverLink-U39 e2e-ProjectCoverNeue-link"
                      title="项目的链接 - Social Media Design&nbsp;for OpusClip | Social Media Post"
                    ></a>
                  </div>
                </div>
                <div class="ProjectCover-details-ute flex">
                  <div class="ProjectCover-info-sxd">
                    <span class="TitleOwner-limitHeight-_cX">
                      <a
                        href="https://www.behance.net/gallery/184704669/Social-Media-Designfor-OpusClip-Social-Media-Post?tracking_source=search_projects"
                        class="Title-title-lpJ e2e-Title-owner Title-mediumTitle-OeE TitleOwner-title-H7y"
                        tabindex="0"
                        >{{ item.title }} | Social Media
                        post</a
                      >
                      <div
                        class="Owners-root-qU7 Owners-dark-BYv Owners-overflowText-C9U TitleOwner-owner-I52 TitleOwner-mediumOwner-eDx"
                      >
                        <div class="Owners-miniprofileActivatorContainer-k0t">
                          <div aria-haspopup="true">
                            <div
                              aria-describedby="f2fcc371-ad91-4dfe-a1b3-7426b3b1952a"
                              class="Popover-activator-M8N Owners-miniprofileActivator-dc_ Miniprofile-activator-dDq"
                            >
                              <span
                                ><a
                                  href="https://www.behance.net/mahdyhasanhridoy?tracking_source=search_projects"
                                  class="Owners-owner-EEG e2e-Owner-user-link"
                                  >Mahdy Hasan Hridoy</a
                                ></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                  <div class="detail-wrapper">
                    <div class="detail-content">
                      <MdiLightEye></MdiLightEye>
                      <span title="89">89</span
                      ><MaterialSymbolsAddPhotoAlternateOutline />
                      <span title="647">647</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.cover-container {
  @apply mb-2;
}

.detail-content {
  @apply font-bold flex items-center;
}
</style>
<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import MdiLightEye from '../../assets/icons/MdiLightEye.vue';
import MaterialSymbolsAddPhotoAlternateOutline from '../../assets/icons/MaterialSymbolsAddPhotoAlternateOutline.vue'
const count = ref(-1);
const dataProvider = reactive([
  {
    title: "内衣--女装12月TOP热榜",
    cover: 'https://imgwf2.pop-fashion.com/upload/flash_report/2023/2023122810/ANAREPORT_658cda073b90c_9728.jpg'
  },
  {
    title: "家居服--女装12月TOP热榜",
    cover: 'https://imgwf2.pop-fashion.com/upload/flash_report/2023/2023122910/ANAREPORT_658e2c9e6d46b_8866.jpg'
  },
  {
    title: "T恤/卫衣--男装TOP热榜",
    cover: 'https://imgwf2.pop-fashion.com/upload/flash_report/2023/2023122816/ANAREPORT_658d2be0a5cb7_9978.jpg'
  },
  {
    title: "大衣--女装TOP热榜",
    cover: 'https://imgwf1.pop-fashion.com/upload/flash_report/2023/2023122117/ANAREPORT_658406dfb15bb_7724.png'
  },
  {
    title: "棉羽绒--男女装TOP热榜",
    cover: 'https://imgwf1.pop-fashion.com/upload/flash_report/2023/2023122218/ANAREPORT_658567ef48384_2384.jpg'
  },
]);

const computedWrapperStyle = (index) => {
  console.log(index);
  return {
    color: "blue",
    transform: "translate(" + index * 100 + "%, 0%)",
  };
};
onMounted(() => {
  //   setLoginState()
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
});
</script>
