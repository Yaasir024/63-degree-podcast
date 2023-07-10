<template>
    <section class="bg-63-dark-green px-[28px] xs:px-[42px] md:px-[64px] xl:px-[112px] py-[96px]">
        <div class="flex w-full flex-wrap">
            <div class="flex-full lg:flex-50% lg:pr-[32px] xl:pr-[64px]">
                <img src="@/assets/images/home/about.png" alt="" class="">
            </div>
            <div class="flex-full lg:flex-50%  py-[40px]">
                <div class="max-w-[575px]">
                    <p class="text-[24px] sm:text-[28px] leading-[35px] font-semibold italic text-63-light-green">
                        “ When health is absent, wisdom cannot reveal itself, art cannot manifest, strength cannot fight,
                        wealth
                        becomes useless, and intelligence cannot be applied”
                    </p>
                    <h4 class="text-[20px] sm:text-[26px] leading-[32px] font-semibold text-[#E48B46] mt-12">
                        - Herophilus
                    </h4>
                </div>

                <div
                    class="mt-[24px] text-base sm:text-[18px] md:text-[24px] leading-[26px] sm:leading-[30px] lg:max-w-[480px] text-[#F2F2F2]">
                    <p class="mb-3">
                        She is an art director and animator with a decade of experience in editorial, documentary, and
                        advertising.
                    </p>
                    <p class="mb-3">
                        She’s worked for big names like The Atlantic, Adobe, Vox, and Netflix.
                    </p>
                    <p class="mb-3">
                        When she’s not making rad creative work, Yvonne loves to speak and educate on animation and motion
                        design, and has given talks and run student workshops across the U.S. and internationally.
                    </p>
                </div>
                <div class="mt-[40px]">
                    <RouterLink to="/contact">
                        <button
                            class="text-base leading-[24px] font-medium rounded-lg border border-[#6AE6D4] text-white px-[20px] py-[12px]">Learn
                            more</button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>