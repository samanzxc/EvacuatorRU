<script setup>
import cards from "@/components/cards.vue";
import headers from "@/components/headers.vue";
import howCall from "./howCall.vue";
import WhatToKnow from "./WhatToKnow.vue";
import whatInside from "./whatInside.vue";
import content from "./content.vue";
import weight from "./weight.vue";
import callInfo from "./callInfo.vue";
import price from "./price.vue";
import footers from "./footers.vue";
</script>

<template>
<headers/>
<main>
    <div class="banner">
        <p>Телефон для вызова эвакуатора в <span class="blue">Москве</span></p>
    </div>
    <cards/>
    <howCall/>
    <WhatToKnow/>
    <whatInside/>
    <content/>
    <weight/>
    <callInfo/>
    <price/>
    <footers/>
</main>
</template>

<style scoped>
main{
    background-color: #F3F6F9;
}
.banner{
    background: url('/src/assets/img/bg.png') 50%/cover no-repeat;
    width: 100%;
    height: 142px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 94px;
}
.banner p{
    font-size: 50px;
    color: #fff;
    font-weight: bold;
}
.blue{
    color: #6AD3FF;
    text-decoration: underline;
}
@media(max-width: 1093px){
  .banner p{
font-size: 25px;
  }
}
@media(max-width: 574px){
  .banner p{
font-size: 15px;
}
}
.banner{
    height: 100px;
}
</style>
