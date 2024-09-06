<template>
  <footer>
    <img src="/src/assets/img/Logo.png" alt="logo" class="logo" />
    <div class="texts">
      <div class="block">
        <a href="#">ВЫЗВАТЬ ЭВАКУАТОР</a>
        <a href="#">ДОБАВИТЬ ЭВАКУАТОР НА САЙТ</a>
      </div>
      <div class="block">
        <a href="#">ПОМОЩЬ</a>
        <a href="#">ПРАВИЛА ОПЛАТЫ</a>
        <a href="#">ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 0 var(--containers);
  padding-top: 92px;
  padding-bottom: 131px;
  display: flex;
  align-items: center;
  background: rgb(88, 108, 117);
}
.texts{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  column-gap: 50px;
}
.block {
  display: flex;
  column-gap: 50px;
}
footer .logo {
  width: 111px;
}
footer a {
  color: #fff;
  font-size: 16px;
}
@media (max-width: 1366px) {
  .block {
    flex-direction: column;
    row-gap: 20px;
  }
  footer .logo{
    width: 70px;
  }
  .block a{
    font-size: 12px;
  }
  footer{
    padding: 93px 25px 131px;
}
}
@media (max-width: 590px) {
  footer .logo{
    display: none;
  }
  .texts{
    flex-direction: column;
    row-gap: 25px;
  }
  .block{
    align-items: center;
    justify-content: center;
  }
  .block a{
    font-size: 10px;
  }
}
</style>
