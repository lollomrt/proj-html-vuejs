<script>
export default {
    props: {
        navig: Object
    },

}
</script>

<template lang="">
    <div>
        <ul v-for="(element, index) in navig.left_navigation" :key="index">
            <li><a :href="element.url">{{ element.titolo }}</a></li>                       
        </ul>
    </div>
    <div>
        <ul v-for="(element, index) in navig.right_navigation" :key="index">
            <li><a :href="element.url">{{ element.titolo }}</a></li>                       
        </ul>
    </div>
</template>

<style lang="">
    
</style>