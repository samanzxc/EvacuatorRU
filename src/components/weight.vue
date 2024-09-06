<script setup>
import { ref } from 'vue'

let mql = window.matchMedia('(max-width: 850px)');
let phoneWindow = ref(false)

function checkWindow(el){
if (el.matches) {
  phoneWindow.value = true
} else {
  phoneWindow.value = false
  
}
}
mql.addListener(checkWindow)
checkWindow(mql)
let index = ref(1);

function slideRight() {
 const slide = document.querySelectorAll('.slide')
if (index.value > (phoneWindow.value? 3 : 1)) {
  index.value = 0
}
index.value++

slide.forEach((el) =>{
  if (index.value === 1) {
    el.style.left = '0'+'px'
  }
  if (index.value === 2) {
    el.style.left = -'103'+'%'
  }
  if (phoneWindow.value) {
     if (index.value === 3) {
    el.style.left = -'210'+'%'
  } 
  }
  if (phoneWindow.value) {
     if (index.value === 4) {
    el.style.left = -'320'+'%'
  } 
  }
})
}
function slideLeft() {
  const slide = document.querySelectorAll('.slide')
if (index.value < 2) {
  index.value = 5
}
index.value--
slide.forEach((el) =>{
  if (index.value === 1) {
    el.style.left = '0'+'px'
  }
  if (index.value === 2) {
    el.style.left = -'103'+'%'
  }
  if (phoneWindow.value) {
     if (index.value === 3) {
    el.style.left = -'210'+'%'
  } 
  }
  if (phoneWindow.value) {
     if (index.value === 4) {
    el.style.left = -'320'+'%'
  } 
  }
})
}


</script>

<template>
  <div class="weight__wrapp">
    <div class="weight__top">
        <div class="content__title"><h1>Какой вес может взять на борт эвакуатор</h1></div>
    <div class="content__text">
      Эвакуатор используют для перевозки всех видов автотранспорта: от небольших квадроциклов до
      габаритных коммерческих авто. Эвакуатор способен транспортировать автомобили до 8 т.
    </div>
    <b class="content__subtext">Виды эвакуаторов, доступные для заказа на ТутЭвакуатор.Ру:</b>
    </div>
<div class="slider__block">
    <div class="slider">
  <div class="btn__left" @click="slideLeft"><img src="/src/assets/img/sliderLeft.png" alt="left"></div>
  <div class="btn__right" @click="slideRight"><img src="/src/assets/img/sliderRight.png" alt="right"></div>
  <div class="hiden__slider">
    <div class="slide">
        <div class="card">
            <b class="card__title">Эвакуатор с краном-манипулятором и прямой платформой</b>
            <img class="card__img" src="/src/assets/img/slide1.png" alt="">
            <p class="card__title">Компактный и маневренный эвакуатор для транспортировки авто массой до 3,5 т. За счет вылета стрелы манипулятор осуществляет погрузку/разгрузку ТС с расстояния до 5 м. Он удобен для эвакуации автомобилей с узких улиц/дворов, небольших стоянок/парковок Москвы.</p>
        </div>
        <div class="card">
            <b class="card__title">Эвакуатор с манипулятором и ломаной / сдвижной платформой</b>
            <img class="card__img" src="/src/assets/img/slide2.png" alt="">
            <p class="card__title">Универсальный и надежный эвакуатор для эвакуации любых видов транспортных средств, включая крупную сельскохозяйственную/строительную/коммунальную технику, а также авто с низким клиренсом. Этот тип эвакуатора может быть задействован при перевозке как сильно пострадавших в аварии автомобилей, так и ТС, которые в состоянии самостоятельно заехать на платформу эвакуатора.</p>
        </div>
    </div>
    <div class="slide">
        <div class="card">
            <b class="card__title">Эвакуатор с лебедкой и платформой с аппарелями</b>
            <img class="card__img" src="/src/assets/img/slide3.png" alt="">
            <p class="card__title">Используется для перевозки ТС массой до 7 т. Автомобиль затаскивают на платформу эвакуатора по направляющим при помощи электрической/гидравлической/ручной лебедки. Эвакуатор данной модификации не применяется для транспортировки авто с АКПП или заблокированными колесами.</p>
        </div>
        <div class="card">
            <b class="card__title">Эвакуатор с лебедкой и укороченной базой для частичной погрузки авто</b>
            <img class="card__img" src="/src/assets/img/slide4.png" alt="">
            <p class="card__title">Основное назначение – транспортировка крупнотоннажной спецтехники, грузовых авто, автобусов.</p>
        </div>
    </div>
  </div>

  <div class="active__slide">
    <div class="active__slide__one dot" :class="{active: index == 1}" @click="index = 2, slideLeft()"></div>
    <div class="active__slide__two dot" :class="{active: index == 2}" @click="index = 1, slideRight()"></div>
    <div class="active__slide__thre dot" :class="{active: index == 3}" @click="index = 4, slideLeft()" v-if="phoneWindow"></div>
    <div class="active__slide__for dot" :class="{active: index == 4}" @click="index = 3, slideRight()" v-if="phoneWindow"></div>
  </div>
