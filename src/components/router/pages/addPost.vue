<script setup>
import headers from '@/components/headers.vue'
import footers from '@/components/footers.vue'
</script>

<template>
  <headers />
  <div class="banner">
    <p>Создание объявления</p>
  </div>
  <div class="add__addvert">
    <div class="add__addvert__title">
      <img src="/src/assets/img/marketeq_money-alt-1.png" alt="" />
      <p>
        Заполните все поля формы на размещение своего объявления на сайте. Размещение объявления
        платное. Стоимость за одно объявление составляет <b>990 руб.</b> Объявление будет
        опубликовано на сайте после оплаты и проверки модератором.
      </p>
    </div>
    <form action="/">
      <label for="city">
        Выберите город
        <select id="city" class="inp">
          <option value="city-1">Москва</option>
          <option value="city-2">-</option>
          <option value="city-3">-</option>
          <option value="city-3">-</option>
        </select>
      </label>
      <label for="name">
        Ваше имя
        <input type="text" id="name" class="inp" />
      </label>
      <label for="phone">
        Номер мобильного телефона
        <input type="tel" id="phone" class="inp" placeholder="+7 (999) 999 99 99" />
      </label>
      <label for="cityPhone">
        Номер городского телефона
        <input type="tel" id="cityPhone" class="inp" placeholder="+7 (999) 999 99 99" />
      </label>
      <label for="email">
        Ваш email
        <input type="email" id="email" class="inp" placeholder="example@gmail.com" />
      </label>
      <label for="loc">
        Адрес стоянки эвакуатора
        <input type="text" id="loc" class="inp" />
      </label>
    </form>
    <div class="info">
      <span class="dec"></span>
      <p class="info__text">ИНФОРМАЦИЯ</p>
      <span class="dec"></span>
    </div>
    <form>
      <label for="title">
        Заголовок объявления
        <input
          type="text"
          id="title"
          class="inp"
          placeholder="Не более 50 символов"
          maxlength="50"
        />
      </label>
      <label for="desc">
        Описание объявления
        <textarea
          id="desc"
          cols="30"
          rows="10"
          class="inp"
          placeholder="Не более 50 символов"
          maxlength="50"
        ></textarea>
      </label>
    </form>
    <div class="info">
      <span class="dec"></span>
      <p class="info__text">ЦЕНЫ</p>
      <span class="dec"></span>
    </div>
    <form>
      <label for="auto">
        <p>Легковые автомобили</p>
        <div class="flex__row">
          <div class="wrapp">
            <input type="text" class="inp" id="auto" />
            <p>рублей</p>
          </div>
          <label>
            <div class="wrapp__lable">
              <input type="checkbox" id="autocheck" />
              <p>Услугу не оказываю</p>
            </div>
          </label>
        </div>
      </label>

      <label>
        <p>Мототехника</p>
        <div class="flex__row">
          <div class="wrapp">
            <input type="text" class="inp" id="auto" />
            <p>рублей</p>
          </div>
          <label>
            <div class="wrapp__lable">
              <input type="checkbox" id="autocheck" />
              <p>Услугу не оказываю</p>
            </div>
          </label>
        </div>
      </label>

      <label>
        <p>внедорожник</p>
        <div class="flex__row">
          <div class="wrapp">
            <input type="text" class="inp" id="auto" />
            <p>рублей</p>
          </div>
          <label>
            <div class="wrapp__lable">
              <input type="checkbox" id="autocheck" />
              <p>Услугу не оказываю</p>
            </div>
          </label>
        </div>
      </label>

      <label>
        <p>Микроавтобус</p>
        <div class="flex__row">
          <div class="wrapp">
            <input type="text" class="inp" id="auto" />
            <p>рублей</p>
          </div>
          <label>
            <div class="wrapp__lable">
              <input type="checkbox" id="autocheck" />
              <p>Услугу не оказываю</p>
            </div>
          </label>
        </div>
      </label>

      <label>
        <p>Загородный тариф</p>
        <div class="flex__row">
          <div class="wrapp">
            <input type="text" class="inp" id="auto" />
            <p>руб/км</p>
          </div>
          <label>
            <div class="wrapp__lable">
              <input type="checkbox" id="autocheck" />
              <p>Услугу не оказываю</p>
            </div>
          </label>
        </div>
      </label>
    </form>
    <div class="info">
      <span class="dec"></span>
      <p class="info__text">ФОТО</p>
      <span class="dec"></span>
    </div>
    <form>
      <div class="inputs__files">
        <label class="input-file">
          Прикрепите фотографию объявления
          <input type="file" name="file" />
          <span>Загрузить</span>
        </label>
      </div>
      <label>
        <div class="wrapp__lable__top">
          <input type="checkbox" class="check" />
          <div >
            <p class="acsses">Я соглашаюсь с правилами использования сервиса, а также с передачей и обработкой моих
              данных в evarus.ru. Я подтверждаю своё совершеннолетие и ответственность за размещение.</p>
          </div>
        </div>
        <div class="btn">
          <button class="next__btn">Продолжить</button>
        </div>
      </label>
    </form>
    <a href="#header" class="toTop"><img src="/src/assets/img/arrowTop.png" alt="" /></a>
  </div>
  <footers />
