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
                            <RouterLink to="/contact" class="font-medium">Contact</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="">
                <RouterLink to="/episodes" class="hidden md:block">
                    <button class="bg-63-light-green text-63-dark-green rounded-lg px-[20px] py-[12px] text-[18px] leading-[28px] font-semibold">Visit Episodes</button>
                </RouterLink>
                <div class="relative block md:hidden">
                    <button class="text-white">
                        <svg height="24" width="24" fill="currentColor" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>