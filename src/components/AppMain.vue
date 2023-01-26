<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import { store } from '../store.js'
import singleCard from './singleCard.vue'
export default {

    components: {
        singleCard,
        Carousel,
        Slide,
        Navigation,
    },

    props: {
        pizzas: Array,
        cs1: Array,
        reviewsCarousel: Array
    },
    data() {
        return {
            store,
            clienti: [
                '/src/assets/img/h1-clients-img-1.png',
                '/src/assets/img/h1-clients-img-2.png',
                '/src/assets/img/h1-clients-img-3.png',
                '/src/assets/img/h1-clients-img-4.png',
                '/src/assets/img/h1-clients-img-5.png',
            ],
            pizze: [
                {
                    // foto: '/src/assets/img/h3-product-img-1a-100x100.png',
                    foto: 'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h3-product-img-1a.png',
                    titolo: 'bismark',
                    prezzo: '30$',
                },
                {
                    // foto: '/src/assets/img/h3-product-img-2a-150x150.png',
                    foto: 'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h3-product-img-2a.png',
                    titolo: 'fiori di zucca',
                    prezzo: '30$',
                },
                {
                    // foto: '/src/assets/img/h3-product-img-3a-150x150.png',
                    foto: 'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h3-product-img-3a.png',
                    titolo: 'campagnola',
                    prezzo: '30$',
                },
                {
                    // foto: '/src/assets/img/h3-product-img-4a-150x150.png',
                    foto: 'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h3-product-img-4a.png',
                    titolo: 'pizza tartufata',
                    prezzo: '30$',
                },
                {
                    // foto: '/src/assets/img/h3-product-img-5a-150x150.png',
                    foto: 'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h3-product-img-5a.png',
                    titolo: 'francescana',
                    prezzo: '30$',
                },
                {
                    // foto: '/src/assets/img/h3-product-img-6a-100x100.png',
                    foto: 'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h3-product-img-6a.png',
                    titolo: 'valdostana',
                    prezzo: '30$',
                }
            ],
            people: [
                {
                    image: '/src/assets/img/h1-team-1a-700x700.jpg',
                    name: 'Peter Anderson',
                    job: 'Head Chef',
                    social: [
                        {
                            icon: 'fa-brands fa-instagram',
                            url: '#',
                        },
                        {
                            icon: 'fa-brands fa-twitter',
                            url: '#',
                        },
                        {
                            icon: 'fa-brands fa-facebook-f',
                            url: '#',
                        }
                    ]
                },
                {
                    image: '/src/assets/img/h1-team-2a.jpg',
                    name: 'Sharon hayes',
                    job: 'Hexecutive Chef',
                    social: [
                        {
                            icon: 'fa-brands fa-instagram',
                            url: '#',
                        },
                        {
                            icon: 'fa-brands fa-twitter',
                            url: '#',
                        },
                        {
                            icon: 'fa-brands fa-facebook-f',
                            url: '#',
                        }
                    ]
                },
                {
                    image: '/src/assets/img/h1-team-4a.jpg',
                    name: 'Frank Bailey',
                    job: 'Kitchen Porter',
                    social: [
                        {
                            icon: 'fa-brands fa-instagram',
                            url: '#',
                        },
                        {
                            icon: 'fa-brands fa-twitter',
                            url: '#',
                        },
                        {
                            icon: 'fa-brands fa-facebook-f',
                            url: '#',
                        }
                    ]
                },
                {
                    image: '/src/assets/img/h1-team-3a.jpg',
                    name: 'Sous Simpson',
                    job: 'Head Chef',
                    social: [
                        {
                            icon: 'fa-brands fa-instagram',
                            url: '#',
                        },
                        {
                            icon: 'fa-brands fa-twitter',
                            url: '#',
                        },
                        {
                            icon: 'fa-brands fa-facebook-f',
                            url: '#',
                        }
                    ]
                }
            ]
        }
    },
    mounted() {
        this.autoplay()
        this.autoplayR()
        // this.autoplay(this.reviewsCarousel)
    },
    methods: {

        clickAvanti() {
            store.pizzaAttiva++
            if (store.pizzaAttiva > this.pizzas.length - 1) {
                store.pizzaAttiva = 0
            }
        },
        clickDietro() {
            store.pizzaAttiva--
            if (store.pizzaAttiva < 0) {
                store.pizzaAttiva = this.pizzas.length - 1
            }
        },
        autoplay() {
            store.autoscroll = setInterval(() => {
                this.clickAvanti()
            }, 3000)
        },
        stopAutoplay() {
            clearInterval(store.autoscroll)
            store.autoscroll = null
        },

        changeImages(ind) {
            store.reviewAttiva = ind
        },
        clickAvantiR() {
            store.reviewAttiva++
            if (store.reviewAttiva > this.reviewsCarousel.length - 1) {
                store.reviewAttiva = 0
            }
        },
        clickDietroR() {
            store.reviewAttiva--
            if (store.reviewAttiva < 0) {
                store.reviewAttiva = this.reviewsCarousel.length - 1
            }
        },
        autoplayR() {
            store.autoscrollReview = setInterval(() => {
                this.clickAvantiR()
            }, 3000)
        },
        stopAutoplayR() {
            clearInterval(store.autoscrollReview)
            store.autoscrollReview = null
        },
        getHoverCard(indice) {
            store.active_index_card = indice
        },
        getHoverBtn(indicex) {
            store.active_btn = indicex
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
            <div v-for="(el, j) in cs1" :key="ind" class="single-card-1" @mouseover="getHoverCard(j)" @mouseleave="store.active_index_card = 'null'">
                <img :src="el" alt="">
                <transition name="fade-scale">
                    <div class="hover-card" v-if="store.active_index_card === j">
                        <div class="eye-background">
                            <i class="fa-regular fa-eye"></i>
                        </div>
                    </div>
                </transition>
            </div>
        </div>

        <!-- Slder review -->

        <div class="jumbotron jumbotron-review" @mouseover="stopAutoplayR" @mouseleave="autoplayR">
            <div class="btn-navigation btn-prev" @click="clickDietroR">
                <span>prev</span>
            </div>
            <div class="btn-navigation btn-next" @click="clickAvantiR">
                <span>next</span>
            </div>
            <div class="quote">
                <i class="fa-solid fa-quote-left"></i>
            </div>
            <div class="slide-review">             
                <h2>{{ reviewsCarousel[store.reviewAttiva].titolo }}</h2>
                <h5>{{ reviewsCarousel[store.reviewAttiva].fromUser }}</h5>               
            </div>
            <div class="dots">
                <i  @click="changeImages(ind)" v-for="(element, ind) in reviewsCarousel" :class="{active: (ind == store.reviewAttiva)}" class="fa-solid fa-circle"></i>
            </div>
        </div>

        <!-- sezione Specials -->

        <div class="container-Specials">
            <div class="col-50 special-img">
                <img src="/src/assets/img/h1-img-7n.png" alt="">
            </div>
            <div class="col-50">
                <div class="contenitore-interno-specials">
                    <h1>specials*</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam incidunt repellendus at hic</p>
                    <div class="single-special">
                        <h2 class="price">$10</h2>
                        <div class="specials-text">
                            <h2>COMBO PICCOLO</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.</p>
                        </div>
                    </div>
                    <div class="single-special">
                        <h2 class="price">$20</h2>
                        <div class="specials-text">
                            <h2>COMBO mezzo</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.</p>
                        </div>
                    </div>
                    <div class="single-special">
                        <h2 class="price">$30</h2>
                        <div class="specials-text">
                            <h2>COMBO grande</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- sezione Specials -->

        <div class="container-parallax">
            <div class="container-title">
                <h1>GO AHEAD AND<br> BUILD YOUR<br> OWN PIZZA<br>WE WON'T<br>JUDGE!</h1>
            </div>
        </div>

        <!-- single card section -->

        <div class="cards-container">
            <singleCard v-for="(item, z) in people" :key="z" :people="item"></singleCard>
        </div>

        <!-- Slider clienti -->
        
        <div class="container-clienti">
            <Carousel class="slider-prova" :items-to-show="5" snapAlign="center" :wrap-around="true" autoplay="5000" transition="500" pauseAutoplayOnHover="true">
                <Slide v-for="(ele, nume) in clienti" :key="nume">
                    <div class="sp" @mouseover="getHoverBtn(nume)" @mouseleave="store.active_btn = 'null'">
                        <img :src="clienti[nume]" alt="">    
                    </div>
                </Slide>    
            </Carousel>
        </div>

        <!-- Slider infinito pizze -->
        <div class="container-carousel-pizza">
            <div class="pizza-title-container">
                <h5>CHOOSE YOUR FLAVOR</h5>
                <h1>THE BEST PIZZA MENU IN TOWN</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie. Interdum et malesuada fames ac.</p>
            </div>
            <Carousel class="slider-prova" :items-to-show="5.9" snapAlign="center" :wrap-around="true" autoplay="2000" transition="500" pauseAutoplayOnHover="true">
                <Slide v-for="(ele, nume) in pizze" :key="nume">
                    <div class="sp" @mouseover="getHoverBtn(nume)" @mouseleave="store.active_btn = 'null'">
                        <div class="container-image-pizza">
                            <img :src="ele.foto" alt="">
                        </div>
                        <div class="text-container">
                            <h3 class="nome-pizza">{{ ele.titolo }}</h3>
                            <h3 class="prezzo-pizza">{{ ele.prezzo }}</h3>
                        </div>
                        <div class="container-btn">
                            <button v-if="store.active_btn === nume" class="btn btn1">view products</button>
                            <button v-if="store.active_btn === nume" class="btn btn2">quickview</button>
                        </div>
                    </div>
                </Slide>    
            </Carousel>
        </div>

        <!-- Delish Section -->

        <div class="delish-container">
            <div class="col-50">
                <div class="contenitore-interno-delish">
                    <h5>MADE WITH LOVE</h5>
                    <h1>DELISH PIZZA DEALS</h1>
                    <div class="single-delish">
                        <div class="delish-text">
                            <h1 class="number">02</h1>
                            <h2 class="month">nov</h2>
                        </div>
                        <div class="delish-text">
                            <h2>TRADITIONAL NEAPOLITAN PIES IN KYOTO PIZZA MERCATO</h2>
                            <span class="position">
                                <i class="fa-solid fa-location-dot"></i>
                                <p> 204 E. Pizzetta Tommaso</p>
                            </span>   
                        </div>
                    </div>
                    <div class="single-delish border-sec">
                        <div class="delish-text">
                            <h1 class="number">03</h1>
                            <h2 class="month">nov</h2>
                        </div>
                        <div class="delish-text">
                            <h2>TERARAZZA PATIO DINING SPACE OPENING THIS WEEKEND</h2>
                            <span class="position">
                                <i class="fa-solid fa-location-dot"></i>
                                <p> 204 E. Pizzetta Tommaso</p>
                            </span>   
                        </div>
                    </div>
                    <div class="single-delish">
                        <div class="delish-text">
                            <h1 class="number">04</h1>
                            <h2 class="month">nov</h2>
                        </div>
                        <div class="delish-text">
                            <h2>SIENNA PRIVATE DINING ROOM WITH STÉPHANE BRUNN</h2>
                            <span class="position">
                                <i class="fa-solid fa-location-dot"></i>
                                <p> 204 E. Pizzetta Tommaso</p>
                            </span>   
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-50 delish-img">
                <img src="/src/assets/img/h3-img-5a.jpg" alt="">
            </div>
        </div>

        <!-- Newsletter Container -->

        <div class="newsletter-container">
            <form action="" class="form">
                <select name="" id="">
                    <option value="">1 person</option>
                    <option value="">2 people</option>
                    <option value="">3 people</option>
                    <option value="">4 people</option>
                </select>
                <h2>for</h2>
                <input type="date" value="24/01/23">
                <h2>at</h2>
                <input type="time" value="20:30">
                <input type="submit" value="book a table">
            </form>

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
            position: relative;
            display: flex;

            img {
                width: 100%;
            }

            .hover-card {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url(https://img.freepik.com/free-vector/vector-polka-background-with-small-dots_1017-13972.jpg?w=740&t=st=1674656133~exp=1674656733~hmac=aa6358cf4308b9672106b972dc92fecf5dbafb735b3819960688f61b35f9e5ea);
                background-size: cover;
                z-index: 2;
                display: flex;
                justify-content: center;
                align-items: center;

                .eye-background {
                    width: 80px;
                    height: 80px;
                    background-color: #767676;
                    border-radius: 100px;
                    background-color: $color-primary;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    i {
                        font-size: 1.5rem;
                        color: $white;
                    }

                }
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

    .container-Specials {
        width: 100%;
        display: flex;
        padding: 0.5rem 0;

        p {
            color: #767676;
        }

        .col-50 {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 60%;
            }

            .contenitore-interno-specials {
                width: 60%;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;

                .single-special {
                    display: flex;
                    gap: 1rem;
                }

                .price {
                    color: $color-primary;
                }
            }
        }

        .special-img {
            background-image: url(/src/assets/img/h1-img-4.jpg);
            background-size: cover;
            background-position: right 35% bottom 45%;
            padding: 10rem 0;
        }
    }

    .container-parallax {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(/src/assets/img/h3-background-img.jpg);
        background-size: cover;
        // background-position: right 35% bottom 45%;

        .container-title {
            width: 60%;
            padding: 6rem 0;


            h1 {
                font-size: 4.5rem;
                line-height: 1;
                color: $white
            }
        }
    }

    .cards-container {
        width: 100%;
        display: flex
    }

    .delish-container {
        display: flex;
        width: 100%;
        height: 90vh;
        color: $white;

        h1 {
            font-size: 2.5rem;
        }

        .col-50 {
            width: 50%;
            display: flex;
            height: 100%;

            .contenitore-interno-delish {
                background-image: url(/src/assets/img/cielostellato.png);
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                padding: 0 6rem;
                background-size: cover;

                h5 {
                    color: $color-primary;
                }

                .border-sec {
                    border-top: 0.1rem dotted $secondary-color;
                    border-bottom: 0.1rem dotted $secondary-color;
                }

                .single-delish {
                    display: flex;
                    align-items: flex-start;
                    gap: 2rem;
                    padding: 2rem 0;

                    .delish-text {
                        .number {
                            font-size: 3.5rem;
                            color: $color-primary;
                            line-height: 1;
                        }

                        .month {
                            text-align: center;
                        }


                        .position {
                            display: flex;
                            align-items: center;
                            font-size: 0.8rem;
                            color: $color-primary;
                            gap: 0.5rem;
                            margin-top: 1rem;
                        }
                    }

                    &:last-child {
                        padding-bottom: 0;
                    }
                }



            }
        }

        .delish-img {
            width: 50%;
            height: 100%;
            overflow: hidden;

            img {
                width: 100%;

                object-fit: cover;
            }
        }
    }

    .newsletter-container {
        width: 100%;
        margin: 0.5rem 0;
        padding: 6rem;
        background-image: url(/src/assets/img/h3-background-img-3.jpg);
        background-image: cover;
        background-position: center;

        form {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 100%;



            select,
            input {
                width: calc(100% / 4 - 3rem);
                height: 4rem;
                padding: 1rem;
                font-family: "Open Sans";
                font-size: 1rem;
                color: #7e7e7e;
                border: 0.1rem solid #000;
            }

            input[type="submit"] {
                background-color: $color-primary;
                font-family: "Oswald";
                color: $white;
                text-transform: uppercase;
                border: none;
                margin-left: 2rem;
            }
        }
    }

    .container-carousel-pizza {
        width: 100%;
        padding: 6rem 0 8rem 0;

        .pizza-title-container {
            width: 40%;
            margin: 0 auto;
            text-align: center;
            padding-bottom: 2rem;

            h1 {
                font-size: 2.4rem;
                padding: 0.5rem 0;
            }

            h5 {
                color: $color-primary;
            }
        }
    }

    .sp {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        cursor: pointer;

        &:hover .container-image-pizza {
            background-image: url(https://donpeppe.qodeinteractive.com/wp-content/themes/donpeppe/assets/img/yum.png);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        .nome-pizza {
            color: $secondary-color;
        }

        .prezzo-pizza {
            color: $color-primary;
        }

        .container-image-pizza {
            width: 100%;
            padding: 2rem 2rem 0 2rem;

            img {
                width: 100%;
            }

        }

        .container-btn {
            display: flex;
            gap: 0.5rem;
            width: 100%;
            min-height: 52px;

            .btn {
                border: none;
                padding: 1rem 0;
                width: 50%;
                text-decoration: none;
                text-transform: uppercase;
                font-family: "Oswald";
                cursor: pointer;
            }

            .btn1 {
                background-color: $color-primary;
                color: $white;

                &:hover {
                    background-color: $color-primary-hover;
                }
            }

            .btn2 {
                background-color: #f7f7f2;
                color: #000;

                &:hover {
                    background-color: $white-hover;
                }
            }
        }
    }

    .container-clienti {
        width: 100%;
        padding: 5rem 10rem;
        background-color: #f7f7f2;

        img {
            width: 100%;
        }
    }
}
</style>