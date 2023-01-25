<script>
export default {
    data() {
        return {
            active_index_left: 'null',
            active_index_right: 'null'
        }
    },
    props: {
        navig: Object
    },
    methods: {
        getHoverLeft(i) {
            this.active_index_left = i
        },
        getHoverRight(i) {
            this.active_index_right = i
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
                <ul class="list-left">
                    <li class="submenu-parent" v-for="(element, index) in navig.left_navigation" :key="index" :class="element.active === true ? 'active' : ''" @mouseover="getHoverLeft(index)" @mouseleave="this.active_index_left = 'null'"><a :href="element.url">{{ element.titolo }}</a>
                        <div v-if="element.submenu !== 'nul'" class="submenu">
                            <ul v-if="active_index_left === index">
                                <li class="item" v-for="(item, i) in element.submenu" :key="i">{{ item }}</li>
                            </ul>
                        </div>
                    </li>                       
                </ul>       
                <img src="/public/h5-logo-divided-header.png" alt="">        
                <ul class="list-right">
                    <li class="submenu-parent" v-for="(element, index) in navig.right_navigation" :key="index" @mouseover="getHoverRight(index)" @mouseleave="this.active_index_right = 'null'"><a :href="element.url">{{ element.titolo }}</a>
                        <div v-if="element.submenu !== null" class="submenu">
                            <ul v-if="active_index_right === index">
                                <li class="item" v-for="(item, i) in element.submenu" :key="i">{{ item }}</li>
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
    z-index: 10;
    font-size: 0.8rem;

    .active::before {
        content: url(/public/svg/svg-0.svg);
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg) brightness(100%) contrast(200%);
        width: 1.5rem;
        margin-right: 0.4rem
    }

    .header-container {
        display: flex;
        height: 100%;
        width: 1200px;
        justify-content: space-between;
        align-items: center;

        button {
            background-color: $color-primary;
            color: $white;
            border: none;
            padding: 1rem 0;
            width: 15%;
            cursor: pointer;

            &:hover {
                background-color: $color-primary-hover;
            }

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
            cursor: pointer;

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

    .submenu-parent {
        position: relative;

        .submenu {
            position: absolute;
            width: 250px;
            top: 100%;
            left: 0;
            background-color: #1b1b1b;


            ul {
                border-top: 0.2rem solid $color-primary;
                padding: 2.5rem;
                gap: 1rem;
                font-family: "Open Sans";
                text-transform: capitalize;
                font-size: 0.8rem;
                display: flex;
                align-items: flex-start;
                width: 100%;
                flex-direction: column;

                li {
                    width: 100%;
                    justify-content: flex-start;
                }

                .item {
                    color: #a8a8a8;
                    cursor: pointer;

                    &:hover {
                        color: $white
                    }

                    &:hover::before {
                        content: url(/public/svg/svg-0.svg);
                        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg) brightness(100%) contrast(200%);
                        width: 1.5rem;
                        margin-right: 0.4rem
                    }
                }
            }
        }

    }

}
</style>