<template>
    <section class="px-[42px] md:px-[64px] xl:px-[112px] py-[96px] flex flex-col lg:flex-row justify-between bg-[#E6F8F6]">
        <div class="">
            <h4 class="text-[36px] leading-[44px] font-semibold text-gray-900">
                Sign up for our newsletter
            </h4>
            <p class="text-[20px] leading-[30px] text-gray-400 mt-[20px]">
                Be the first to know about releases and industry news and insights.
            </p>
        </div>
        <div class="mt-3 lg:mt-0">
            <form @submit.prevent class="flex items-center">
                <input type="text" placeholder="Enter your email" class="py-[12px] px-[16px] text-[16px] leading-[24px] text-[#667085] rounded-lg border border-[#D0D5DD] max-w-[360px] w-full">
                <button type="submit" class="px-[20px] py-[12px] bg-63-light-green text-63-dark-green rounded-lg ml-[16px]">Subscribe</button>
            </form>
        </div>
    </section>
</template>