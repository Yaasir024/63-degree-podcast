<script setup>
const emit = defineEmits(["close"])

const closeOnRoute = () => {
    emit('close')
}
</script>

<template>
    <div class="w-screen xs:w-[80vh] sm:w-[50vh] h-screen fixed top-0 bottom-0 right-0 bg-63-dark-green z-[100]">
        <div class="flex items-center justify-end py-3 px-4">
            <button class="text-white" @click="$emit('close')">
                <svg width="24" height="24" fill="currentColor" clip-rule="evenodd" fill-rule="evenodd"
                    stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                </svg>
            </button>
        </div>
        <ul class="flex flex-col text-white">
            <li class=" text-[20px] leading-[24px] pl-8 py-4">
                <RouterLink to="/" class="font-medium" @click="closeOnRoute">Home</RouterLink>
            </li>
            <li class=" text-[20px] leading-[24px] pl-8 py-4">
                <RouterLink to="/episodes" class="font-medium" @click="closeOnRoute">
                    Episodes
                </RouterLink>
            </li>
            <li class=" text-[20px] leading-[24px] pl-8 py-4">
                <RouterLink to="/" class="font-medium" @click="closeOnRoute">Blog</RouterLink>
            </li>
            <li class=" text-[20px] leading-[24px] pl-8 py-4">
                <RouterLink to="/contact" class="font-medium" @click="closeOnRoute">Contact</RouterLink>
            </li>
    </ul>
</div></template>