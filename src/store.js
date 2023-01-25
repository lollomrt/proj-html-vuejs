import { reactive } from 'vue'

export const store = reactive({
    pizzaAttiva: 0,
    autoscroll: null,
    reviewAttiva: 0,
    autoscrollReview: null,
    active_index_card: null,
    active_index_s: 0,
    active_btn: 0,
    active: false,
})