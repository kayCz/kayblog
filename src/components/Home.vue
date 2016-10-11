<template>
	<div class="kay">
		 <Navbar style="float:left;height:100%;width:10%;"></Navbar>
         <router-view style="float:left;"></router-view>
	</div>
</template>


<script>
    import Navbar from "./Navbar.vue"

    export default {
        components:{
            "Navbar":Navbar
        }
    }
</script>

<style>
    .kay {
        width:100%;
    }
</style>

