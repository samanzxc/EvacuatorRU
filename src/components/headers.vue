<script setup>
import { ref } from "vue";

let openMenu = ref(false)
</script>

<template>
  <header id="header">
    <router-link to="EvacuatorRU"><img src="/src/assets/img/Logo.png" alt="logo" class="header__logo" /></router-link>
    <div class="header__nav" :class="{show:openMenu}">
      <img src="/src/assets/img/close.png" alt="close" class="close" @click="openMenu = false">
      <nav>
        <a href="#">О ПРОЕКТЕ</a>
        <a href="#">КОНТАКТЫ</a>
      </nav>
      <router-link to="/addPost" class="standart__btn" @click="openMenu = false">ДОБАВИТЬ ОБЪЯВЛЕНИЕ</router-link>
    </div>
    <img src="/src/assets/img/burgerMenu.png" alt="bgmenu" class="bg-menu"  @click="openMenu = true">
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  padding: 0px 100px;
  height: 156px;
}

.header__logo {
  width: 111px;
}
.header__nav {
  display: flex;
  align-items: center;
}
.header__nav nav {
  display: flex;
  column-gap: 78px;
  margin-right: 135px;
}
.header__nav nav a{
    color: black;
    font-weight: bold;
}
.header__nav nav a:hover{
    color: rgb(22, 147, 196);

}
.close {
    position: absolute;
    right: 70px;
    top: 50px;
    width: 35px;
    cursor: pointer;
    display: none;
    z-index: 115;
  }
  .bg-menu{
  cursor: pointer;
  display: none;
}
@media(max-width: 1065px){
  .header__nav{
    position: fixed;
    left: 0;
    top: -1500px;
    right: 0;
    bottom: 1500px;
    background-color: #08609b;
    color: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 45px;
    transition: .5s;
    z-index: 115;
  }
  .header__nav nav{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-size: 20px;
    row-gap: 45px;
  }
  .header__nav nav a{
    color: #fff;
  }
  .close {
    display: block;
  }
  .bg-menu{
    display: block;
  }
}
.show{
top: 0;
bottom: 0;
}
@media(max-width: 574px){
header{
  padding: 0 30px;
}
}
</style>
