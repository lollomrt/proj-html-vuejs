<script>
import { store } from '../store.js'
export default {
    props: {
        people: Object
    },
    data() {
        return {
            ovr: false,
            store
        }
    },
}
</script>

<template lang="">
    <div class="card" @mouseenter="ovr = true" @mouseleave="ovr = false">
        <img :src="people.image" alt="">
        <div class="hover-container" v-if="ovr">
            <div class="hover-cont">
                <h2>{{ people.name }}</h2>
                <span>{{ people.job }}</span>
                <div class="social-container">
                    <i v-for="(element, index) in people.social" :key="index" :class="element.icon"></i>
                </div>
            </div>  
        </div>
    </div>   
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    width: calc(100% / 4);
    display: flex;
    position: relative;

    .hover-container {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: white;
        height: 100%;
        background-image: url(https://img.freepik.com/free-vector/vector-polka-background-with-small-dots_1017-13972.jpg?w=740&t=st=1674656133~exp=1674656733~hmac=aa6358cf4308b9672106b972dc92fecf5dbafb735b3819960688f61b35f9e5ea);
        background-size: cover;
        padding: 2rem;

        .hover-cont {
            color: $white;
            width: 100%;
            height: 100%;
            display: flex;
            gap: 0.2rem;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: $color-primary;

            .social-container {
                cursor: pointer;
                display: flex;
                gap: 1rem;
                margin-top: 1rem;
            }
        }
    }

    img {
        width: 100%;
    }
}
</style>