</div>
</div>

  </div>
</template>

<style scoped>
.weight__wrapp {
  padding-top: 263px;
  display: flex;
  flex-direction: column;
  
  padding-left: var(--containers);
  padding-right: var(--containers);
  padding-bottom: 100px;
}
.content__title {
  margin-bottom: 48px;
}
.content__text {
  width: 1249px;
  font-size: 26px;
}
.content__subtext {
  font-size: 26px;
}
.slider {
  width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 32px;

}

.btn__left img{
  position: absolute;
  cursor: pointer;
  left: -80px;
  top: 320px;
  z-index: 2;
  padding: 14px 19px;
  border: 1px var(--blue) solid;
  border-radius: 6px;
}
.btn__right img{
  position: absolute;
  right: -80px;
  top: 320px;
  cursor: pointer;
  z-index: 2;
  padding: 14px 19px;
  border: 1px var(--blue) solid;
  border-radius: 6px;
}
.hiden__slider {
  display: flex;
  overflow: hidden;
  column-gap: 45px;
}
.slide{
 transition: .6s;
 position: relative;
 left: 0px;
 display: flex;
 column-gap: 32px;
 
}
.active__slide {
    position: absolute;
    display: flex;
    bottom: -32px;
    column-gap: 8px;
    left: 686px;
}
.dot{
    width: 12px;
    height: 12px;
    background-color: #B3C8D1;
    border-radius: 50%;
    cursor: pointer;
}
.dot.active{
    background-color: var(--blue);
}
.card {
    background-color: #fff;
    border-radius: 20px;
    width: 684px;
    height: 682px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    font-size: 20px;
}
.slider__block{
  display: flex;
  align-items: center;
  justify-content: center;
}
@media(max-width: 1700px){
  .slider{
    width: 1000px;
  }
  .card {
    width: 481px;
    height: 640px;
  }
  .active__slide{
    left: 484px;
  }
  .content__text{
    width: 100%;
  }
}
@media(max-width: 1240px){
  .slider{
    width: 650px;
  }
  .card {
    width: 297px;
    height: 525px;
    font-size: 14px;
  }
  .active__slide{
    left: 300px;
  }
  .btn__right img,.btn__left img{
    top: 240px;
    width: 40px;
    padding: 5px 13px;
  }
}
@media(max-width: 844px){
  .slider{
    width: 300px;
  }
  .active__slide{
    left: 120px;
  }
}
@media(max-width: 844px){
  .card{
    width: 284px;
  }
  .btn__right img{
    right: -45px;
  }
  .btn__left img{
    left: -60px;
  }
}
@media(max-width: 470px){
  .btn__right{
    display: none;
  }
  .btn__left {
    display: none;
  }
}
</style>
