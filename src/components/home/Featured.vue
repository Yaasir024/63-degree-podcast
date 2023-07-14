<script setup>
import { ref, computed } from "vue";
import {
    useSinglePrismicDocument,
    usePrismicDocumentByUID,
    useAllPrismicDocumentsByType,
    useAllPrismicDocumentsByTag,
    PrismicText,
} from "@prismicio/vue";

import { usePodcastStore } from '@/stores/podcast.js'

const usePodcast = usePodcastStore()

const { data: featured } = useAllPrismicDocumentsByTag("featured");

const filteredPodcasts = computed(() => {
    return featured.value.slice(0, 3);
})
</script>

<template>
    <section class="pt-[118px] pb-[85px] px-[28px] xs:px-[42px] md:px-[64px] xl:px-[96px]" v-if="featured">
        <div class="flex items-center justify-between">
            <h3 class="text-[34px] md:text-[48px] leading-[48px] md:leading-[65px] font-bold text-[#16363F]">
                Featured Episodes
            </h3>
            <button
                class="hidden xs:flex items-center bg-63-light-green text-63-dark-green rounded-lg px-[20px] py-[12px] text-[18px] leading-[24px] font-semibold">
                <span class="font-semibold mr-2">Show
                    All</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.33325 9.99996C3.33325 9.53972 3.70635 9.16663 4.16659 9.16663H15.8333C16.2935 9.16663 16.6666 9.53972 16.6666 9.99996C16.6666 10.4602 16.2935 10.8333 15.8333 10.8333H4.16659C3.70635 10.8333 3.33325 10.4602 3.33325 9.99996Z"
                        fill="#16363F" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.4224 9.4107C16.7479 9.73614 16.7479 10.2638 16.4224 10.5892L13.0891 13.9225C12.7637 14.248 12.236 14.248 11.9106 13.9225C11.5851 13.5971 11.5851 13.0695 11.9106 12.744L15.2439 9.4107C15.5694 9.08527 16.097 9.08527 16.4224 9.4107Z"
                        fill="#16363F" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.9106 6.07739C12.236 5.75195 12.7637 5.75195 13.0891 6.07739L16.4224 9.41072C16.7479 9.73616 16.7479 10.2638 16.4224 10.5892C16.097 10.9147 15.5694 10.9147 15.2439 10.5892L11.9106 7.2559C11.5851 6.93046 11.5851 6.40283 11.9106 6.07739Z"
                        fill="#16363F" />
                </svg>
            </button>
        </div>
        <div class="mt-[50px] flex flex-wrap  justify-center md:justify-start">
            <div class="card flex-full md:flex-[50%] lg:flex-33.33%" v-for="podcast in filteredPodcasts" :key="podcast.id">
                <RouterLink :to="`/episode/${podcast.uid}`">
                    <div class=" px-[14px] mb-8 lg:mb-0">
                        <div class="relative overflow-hidden rounded-[7px]">
                            <img :src="podcast.data.placeholder_image.url" alt="" class="img">
                            <button
                                class="absolute top-[14px] right-[14px] h-[48px] w-[48px] rounded-full flex items-center justify-center bg-white/10">
                                <svg width="11" height="15" viewBox="0 0 11 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.06397 1.63864C2.85284 1.63864 2.65036 1.72251 2.50107 1.8718C2.35178 2.02109 2.26791 2.22357 2.26791 2.4347V12.1736L5.0426 10.5088C5.2947 10.3575 5.60964 10.3575 5.86174 10.5088L8.63643 12.1736V2.4347C8.63643 2.22357 8.55255 2.02109 8.40326 1.8718C8.25397 1.72251 8.05149 1.63864 7.84036 1.63864H3.06397ZM1.37527 0.745994C1.82314 0.298121 2.43059 0.0465088 3.06397 0.0465088H7.84036C8.47375 0.0465088 9.08119 0.298121 9.52907 0.745994C9.97694 1.19387 10.2286 1.80131 10.2286 2.4347V13.5796C10.2286 13.8664 10.0743 14.131 9.82471 14.2723C9.57514 14.4136 9.26885 14.4098 9.02292 14.2622L5.45217 12.1198L1.88142 14.2622C1.63549 14.4098 1.3292 14.4136 1.07963 14.2723C0.830053 14.131 0.675781 13.8664 0.675781 13.5796V2.4347C0.675781 1.80131 0.927394 1.19387 1.37527 0.745994Z"
                                        fill="white" />
                                </svg>
                            </button>
                            <a :href="podcast.data.episode_link.url" class="absolute bottom-[14px] right-[14px]">
                                <button class="h-[48px] w-[48px] rounded-full flex items-center justify-center bg-white/10">
                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.879639 1.88016V13.0251C0.881461 13.2848 0.946815 13.5402 1.07 13.7689C1.19318 13.9976 1.37046 14.1927 1.58635 14.3371C1.80225 14.4816 2.05022 14.571 2.30862 14.5976C2.56702 14.6243 2.82801 14.5872 3.06882 14.4898L12.8206 8.83776C13.0695 8.70008 13.2769 8.49825 13.4213 8.25326C13.5658 8.00826 13.6419 7.72905 13.6419 7.44465C13.6419 7.16025 13.5658 6.88104 13.4213 6.63605C13.2769 6.39106 13.0695 6.18922 12.8206 6.05154L3.06882 0.399482C2.83352 0.303908 2.57877 0.266009 2.32584 0.288949C2.07291 0.311889 1.82914 0.395003 1.61488 0.531352C1.40062 0.6677 1.22208 0.853327 1.09418 1.07274C0.966275 1.29214 0.892715 1.53896 0.879639 1.79259"
                                            fill="white" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                        <div class="flex items-center mt-[19px]">
                            <div class="flex items-center mr-[16px]">
                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.8767 0.864014C9.22842 0.864014 9.51355 1.14914 9.51355 1.50087V2.13771H10.1504C11.2056 2.13771 12.061 2.9931 12.061 4.04827V6.59568V11.6905C12.061 12.7457 11.2056 13.601 10.1504 13.601H2.50821C1.45304 13.601 0.597656 12.7457 0.597656 11.6905V6.59568V4.04827C0.597656 2.9931 1.45304 2.13771 2.50821 2.13771H3.14505V1.50087C3.14505 1.14914 3.43018 0.864014 3.7819 0.864014C4.13363 0.864014 4.41876 1.14914 4.41876 1.50087V2.13771H8.23984V1.50087C8.23984 1.14914 8.52497 0.864014 8.8767 0.864014ZM10.7873 4.04827V5.95883H1.87136V4.04827C1.87136 3.69654 2.15649 3.41141 2.50821 3.41141H3.14505V4.04827C3.14505 4.39999 3.43018 4.68512 3.7819 4.68512C4.13363 4.68512 4.41876 4.39999 4.41876 4.04827V3.41141H8.23984V4.04827C8.23984 4.39999 8.52497 4.68512 8.8767 4.68512C9.22842 4.68512 9.51355 4.39999 9.51355 4.04827V3.41141H10.1504C10.5022 3.41141 10.7873 3.69654 10.7873 4.04827ZM10.7873 7.23253H1.87136V11.6905C1.87136 12.0422 2.15649 12.3273 2.50821 12.3273H10.1504C10.5022 12.3273 10.7873 12.0422 10.7873 11.6905V7.23253ZM3.7819 8.50625C3.43018 8.50625 3.14505 8.79137 3.14505 9.1431V10.4168C3.14505 10.7685 3.43018 11.0537 3.7819 11.0537H5.05561C5.40733 11.0537 5.69246 10.7685 5.69246 10.4168V9.1431C5.69246 8.79137 5.40733 8.50625 5.05561 8.50625H3.7819Z"
                                        fill="black" fill-opacity="0.5" />
                                </svg>

                                <span class="ml-[3px] text-[12px] leading-[14px] font-medium text-black/50">
                                    {{ usePodcast.formatDate(podcast.data.release_date) }}
                                </span>
                            </div>
                            <div class="flex items-center mr-[16px]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.11994 5.08026C5.95597 4.24423 7.08987 3.77456 8.27219 3.77456C9.45452 3.77456 10.5884 4.24423 11.4244 5.08026C12.2605 5.91629 12.7302 7.05019 12.7302 8.23252V8.34123C12.531 8.27083 12.3166 8.23252 12.0933 8.23252H11.4564C10.4013 8.23252 9.54589 9.0879 9.54589 10.1431V12.0536C9.54589 13.1088 10.4013 13.9642 11.4564 13.9642H12.0933C13.1485 13.9642 14.0038 13.1088 14.0038 12.0536V10.1458C14.0039 10.1449 14.0039 10.144 14.0039 10.1431V8.23252C14.0039 6.71239 13.4 5.25452 12.3251 4.17962C11.2502 3.10472 9.79232 2.50085 8.27219 2.50085C6.75206 2.50085 5.29419 3.10472 4.21929 4.17962C3.1444 5.25452 2.54053 6.71239 2.54053 8.23252V10.1431V12.0536C2.54053 13.1088 3.39591 13.9642 4.45108 13.9642H5.08793C6.1431 13.9642 6.99849 13.1088 6.99849 12.0536V10.1431C6.99849 9.0879 6.1431 8.23252 5.08793 8.23252H4.45108C4.22778 8.23252 4.01342 8.27083 3.81423 8.34123V8.23252C3.81423 7.05019 4.28391 5.91629 5.11994 5.08026ZM4.45108 9.50622C4.09936 9.50622 3.81423 9.79135 3.81423 10.1431V12.0536C3.81423 12.4053 4.09936 12.6905 4.45108 12.6905H5.08793C5.43966 12.6905 5.72479 12.4053 5.72479 12.0536V10.1431C5.72479 9.79135 5.43966 9.50622 5.08793 9.50622H4.45108ZM11.4564 9.50622C11.1047 9.50622 10.8196 9.79135 10.8196 10.1431V12.0536C10.8196 12.4053 11.1047 12.6905 11.4564 12.6905H12.0933C12.445 12.6905 12.7301 12.4053 12.7301 12.0536V10.1431C12.7301 9.79135 12.445 9.50622 12.0933 9.50622H11.4564Z"
                                        fill="black" fill-opacity="0.5" />
                                </svg>
                                <span class="ml-[3px] text-[12px] leading-[14px] font-medium text-black/50">
                                    {{ $prismic.asText(podcast.data.listens) }}
                                </span>
                            </div>
                            <div class="flex items-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.21471 2.13775C4.40092 2.13775 2.11989 4.41877 2.11989 7.23256C2.11989 10.0463 4.40092 12.3274 7.21471 12.3274C10.0285 12.3274 12.3095 10.0463 12.3095 7.23256C12.3095 4.41877 10.0285 2.13775 7.21471 2.13775ZM0.846191 7.23256C0.846191 3.71533 3.69747 0.864044 7.21471 0.864044C10.7319 0.864044 13.5832 3.71533 13.5832 7.23256C13.5832 10.7498 10.7319 13.6011 7.21471 13.6011C3.69747 13.6011 0.846191 10.7498 0.846191 7.23256Z"
                                        fill="black" fill-opacity="0.5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.21473 3.41144C7.56646 3.41144 7.85158 3.69657 7.85158 4.04829V6.96876L9.57561 8.69278C9.82432 8.94149 9.82432 9.34472 9.57561 9.59342C9.3269 9.84213 8.92367 9.84213 8.67497 9.59342L6.76441 7.68287C6.64498 7.56344 6.57788 7.40145 6.57788 7.23255V4.04829C6.57788 3.69657 6.86301 3.41144 7.21473 3.41144Z"
                                        fill="black" fill-opacity="0.5" />
                                </svg>
                                <span class="ml-[3px] text-[12px] leading-[14px] font-medium text-black/50">
                                    {{ $prismic.asText(podcast.data.duration) }}
                                </span>
                            </div>
                        </div>
                        <h3
                            class="mt-[14px] text-black text-[20px] lg:text-[30px] leading-[28px] lg:leading-[38px] font-semibold">
                            {{ $prismic.asText(podcast.data.podcast_name) }}
                        </h3>
                    </div>
                </RouterLink>
            </div>
        </div>

        <div class="mt-10 flex xs:hidden items-center justify-center">
            <RouterLink to="/episodes">
                <button
                    class="flex items-center bg-63-light-green text-63-dark-green rounded-lg px-[20px] py-[12px] text-[18px] leading-[24px] font-semibold">
                    <span class="font-semibold mr-2">Show
                        All</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.33325 9.99996C3.33325 9.53972 3.70635 9.16663 4.16659 9.16663H15.8333C16.2935 9.16663 16.6666 9.53972 16.6666 9.99996C16.6666 10.4602 16.2935 10.8333 15.8333 10.8333H4.16659C3.70635 10.8333 3.33325 10.4602 3.33325 9.99996Z"
                            fill="#16363F" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16.4224 9.4107C16.7479 9.73614 16.7479 10.2638 16.4224 10.5892L13.0891 13.9225C12.7637 14.248 12.236 14.248 11.9106 13.9225C11.5851 13.5971 11.5851 13.0695 11.9106 12.744L15.2439 9.4107C15.5694 9.08527 16.097 9.08527 16.4224 9.4107Z"
                            fill="#16363F" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.9106 6.07739C12.236 5.75195 12.7637 5.75195 13.0891 6.07739L16.4224 9.41072C16.7479 9.73616 16.7479 10.2638 16.4224 10.5892C16.097 10.9147 15.5694 10.9147 15.2439 10.5892L11.9106 7.2559C11.5851 6.93046 11.5851 6.40283 11.9106 6.07739Z"
                            fill="#16363F" />
                    </svg>
                </button>
            </RouterLink>
        </div>
    </section>
    <div class="" v-else></div>
</template>


<style scoped>
.img {
    transition: all .1s ease-in-out;
}

.card:hover .img {
    transform: scale(1.02);
}
</style>