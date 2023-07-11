<script setup>
import { ref } from 'vue';
import MobileNav from '@/components/navigation/MobileNav.vue';

import { useClickOutside } from "@/composables/useClickOutside";

const mobileNav = ref(null)
const showMobileNav = ref(false)

useClickOutside(mobileNav, () => {
    showMobileNav.value = false;
});
</script>

<template>
    <header class="bg-63-dark-green py-[16px] px-[28px] xs:px-[42px] md:px-[64px] xl:px-[96px]  2xl:px-[112px] ">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <RouterLink to="/">
                    <img src="/logo.svg" alt="" class="">
                </RouterLink>
                <nav class="ml-[40px] hidden md:block">
                    <ul class="flex items-center text-white">
                        <li class=" text-[16px] leading-[24px] mr-[32px]">
                            <RouterLink to="/" class="link font-medium">Home</RouterLink>
                        </li>
                        <li class=" text-[16px] leading-[24px] mr-[32px]">
                            <RouterLink to="/episodes" class="link font-medium">
                                Episodes
                            </RouterLink>
                        </li>
                        <li class=" text-[16px] leading-[24px] mr-[32px]">
                            <RouterLink to="/" class="link font-medium">Blog</RouterLink>
                        </li>
                        <li class=" text-[16px] leading-[24px]">
                            <RouterLink to="/contact" class="link font-medium">Contact</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="">
                <RouterLink to="/episodes" class="hidden md:block">
                    <button
                        class="bg-63-light-green text-63-dark-green rounded-lg px-[20px] py-[12px] text-[18px] leading-[28px] font-semibold">Visit
                        Episodes</button>
                </RouterLink>
                <div class="relative block md:hidden" ref="mobileNav">
                    <button class="text-white" @click="showMobileNav = !showMobileNav">
                        <svg height="24" width="24" fill="currentColor" clip-rule="evenodd" fill-rule="evenodd"
                            stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
                                fill-rule="nonzero" />
                        </svg>
                    </button>
                    <transition name="nav">
                        <MobileNav v-if="showMobileNav" @close="showMobileNav = false" />
                    </transition>
                </div>
            </div>
        </div>
        <div class="block md:hidden overlay h-screen fixed top-0 left-0 bottom-0 right-0 bg-black/40 z-[80]"
            v-if="showMobileNav">
        </div>
    </header>
</template>

<style scoped>
/* Nav Animation */
.nav-enter-active,
.nav-leave-active {
    transition: all 0.4s ease;
}

.nav-enter-from,
.nav-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

/* Menu Animation */
.menu-enter-active,
.menu-leave-active {
    transition: transform 0.3s ease;
    transform-origin: top left;
}

.menu-enter-from,
.menu-leave-to {
    transform: scale(0);
}
</style>