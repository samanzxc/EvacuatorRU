<template>
  <div class="call__info">
    <div class="call__info__top">
      <div class="call__info__top__left">
        <h1 class="call__info__top__left__title">Что необходимо сообщить при заказе эвакуатора</h1>
        <div class="call__info__top__left__text">
          <p>
            Чтобы выбрать эвакуатор с необходимыми техническими параметрами и минимизировать
            расходы, при вызове эвакуатора следует указать:
          </p>
        </div>
        <div class="call__info__top__left__col__info col">
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>марку, модель, год выпуска и полную массу авто</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>характер неисправности ТС</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>состояние ходовой части, трансмиссии, рулевого управления</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>адрес подачи эвакуатора и пункт конечного назначения в Москве</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>
              наличие ключей от авто и документов, подтверждающих право на управление ТС
              (водительские права, техпаспорт и доверенность, если вы не собственник авто)
            </p>
          </div>
        </div>
      </div>
      <div class="call__info__top__right">
        <img src="/src/assets/img/callInfoImg1.png" alt="" />
      </div>
    </div>
    <div class="call__info__bottom">
      <div class="call__info__bottom__left">
        <img src="/src/assets/img/callInfoImg2.png" alt="" />
      </div>
      <div class="call__info__bottom__right">
        <h1 class="call__info__bottom__right__title">Как эвакуировать авто с заблокированными колесами</h1>
        <div class="call__info__bottom__right__text">
          <p>
            При помощи сервиса ТутЭвакуатор.Ру вы сможете вызвать эвакуатор в экстренных ситуациях,
            например, когда колеса авто заблокированы или ходовая ТС критически пострадала в
            результате аварии. Перевозка автомобиля с заблокированными колесами возможна несколькими
            типами эвакуаторов:
          </p>
        </div>
        <div class="call__info__bottom__right__col__info col">
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>
              Эвакуатор с манипулятором. На ТС устанавливают четыре колесных захвата, закрепленных
              на широких текстильных стропах. С помощью специальных петель оператор манипулятора
              регулирует длину строп, чтобы при перемещении на эвакуатор авто не кренилось. Стропы
              присоединяют к линейной или H-образной траверсе. Кран-манипулятор подхватывает
              траверсу за проушину, поднимает автомобиль и загружает на платформу эвакуатора.
            </p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>
              Эвакуатор с гидроплатформой (без аппарелей) и лебедкой. Авто приподнимают домкратом,
              под заблокированные колеса устанавливают подкатные тележки. При помощи лебедки авто
              затягивают на наклонную платформу эвакуатора. После этого платформу эвакуатора
              приводят в горизонтальное положение.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin-top: 32px;
  margin-bottom: 119px;
}
.content__col {
  width: 733px;
  display: flex;
  align-items: start;
  font-size: 26px;
  column-gap: 30px;
}
.call__info {
  background-color: #fff5cc;
  display: flex;
  flex-direction: column;
}
.call__info__top {
  display: flex;
}
.call__info__top__left {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 200px;
  padding-top: 80px;
}
.call__info__top__left__text {
  font-size: 26px;
  width: 644px;
}
.call__info__top__left__title{
margin-bottom: 32px;
}
.call__info__bottom__right__title{
margin-bottom: 32px;

}
.call__info__top__right {
  width: 50%;
}
.call__info__top__right img {
  width: 100%;
  height: 100%;
}
.call__info__bottom {
  display: flex;
}
.call__info__bottom__left {
  width: 50%;
}
.call__info__bottom__left img {
  width: 100%;
  height: 100%;
}
.call__info__bottom__right {
  width: 644px;
  display: flex;
  flex-direction: column;
    padding: 60px;
}
.call__info__bottom__right__text {
    font-size: 26px;
}
@media (max-width: 1700px) {
  .call__info__top__left{
    font-size: 13px;
    padding-left: 35px;
  }
  .call__info__top__left__text, .content__col, .call__info__bottom__right__text{
    font-size: 17px;
    width: 100%;
  }
  .call__info__bottom__right{
    width: 50%;
  }
}
@media (max-width: 1195px) {
  .call__info__top{
    height: 500px;
  }
  .call__info__bottom__right{
    padding: 30px;
  }
  .content__col{
    font-size: 13px;
    column-gap: 10px;
  }
  .content__col img{
    width: 20px;
  }
  .col{
    row-gap: 10px;
  }
  .call__info__top__left{
    padding-top: 30px;
  }
  .call__info__top__left__title{
    font-size: 16px;
  }
  .call__info__bottom__right__title{
    font-size: 16px;
  }
  .call__info__bottom__right__text{
    font-size: 13px;
  }
}
@media (max-width: 1195px) {
  .call__info__top__right{
    display: none;
  }
  .call__info__top__left{
    width: 100%;
  }
  .call__info__top{
    height: 100%;
  }
  .col{
    margin-bottom: 0;
  }
  .call__info__bottom__left{
    display: none;
  }
  .call__info__bottom__right{
    width: 100%;
  }
}
</style>