</template>

<style scoped>
.banner {
  background: url('/src/assets/img/bg.png') 50% / cover no-repeat;
  width: 100%;
  height: 142px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner p {
  font-size: 50px;
  color: #fff;
  font-weight: bold;
}

.add__addvert {
  background-color: #f5f5f5;
  padding: 0 50px;
  padding-top: 60px;
  padding-bottom: 85px;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  align-items: center;
  justify-content: center;
  position: relative;
}
.add__addvert__title {
  display: flex;
  align-items: center;
  font-size: 26px;
  column-gap: 20px;
}
form {
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 798px;
}
form label {
  display: flex;
  flex-direction: column;
  color: rgb(74, 88, 94);
  font-size: 22px;
  row-gap: 12px;
}
form .inp {
  border: 0.5px solid rgb(2, 151, 212);
  border-radius: 10px;
  background: rgb(255, 255, 255);
  padding: 13px 24px;
  font-size: 26px;
  resize: vertical;
}
form .inp::placeholder {
  color: rgba(74, 88, 94, 0.247);
}
.info__text {
  color: rgb(74, 88, 94);
  font-size: 26px;
}
.info {
  display: flex;
  align-items: center;
  column-gap: 20px;
  width: 100%;
}
.dec {
  width: 100%;
  height: 1px;
  background: rgb(2, 151, 212);
}
.check {
  position: absolute;
}
.wrapp {
  display: flex;
  align-items: center;
  column-gap: 16px;
}
.flex__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapp__lable {
  display: flex;
  column-gap: 12px;
}
.wrapp__lable__top div {
  padding-left: 50px;
  margin-bottom: 12px;
}

.input-file span {
  cursor: pointer;
  border: 2px solid rgb(2, 151, 212);
  border-radius: 50px;
  width: 335px;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(2, 151, 212);
  font-size: 20px;
  font-weight: bold;
}
.input-file span:hover {
  background-color: #e6e6e6b6;
}
.input-file input {
  position: absolute;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}
.inputs__files {
  display: flex;
  margin-bottom: 51px;
}
.next__btn {
  border-radius: 50px;
  background: rgb(2, 151, 212);
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 36px;
  cursor: pointer;
}
.next__btn:hover {
  background: rgb(2, 103, 143);
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
input[type='checkbox'] {
  width: 24px;
  height: 24px;
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
@media (max-width: 1700px) {
  .add__addvert__title {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
}
@media (max-width: 1093px) {
  .banner p {
    font-size: 25px;
  }
}
@media (max-width: 856px) {
  .add__addvert__title p {
    font-size: 18px;
  }
  form {
    width: 100%;
  }
  .flex__row{
    flex-direction: column;
    align-items: start;
    row-gap: 15px;
  }
}

@media (max-width: 574px) {
  .banner p {
    font-size: 15px;
  }
 form .inp {
    font-size: 14px;
  }
  form label{
    font-size: 15px;
  }
  .input-file span{
    width: 100%;
    padding: 10px 0;
    font-size: 15px;
  }
  .acsses{
    font-size: 13px;
  }
}
</style>
