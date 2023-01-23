<script>
export default {
    data() {
        return {
            hover: false
        }
    },
    props: {
        navig: Object
    },

}
</script>

<template lang="">
    <header>
        <button>
            <a href="#">order online</a>
        </button>
        <nav class="nav-container">      
            <ul>
                <li v-for="(element, index) in navig.left_navigation" :key="index" @mouseenter="hover = true" @mouseleave="hover = false"><a :href="element.url">{{ element.titolo }}</a>
                    <div v-if="element.submenu !== 'nul'" class="red">
                        <ul v-if="hover">
                            <li v-for="(item, i) in element.submenu" :key="i">{{ item }}</li>
                        </ul>
                    </div>
                </li>                       
            </ul>       
            <img src="/public/vite.svg" alt="">        
            <ul>
                <li v-for="(element, index) in navig.right_navigation" :key="index"><a :href="element.url">{{ element.titolo }}</a>
                    <div v-if="element.submenu !== 'nul'" class="red">
                        <ul v-if="hover">
                            <li v-for="(item, i) in element.submenu" :key="i">{{ item }}</li>
                        </ul>
                    </div>
                </li>                       
            </ul>
        </nav>
        <div class="icon-container">
            ivon
            ivon
        </div>
    </header>
    
    
</template>

<style lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>