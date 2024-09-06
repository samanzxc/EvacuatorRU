<script setup>
import cardInfo from './cardInfo.json'
</script>

<template>
  <div class="cards__wrapp">
    <div class="card" v-for="(card, index) in cardInfo" :key="index">
      <div class="wrapp__flex">
        <div class="card__title">{{ card.cardName }}</div>
        <div class="card__info">
          <div class="card__img">
            <img :src="'/EvacuatorRU/src/assets/img/'+ card.cardImg" alt="imgAuto" />
          </div>
          <div class="card__price">
            <div class="card__price__tab">
              <p>Легковой Автомобиль</p>
              <b>{{ card.priceAuto }} руб</b>
            </div>
            <div class="card__price__tab">
              <p>Мотоцикл (квадроцикл и т.д.)</p>
              <b>{{ card.priceMoto }} руб</b>
            </div>
            <div class="card__price__tab">
              <p>Внедорожник</p>
              <b v-if="card.priceOffRoad">{{ card.priceOffRoad }} руб</b>
              <b v-else><span>нет</span></b>
            </div>
            <div class="card__price__tab">
              <p>Микроавтобус</p>
              <b v-if="card.priceBuss">{{ card.priceBuss }} руб</b> <b v-else><span>нет</span></b>
            </div>
            <div class="card__price__tab">
              <p>Загородный тариф</p>
              <b>{{ card.priceNoCity }} руб/км</b>
            </div>
          </div>
          <div class="card__btn__wrapp">
            <button class="card__btn">
              <img src="/src/assets/img/cardCall.png" alt="cardCall" />
              <p>+7 999 99 99</p>
            </button>
            <button class="card__btn">
              <img src="/src/assets/img/cardCallTwo.png" alt="cardCallTwo" />
              <p>+7 999 99 99</p>
            </button>
            <div class="card__btn__info">
              <div class="location">
                <img src="/src/assets/img/location.png" alt="location" />
                <p>Место стоянки</p>
              </div>
              <div class="location__exact">{{ card.cardeLocation }}</div>
            </div>
            <div class="card__btn__id">
              <p>ID Объявления {{ card.cardId }}</p>
              <a href="#">Заказать рекламу</a>
            </div>
          </div>
        </div>
        <div class="card__desc">
          <p>{{ card.cardDesc }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="pagination">
    <span class="active">1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span><img src="/src/assets/img/pagRight.png" alt="" /></span>
  </div>
</template>

<style scoped>
.cards__wrapp {
  display: flex;
  flex-direction: column;
  row-gap: 44px;
  padding: 0 var(--containers);
  align-items: center;
}
.card {
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  background-color: #fff;
  padding: 40px 48px;
  border-radius: 20px;
  box-shadow: 2px 2px 10px 2px rgba(39, 52, 58, 0.15);
  align-items: center;
  justify-content: center;
}
.wrapp__flex{
  display: flex;
  flex-direction: column;
  row-gap: 28px;
}
.card__title {
  font-size: 32px;
  font-weight: bold;
}
.card__info {
  display: flex;
  column-gap: 28px;
}
.card__img img {
  width: 414px;
  height: 328px;
}
.card__price {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
.card__price__tab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 498px;
  height: 56px;
  border-radius: 10px;
  background: rgb(242, 244, 248);
  padding: 16px 20px;
  font-size: 20px;
  color: rgb(119, 119, 119);
}
.card__btn__wrapp {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
.card__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 50px;
  background: rgb(2, 151, 212);
  padding: 16px 0;
  width: 335px;
  color: #fff;
  font-size: 20px;
  column-gap: 13px;
  cursor: pointer;
}
.card__btn:hover{
  background: rgb(2, 123, 170);

}
.card__btn__info {
  border-radius: 10px;
  background: rgb(255, 245, 204);
  font-size: 20px;
  padding: 16px 20px;
}
.location {
  display: flex;
  color: #777777;
  margin-bottom: 12px;
}
.location img {
  margin-right: 4px;
}
.card__btn__id {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(2, 151, 212);
  border-radius: 50px;
  font-size: 16px;
  color: rgb(2, 151, 212);
  height: 100%;
}
.card__btn__id p {
  font-size: 12px;
}
.card__btn__id a {
  color: rgb(2, 151, 212);
  text-decoration: underline;
}
.card__desc {
  font-size: 20px;
}
.pagination {
  display: flex;
  justify-content: center;
  column-gap: 18px;
  margin-top: 60px;
  margin-bottom: 80px;
}
.pagination span {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(2, 151, 212);
  border-radius: 6px;
  border: 1px rgb(2, 151, 212) solid;
  font-weight: bold;
  font-size: 26px;
  cursor: pointer;
}
.pagination span.active {
  background: rgb(2, 151, 212);
  color: #fff;
}
@media (max-width: 1531px) {
  .card__img img {
    width: 200px;
    height: auto;
  }
  .card__price__tab {
    height: 35px;
    font-size: 14px;
  }
  .card__btn {
    padding: 8px 0;
    font-size: 14px;
  }
  .card__btn__info {
    font-size: 14px;
    padding: 8px 20px;
  }
  .card__btn__id {
    height: auto;
  }
}
@media (max-width: 1281px) {
  .card__img {
display: none;
  }
}
@media (max-width: 1065px) {
  .card__info{
      flex-direction: column;
      row-gap: 25px;
    }
}
@media (max-width: 1065px) {
  .card__price{
    width: 100%;
  }
  .card__price__tab {
   width: 300px;
    font-size: 13px;
  }
  .card__btn {
    width: 300px;
    font-size: 13px;
  }
  .card{
      width: 350px;
    }
}
</style>
