<script>
export default {
    data() {
        return {
            active_index: null
        }
    },
    props: {
        navig: Object
    },
    methods: {
        getHover(i) {
            this.active_index = i
            this.navig.left_navigation[this.active_index].active == true
        }
    }

}
</script>

<template lang="">
    <header>
        <div class="header-container">
            <button>
            <a href="#">order online</a>
            </button>
            <nav class="nav-container">      
                <ul>
                    <li v-for="(element, index) in navig.left_navigation" :key="index" @mouseenter="getHover(index)" @mouseleave="active = false"><a :href="element.url">{{ element.titolo }}</a>
                        <div v-if="element.submenu !== 'nul'" class="submenu">
                            <ul v-if="navig.left_navigation.active">
                                <li v-for="(item, i) in element.submenu" :key="i">{{ item }}</li>
                            </ul>
                        </div>
                    </li>                       
                </ul>       
                <img src="/public/h5-logo-divided-header.png" alt="">        
                <ul>
                    <li v-for="(element, index) in navig.right_navigation" :key="index"><a :href="element.url">{{ element.titolo }}</a>
                        <div v-if="element.submenu !== 'nul'" class="submenu">
                            <ul v-if="hover">
                                <li v-for="(item, i) in element.submenu" :key="i">{{ item }}</li>
                            </ul>
                        </div>
                    </li>                       
                </ul>
            </nav>
            <div class="icon-container">
                <div class="single-icon">
                    <div class="counter-container">
                        <span>0</span>
                    </div>
                    <img src="/public/svg/svg-1.svg" alt="">
                    <span>cart</span>
                </div>
                <div class="single-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <span>search</span>
                </div>
            </div>
        </div>
    </header>
    
    
</template>

<style lang="scss">
@use '../styles/partials/variables' as *;

header {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 18vh;
    position: absolute;
    z-index: 1;
    font-size: 0.8rem;

    .header-container {
        display: flex;
        width: 1200px;
        justify-content: space-between;
        align-items: center;

        button {
            background-color: $color-primary;
            color: $white;
            border: none;
            padding: 1rem 0;
            width: 15%;

            a {
                text-decoration: none;
                color: #fff;
                text-transform: uppercase;
            }
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 50%;
            height: 100%;
        }

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 30%;
            height: 100%;
            list-style: none;

            li {
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

            }

            a {
                text-decoration: none;
                color: #fff;
            }
        }

        img {
            width: 25%;
        }

        .icon-container {
            width: 15%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 2rem;
            color: $white;
            height: 100%;

            .single-icon {
                display: flex;
                position: relative;

                .counter-container {
                    position: absolute;
                    background-color: $white;
                    color: $color-primary;
                    width: 1.1rem;
                    height: 1.1rem;
                    border-radius: 2rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.7rem;
                    top: -0.3rem;
                    left: -0.3rem;
                }

                img {
                    width: 2rem;
                    margin-right: 0.5rem;
                    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg) brightness(100%) contrast(200%);
                }

                i {
                    font-size: 1.3rem;
                    margin-right: 0.5rem;
                }
            }

        }
    }

}
</style>