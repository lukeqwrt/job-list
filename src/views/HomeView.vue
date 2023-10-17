<script setup>
import { ref } from "vue";
import Joblist from "../components/Joblist.vue";
const searchJob = ref('')
const searchValue = ref([])
const jobslist = ref()
const keyword = ref('')
const activeSearch = ref(false)
const getJobList = async () => {
    const url = "http://localhost:3000/JobList"
    const res = await fetch(url)
    const data = await res.json()
    jobslist.value = data
    

}


getJobList()

const handleSubmitSearch = async (e) => {
    const url = "http://localhost:3000/JobList"
    const res = await fetch(url)
    const data = await res.json()
    const filteredJob = data.filter((job) => {
        return job.role.split(" ").join("").toLowerCase().includes(searchJob.value.split(" ").join("").toLowerCase()) || job.level.split(" ").join("").toLowerCase().includes(searchJob.value.split(" ").join("").toLowerCase()) || job.languages.join("").toLowerCase().trim().includes(searchJob.value.split(" ").join("").toLowerCase()) || job.tools.join("").toLowerCase().trim().includes(searchJob.value.split(" ").join("").toLowerCase())
    })

    keyword.value = searchJob.value
    searchValue.value = filteredJob
    activeSearch.value = true
}

</script>

<template>
    <div class="main bg-background min-h-[100vh]">
        <header class="bg-header bg-[url('../assets/images/bg-header-mobile.svg')] md:bg-[url('../assets/images/bg-header-desktop.svg')] h-[120px]">
        </header>

        <div class="job-list-container mt-[-48px] w-full max-w-3xl mx-auto container p-5">
            <form @submit.prevent="handleSubmitSearch">  
                <input v-model="searchJob" type="text" class="w-full rounded-lg shadow-xl outline-none px-5 md:px-8 py-4">
            </form>

            <div v-if="activeSearch">
                <div v-if="searchValue.length">
                    <Joblist :jobslist="searchValue" />
                </div>
                <div v-else>
                    <h3 class="mt-8">The Search <strong>{{ keyword }} jobs</strong> did not match any jobs</h3>
                </div>
            </div>
            <div v-else>
                <Joblist :jobslist="jobslist" />
            </div>
        </div>
    </div>
</template>
