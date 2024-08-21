<template>
    <div class="wrapper">
        <Card class="card">
            <template #title>
                <h3 class="title">Бронирование конференц-зала</h3>
            </template>
            <template #content>
                <div class="content-wrapper">
                    <div class="inputs-wrapper">
                        <div class="input-block">
                            <div class="input-item">
                                <h2>Тема встречи <span>*</span></h2>
                                <InputText id="topic" v-model="book.topic" :invalid="book.topic === null" class="input"/>
                            </div>
                        </div>
                        <div class="input-block">
                            <div class="input-item">
                                <h2>Выберите Конференц-зал <span>*</span></h2>
                                <Select v-model="book.selected_room" :options="rooms" :invalid="book.selected_room === null" optionLabel="name" placeholder="Выберите Конференц-зал" class="input" />
                            </div>
                            <div class="input-item">
                                <h2>Место Работы <span>*</span></h2>
                                <Select v-model="book.selected_work_place" :options="work_places" :invalid="book.selected_work_place === null" optionLabel="name" placeholder="Место Работы" class="input" />
                            </div>
                        </div>
                        <div class="input-block">
                            <div class="input-item">
                                <h2>Выберите дату <span>*</span></h2>
                                <DatePicker v-model="book.booking_date" showIcon fluid iconDisplay="input" :invalid="book.booking_date === null" dateFormat="dd.mm.yy" class="input"/>
                            </div>
                            <div class="input-item">
                                <h2>Время от (Время Начала) <span>*</span></h2>
                                <DatePicker id="datepicker-timeonly" v-model="book.start_time" :invalid="book.start_time === null" timeOnly fluid  class="input"/>
                            </div>
                            <div class="input-item">
                                <h2>Время до (Время Оконччания) <span>*</span></h2>
                                <DatePicker id="datepicker-timeonly" v-model="book.end_time" :invalid="book.end_time === null" timeOnly fluid class="input"/>
                            </div>
                        </div>
                        <div class="input-block">
                            <div class="input-item">
                                <h2>ФИО <span>*</span></h2>
                                <InputText id="topic" v-model="book.creater" :invalid="book.creater === null" class="input"/>
                            </div>
                            <div class="input-item">
                                <h2>Внутренний номер <span>*</span></h2>
                                <InputText id="topic" v-model="book.phone_number" :invalid="book.phone_number === null" class="input"/>
                            </div>
                            <div class="input-item">
                                <h2>Мастер-код <span>*</span></h2>
                                <InputText id="topic" v-model="book.code" :invalid="book.code === null" class="input"/>
                            </div>
                            
                        </div>
                        
                    </div>
                    <Button label="Сформировать" type="button" class="button" @click="createBooking()"/>
                </div>

            </template>
        </Card>
    </div>
</template>

<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL


export default{
    data() {
        return {
            book:{
                topic : "",
                selected_room : {},
                selected_work_place : {},
                booking_date : new Date(),
                start_time : new Date(),
                end_time : new Date(),
                creater : "",
                phone_number : "",
                code : "",
            },
            rooms: [],
          work_places: [],
          
        }
    },
    components:{
        Card,
        Button,
        DatePicker,
        InputText,
        Select
    },
    methods:{
        getRooms(){
            axios
                .get(`${API_URL}/conference_rooms/`)
                .then((response)=>{
                    this.rooms = response.data
                })
        },
        getWorkPlaces(){
            axios
                .get(`${API_URL}/companies/`)
                .then((response)=>{
                    this.work_places = response.data
                })
        },
        createBooking(){
            axios
                .post(`${API_URL}/bookings/`,{
                    conference_room_id : this.book.selected_room.id,
                    company_id: this.book.selected_work_place.id,
                    date: new Date(new Date(this.book.booking_date).valueOf() + 1000 * 60 * 60 * 24).toISOString().split('T')[0],
                    time_from: this.book.start_time.toLocaleTimeString('it-IT'),
                    time_to: this.book.end_time.toLocaleTimeString('it-IT'),
                    subject: this.book.topic,
                    full_name: this.book.creater,
                    internal_number: this.book.phone_number,
                    master_code: this.book.code
                }).then((response)=>{
                    if(response.status === 200){
                        alert('Создание прошло успешно')
                        window.location.replace('/')
                    }else{
                        alert('Не правильный пароль')
                    }
                }).catch(function (error) {
                    if (error.response) {
                        alert('Ошибка')
                    }
                });
        }
    },
    mounted(){
      let authed = localStorage.getItem('is_auth')
      console.log(authed)
      if(authed == null || authed == undefined){
          window.location.replace("/login")
      }

      this.getRooms()
      this.getWorkPlaces()
  }
}
</script>

<style lang="sass" scoped>
.wrapper
    width: 100vw
    display: flex
    justify-content: center
    .card
        margin-top: 2vh
        width: 80vw
        .title
            text-align: center
        .content-wrapper
            width: 100%
            display: flex
            align-items: center
            flex-direction: column
            .inputs-wrapper
                height: 45vh
                width: 100%
                .input-block
                    display: flex
                    flex-direction: row
                    .input-item
                        width: 100%
                        .input
                            width: 95%
                        h2
                            font-size: 1.2rem
                            span
                                color: red
            .button
                padding-left: 2vw
                padding-right: 2vw
                font-size: 1.4rem
</style>