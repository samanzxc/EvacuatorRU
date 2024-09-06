<script setup></script>

<template>
  <div class="what__inside__wrapp">
<div class="what__inside">
    <div class="what__inside__title"><h1>Что входит в стоимость перевозки эвакуатором</h1></div>
    <div class="what__inside__text">
      <p>
        Стоимость эвакуации включает в себя оплату услуг по погрузке, перевозке и выгрузке авто, а
        также по подаче эвакуатора в пункт дислокации ТС в Москве.
      </p>
      <b>При формировании цены перевозчики берут в расчет четыре аспекта:</b>
    </div>
    <div class="what__inside__cards">
        <div class="what__inside__card">
            <div class="what__inside__card__head"><img src="/src/assets/img/cardHead1.png" alt=""></div>
            <p class="what__inside__card__title">Грузоподъемность эвакуатора</p>
            <p class="what__inside__card__text">Чем мощнее эвакуатор, тем дороже обходится ее эксплуатация, ем внушительнее будет сумма к оплате эвакуации</p>
        </div>
        <div class="what__inside__card">
            <div class="what__inside__card__head"><img src="/src/assets/img/cardHead2.png" alt=""></div>
            <p class="what__inside__card__title">Предполагаемый пробег</p>
            <p class="what__inside__card__text">Учитывается удаленность стоянки эвакуатора от местоположения ТС, расстояние между пунктами погрузки в Москве и выгрузки авто</p>
        </div>
        <div class="what__inside__card">
            <div class="what__inside__card__head"><img src="/src/assets/img/cardHead3.png" alt=""></div>
            <p class="what__inside__card__title">Дополнительное оборудование</p>
            <p class="what__inside__card__text">При эвакуации машин с серьезными поломками перевозчики оснащают эвакуатор вспомогательными приспособлениями, что закономерно отражается на стоимости транспортировки.</p>
        </div>
        <div class="what__inside__card">
            <div class="what__inside__card__head"><img src="/src/assets/img/cardHead4.png" alt=""></div>
            <p class="what__inside__card__title">Уровень сложности</p>
            <p class="what__inside__card__text">При значительном повреждении автомобиля погрузочно-разгрузочные работы усложняются. Они требуют подключения водителя-оператора высокой квалификации</p>
        </div>
    </div>
</div>
  </div>
</template>

<style scoped>

.what__inside__wrapp {
    padding: 100px var(--containers);
}
.what__inside__title {
    margin-bottom: 48px;
}
.what__inside__text {
    font-size: 26px;
    display: flex;
    flex-direction: column;
    row-gap: 48px;
    margin-bottom: 105px;
}
.what__inside__cards {
    display: flex;
    column-gap: 24px;
    justify-content: center;
}
.what__inside__card {
    background-color: #0297D4;
    min-width: 332px;
    height: 271px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    padding: 31px 35px;
    position: relative;
    z-index: 10;
}
.what__inside__card__head {
    position: absolute;
    background-color: #0297D4;
    border-radius: 50%;
    width: 149px;
    height: 149px;
    top: -70px;
    z-index: -1;
    padding-top: 12px;
}
.what__inside__card__title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 17px;
}
.what__inside__card__text {
    font-size: 18px;
}

@media(max-width: 1750px){
    .what__inside__card p{
        font-size: 15px;
    }
    .what__inside__card{
        width: 350px;
        min-width: 250px;
    }
    .what__inside__cards{
        justify-content: space-between;
    }
}
@media(max-width: 1175px){
    .what__inside__title,.what__inside__text{
        font-size: 16px;
    }
    .what__inside__card{
        width: 200px;
        min-width: 200px;
    }
    .what__inside__card p{
        font-size: 12px;
    }
}
@media(max-width: 1013px){
    .what__inside__cards{
        flex-direction: column;
        row-gap: 100px;
        align-items: center;
    }
    .what__inside__card{
        width: 300px;
        min-width: 300px;
    }
    .what__inside__card p{
        font-size: 18px;
    }
}
</style>
