<script setup>
import { ref } from 'vue'

let activeTub = ref('price')
</script>

<template>
  <div class="price">
    <div class="price__tab">
      <div class="price__tab__btn">
        <button :class="{ active: activeTub === 'price' }" @click="activeTub = 'price'">
          Стоимость
        </button>
        <button :class="{ active: activeTub === 'howOrdered' }" @click="activeTub = 'howOrdered'">
          Как заказать
        </button>
      </div>
      <div class="price__tab__info" v-if="activeTub === 'price'">
        <h1 class="price__tab__info__title">Стоимость вызова эвакуатора для перевозки авто</h1>
        <p class="price__tab__info__text">
          На сайте Эварус представлены цены, выставленные перевозчиками за стандартную услугу
          эвакуации авто по Москве и области. Начальная стоимость транспортировки зависит от
          габаритов и веса ТС: перевозка мотоцикла/малолитражки будет стоить дешевле, чем
          внедорожника/минивена. Дороже всего обойдется эвакуация неисправной спецтехники и
          грузового транспорта.
        </p>
        <h2 class="subtitle">На стоимость услуги эвакуатора в Москве влияет ряд факторов:</h2>
        <div class="price__tab__info__col">
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>класс, масса, степень повреждения транспортируемого авто</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>первоначальное месторасположение ТС в Москве и дальность следования</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>сложность погрузочно-разгрузочных операций</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>дорожные и погодные условия Москвы</p>
          </div>
        </div>
        <p class="price__tab__info__text">
          Окончательная цена зависит от того, куда подавать эвакуатор и где впоследствии выгружать
          автомобиль: Москва это будет или Московская область. Транспортировка по МО оплачивается
          согласно прайсу, плюс тариф за каждый км пробега от МКАД. Суммарная оплата увеличится,
          если машина находится в кювете/яме/гараже/водоеме и подъезд к ней усложнен. Стоимость
          возрастет и при наличии заблокированных колес/рулевого управления или серьезного
          повреждения ТС.Все нюансы эвакуации авто вы сможете обсудить с перевозчиком. Ознакомившись
          с конкретной ситуацией, он озвучит цену и сроки подачи эвакуатора.
        </p>
        <h2 class="subtitle">
          В каких случаях возможно изменение стоимости услуги после прибытия эвакуатора к месту
          погрузки авто:
        </h2>
        <div class="price__tab__info__col">
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>простой эвакуатора по вине клиента</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>смена маршрута после размещения заказа</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>непредвиденное усложнение эвакуации из-за неправильных/неполных данных о ТС</p>
          </div>
        </div>
        <p class="price__tab__info__text">
          Во избежание незапланированных трат, сообщите диспетчерской службе подробные сведения о
          своем автомобиле и обстоятельствах его поломки.
        </p>
      </div>
      <div class="price__tab__info" v-if="activeTub === 'howOrdered'">
        <h1 class="price__tab__info__title">Стоимость вызова эвакуатора для перевозки авто</h1>
        <p class="price__tab__info__text">
          Воспользовавшись онлайн-ресурсом Эварус, вы сократите время на поиск эвакуатора в Москве,
          МО и закажете услугу по оптимальной цене. Вам не придется обзванивать знакомых или долго
          искать телефон эвакуатора в интернете. Проанализируйте предложения на нашем сайте,
          выберите лучшие условия и стоимость перевозки.
        </p>
        <h2 class="subtitle">Как вызвать эвакуатор с помощью онлайн-сервиса ТутЭвакуатор.Ру:</h2>
        <div class="price__tab__info__col">
          <div class="content__col">
            <img src="/src/assets/img/Done1.png" alt="done" />
            <p>
              Ознакомьтесь с картой Москвы и Московской области, на которой желтыми маркерами
              обозначены стоянки эвакуаторов.
            </p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done2.png" alt="done" />
            <p>
              Увеличьте масштаб и определите, какой из адресов находится рядом с местом вашей
              дислокации
            </p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done3.png" alt="done" />
            <p>Выберите ближайший эвакуатор и нажмите на соответствующий маркер</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done4.png" alt="done" />
            <p>
              Просмотрите детальную информацию о перевозчике: возможные способы погрузки ТС,
              комплектацию автопарка, типы транспортируемых авто прайс с ценами
            </p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done5.png" alt="done" />
            <p>
              Кликните по голубому полю внизу карточки перевозчика и возьмите телефонный номер
              компании
            </p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done6.png" alt="done" />
            <p>
              Созвонитесь с диспетчером фирмы, обсудите детали эвакуации в Москве/МО и стоимость
              заказа
            </p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done7.png" alt="done" />
            <p>
              Сравните цены и условия перевозки у нескольких компаний, выберите наиболее подходящий
              для себя вариант
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <a href="#header" class="toTop"><img src="/src/assets/img/arrowTop.png" alt="" /></a>
  </div>
</template>

<style scoped>
.price {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 30px;
  position: relative;
  height: 100%;
}
.price__tab__info__col {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.content__col {
  width: 100%;
  display: flex;
  align-items: start;
  font-size: 26px;
  column-gap: 19px;
}
.price__tab {
  width: 1400px;
}
.price__tab__btn{
  display: flex;
}
.price__tab__btn button.active {
  border-radius: 20px 20px 0px 0px;
  background: rgb(255, 255, 255);
}
.price__tab__btn button {
  border: none;
  font-size: 32px;
  background: transparent;
  padding: 22px 50px;
  cursor: pointer;
}
.price__tab__info {
  background-color: #fff;
  padding: 48px 60px;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  border-radius: 0px 20px 20px 20px;
}
.price__tab__info__title {
  margin-bottom: 4px;
}
.price__tab__info__text {
  font-size: 26px;
}
.toTop {
  border: 1px solid rgb(2, 151, 212);
  border-radius: 8px;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  position: absolute;
  bottom: 25px;
  right: 35px;
}
.toTop img{
  width: 10px;
}
@media (max-width:845px) {
  .price__tab__btn button{
    font-size: 15px;
    padding: 15px 20px;
  }
  .price__tab__info__title{
    font-size: 20px;
  }
  .price__tab__info__text{
    font-size: 16px;
  }
  .subtitle{
    font-size: 17px;
  }
  .price__tab__info__col{
    row-gap: 15px;
  }
  .content__col{
    font-size: 14px;
    column-gap: 10px;
  }
  .content__col img{
    width: 25px;
  }
  .price__tab__info{
    padding: 40px 20px;
  }
}

</style>
