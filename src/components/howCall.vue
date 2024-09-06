<script></script>

<template>
  <div class="how__call__wrapp">
    <div class="banner__how__call">
      <img src="/src/assets/img/Illustration.png" alt="" />
      <p>Здесь может быть ваш эвакуатор</p>
      <router-link to="/addPost" class="standart__btn">ДОБАВИТЬ ОБЪЯВЛЕНИЕ</router-link>
    </div>
    <div class="how__call__block">
      <div class="how__call__block__left">
        <div class="how__call__block__left__title">
          <b>Как вызвать эвакуатор в Москве дешево?</b>
        </div>
        <div class="how__call__block__left__text">
          <p>
            Поломка авто или ДТП – случайностей на дороге много. Решение одно – вызвать эвакуатор и
            доставить неисправный автомобиль на СТО/парковку или в гараж в Москве. С помощью
            онлайн-сервиса Эварус вы сможете заказать услугу эвакуатора в Москве (Московской
            области) максимально быстро и при этом сэкономить.
          </p>
          <p>
            Мы предоставляем доступ к базе коммерческих и частных эвакуаторов Москвы. Это надежные
            компании, которые оперативно пришлют спецтехнику вам на помощь и обеспечат безопасную
            транспортировку авто.
          </p>
        </div>
      </div>
      <div class="how__call__block__right">
        <img src="/src/assets/img/howCallImg.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.how__call__wrapp {
  background: #fff;
}
.banner__how__call {
  background: url('/src/assets/img/bg.png') 50% / cover no-repeat;
  width: 100%;
  height: 142px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  column-gap: 40px;
  margin-bottom: 100px;
}
.how__call__block {
  display: flex;
  padding: 0 var(--containers);
  justify-content: space-between;
  column-gap: 39px;
  padding-bottom: 100px;
}
.how__call__block__left {
  display: flex;
  flex-direction: column;
  width: 698px;
}
.how__call__block__left__title {
  font-size: 40px;
  margin-bottom: 48px;
}
.how__call__block__left__text {
  font-size: 28px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}
@media (max-width: 1669px) {
  .how__call__block__right img {
    width: 600px;
  }
}
@media (max-width: 1393px) {
  .banner__how__call p {
    font-size: 25px;
  }
  .banner__how__call img {
    width: 100px;
  }
  .standart__btn {
    font-size: 14px;
    width: 250px;
    height: 35px;
  }
  .how__call__block__right {
    display: none;
  }
  .how__call__block {
    justify-content: center;
  }
}
@media (max-width: 910px) {
  .banner__how__call p {
    font-size: 17px;
  }
  .standart__btn {
    font-size: 13px;
    width: 200px;
    height: 35px;
  }
}
@media (max-width: 910px) {
  .banner__how__call img {
    display: none;
  }
  .banner__how__call {
    column-gap: 20px;
  }
}
@media (max-width: 589px) {
  .banner__how__call p {
    font-size: 11px;
  }
  .standart__btn {
    font-size: 8px;
    width: 120px;
    height: 30px;
  }
  .how__call__block__left__title{
    font-size: 20px;
  }
  .how__call__block__left__text{
    font-size: 17px;
  }
}
</style>
