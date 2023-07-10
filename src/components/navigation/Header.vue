<template>
    <header class="bg-63-dark-green py-[16px] px-[64px] lg:px-[112px]">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <RouterLink to="/">
                    <img src="/logo.svg" alt="" class="">
                </RouterLink>
                <nav class="ml-[40px] hidden md:block">
                    <ul class="flex items-center text-white">
                        <li class=" text-[16px] leading-[24px] mr-[32px]">
                            <RouterLink to="/" class="font-medium">Home</RouterLink>
                        </li>
                        <li class=" text-[16px] leading-[24px] mr-[32px]">
                            <RouterLink to="/all-episodes" class="font-medium">
                                <div class="flex items-center">
                                    <span class="mr-2">Episodes</span>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.923096 1.5L5.9231 6.5L10.9231 1.5" stroke="#E0E0E0" stroke-width="1.67"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </RouterLink>
                        </li>
                        <li class=" text-[16px] leading-[24px] mr-[32px]">
                            <RouterLink to="/" class="font-medium">Blog</RouterLink>
                        </li>
                        <li class=" text-[16px] leading-[24px]">
                            <RouterLink to="/" class="font-medium">Contact</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="">
                <button class="bg-63-light-green text-63-dark-green rounded-lg px-[20px] py-[12px] text-[18px] leading-[28px] font-semibold">Visit Episodes</button>
            </div>
        </div>
    </header>
</template>