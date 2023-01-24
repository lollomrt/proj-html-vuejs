<script>

import { store } from '../store.js'
export default {
    props: {
        pizzas: Array,
        cs1: Array,
        reviewsCarousel: Array
    },
    data() {
        return {
            store,
        }
    },
    created() {
        this.autoplay(this.pizzas)
        this.autoplay(this.reviewsCarousel)

    },
    methods: {
        changeImages(index) {
            store.pizzaAttiva = index
        },
        clickAvanti(nomeArray) {
            store.pizzaAttiva++
            if (store.pizzaAttiva > nomeArray.length - 1) {
                store.pizzaAttiva = 0
            }
        },
        clickDietro(nomeArray) {
            store.pizzaAttiva--
            if (store.pizzaAttiva < 0) {
                store.pizzaAttiva = nomeArray.length - 1
            }
        },
        autoplay(nomeArray) {
            store.autoscroll = setInterval(() => {
                this.clickAvanti(nomeArray)
            }, 3000)
        },
        stopAutoplay() {
            clearInterval(store.autoscroll)
            store.autoscroll = null
        },
    }
}
</script>

<template lang="">
    <main>

        <!-- Slder pizza -->

        <div class="jumbotron jumbotron-pizza" @mouseover="stopAutoplay" @mouseleave="autoplay">
            <div class="btn-navigation btn-prev" @click="clickDietro(pizzas)">
                <span>prev</span>
            </div>
            <div class="btn-navigation btn-next" @click="clickAvanti(pizzas)">
                <span>next</span>
            </div>
            <div class="slide">
                <img class="pizza-slice" :src="pizzas[store.pizzaAttiva].img2" alt="">
                <img class="scritta-background" :src="pizzas[store.pizzaAttiva].img1" alt="">
            </div>
        </div>

        <!-- sezione immagini 1 -->

        <div class="cards-container-1">
            <div v-for="(element, index) in cs1" :key="index" class="single-card-1">
                <img :src="element" alt="">
            </div>
        </div>

        <!-- Slder review -->

        <div class="jumbotron jumbotron-review" @mouseover="stopAutoplay" @mouseleave="autoplay">
            <div class="btn-navigation btn-prev" @click="clickDietro(reviewsCarousel)">
                <span>prev</span>
            </div>
            <div class="btn-navigation btn-next" @click="clickAvanti(reviewsCarousel)">
                <span>next</span>
            </div>
            <div class="quote">
                <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="slide-review">             
                <h2>{{ reviewsCarousel[store.pizzaAttiva].titolo }}</h2>
                <h5>{{ reviewsCarousel[store.pizzaAttiva].fromUser }}</h5>               
            </div>
            <div class="dots">
                <i  @click="changeImages(index)" v-for="(element, index) in reviewsCarousel" :class="{active: (index == store.pizzaAttiva)}" class="fa-solid fa-circle"></i>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

main {
    width: 100%;

    .jumbotron-pizza {
        background-image: url(/src/assets/img/cielostellato.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
    }

    .jumbotron {
        height: 700px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
        overflow: hidden;

        .btn-navigation {
            background-color: $white;
            position: absolute;
            width: 100px;
            height: 100px;
            border-radius: 100px;
            background-color: $white;
            display: flex;
            justify-content: center;
            font-family: "Oswald";
            text-transform: uppercase;
            color: $color-primary;
            font-size: 0.8rem;
            font-weight: bold;
            padding-top: 1rem;
            z-index: 2;

            &:hover {
                background-color: #e7e7e7;
                cursor: pointer;
            }
        }

        .btn-prev {
            left: -60px;
            rotate: 90deg;
        }

        .btn-next {
            right: -60px;
            rotate: -90deg;
        }

        .slide {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1200px;
            position: relative;
            padding-top: 3rem;

            .pizza-slice {
                height: 100%;
                z-index: 1;
            }

            .scritta-background {

                position: absolute;
            }
        }
    }

    .cards-container-1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        padding: 0.5rem 0;


        .single-card-1 {
            width: calc(100% / 4);
            margin: 0;
            display: flex;

            img {
                width: 100%;
            }
        }
    }

    .jumbotron-review {
        background-image: url(/src/assets/img/h3-testimonials-bckgrnd.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        height: 500px;
        flex-direction: column;

        .slide-review {
            width: 50%;
            text-align: center;
            margin: 1rem 0;

            h5 {
                margin-top: 1rem;
                color: $color-primary;
            }
        }

        .quote {
            font-size: 5rem;
            color: $secondary-color;
            display: flex;
        }

        .dots i {
            padding: 0 0.3rem;
            font-size: 0.6rem;
            color: #e7e7e7;

            &.active {
                color: $secondary-color;
            }
        }
    }
}
</style>