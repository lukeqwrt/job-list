<script setup>
import { onMounted, ref } from "vue";
const props = defineProps(['jobslist'])


</script>

<template>
    <ul class="joblist-wrapper grid gap-12 sm:gap-5 mt-12 py-8">
        {{ props.searchValue }}
        <li v-for="job in jobslist" :key="job.id" class="bg-white shadow-xl rounded-lg md:rounded-xl relative py-7 px-4 sm:flex sm:items-start sm:gap-5">
            <img :src="job.logo" alt="wala" class="h-auto w-[45px] absolute top-[-23px] sm:relative sm:w-[50px] sm:top-0 md:w-[80px]">
            <div class="flex flex-col flex-1">
                <div class="company flex items-center gap-5 mb-2">
                    <h3 class="company-name text-header font-bold text-sm md:text-lg">{{ job.company }}</h3>
                    <div class="flex gap-2">
                        <span v-if="job.new" class="bg-header rounded-full px-2 py-1 text-[12px] font-bold text-white">NEW!</span>
                        <span v-if="job.featured" class="bg-verydark rounded-full px-2 py-1 text-[12px] font-bold text-white">FEATURED!</span>
                    </div>
                </div>
                <h3 class="position text-black font-bold text-sm mb-2">{{ job.position }}</h3>
                <div class="time-details text-[12px] text-[#999] flex items-center gap-2">
                    <span class="font-bold">{{ job.postedAt }}</span>
                    •
                    <span class="font-bold">{{ job.contract }}</span>
                    •
                    <span class="font-bold">{{ job.location }}</span>
                </div>
            </div>
            <span class="block h-[1px] w-full bg-[#999] my-4 sm:hidden"></span>
            <ul class="tags flex sm:justify-end flex-wrap text-[12px] font-bold text-header gap-2">
                <div class="bg-background rounded-md py-1 px-2">{{ job.role }}</div>
                <div class="bg-background rounded-md py-1 px-2">{{ job.level }}</div>
                <div class="bg-background rounded-md py-1 px-2" v-for="lang in job.languages" :key="lang"> {{ lang }} </div>
                <div class="bg-background rounded-md py-1 px-2" v-for="tool in job.tools" :key="tool"> {{ tool }} </div>
            </ul>
        </li>
    </ul>
    
</template>

<style>
    .asdad{
        top: 50%;
    }
</style>