import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePodcastStore = defineStore('podcast', () => {
    const formatDate = (rawDate) => {
        const inputDate = new Date(rawDate);
    
        // Get today's date
        const today = new Date();
    
        // Compare the dates by comparing their year, month, and day
        const isSameDate = inputDate.getFullYear() === today.getFullYear() &&
            inputDate.getMonth() === today.getMonth() &&
            inputDate.getDate() === today.getDate();
    
        const formattedDate = inputDate.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
        if (isSameDate) {
            return 'today'
        } else {
            return formattedDate
        }
    }
  return { formatDate }
})
