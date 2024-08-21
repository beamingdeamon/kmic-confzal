<template>
    <div class="wrapper">
        <Card class="card">
            <template #title>
                <h3 class="title">Формирования отчета за период</h3>
            </template>
            <template #content>

                <div class="content-wrapper">
                    <div class="inputs-wrapper">
                        <div class="input-item">
                            <h2>Дата начала</h2>
                            <DatePicker v-model="start_date" showIcon fluid iconDisplay="input" dateFormat="dd.mm.yy" class="date-picker"/>
                        </div>
                        <div class="input-item">
                            <h2>Дата Оконччания (Включительно)</h2>
                            <DatePicker v-model="end_date" showIcon fluid iconDisplay="input" dateFormat="dd.mm.yy" class="date-picker"/>
                        </div>
                        <div class="input-item">
                            <h2>Kонференц-зал</h2>
                            
                            <Select v-model="selected_room" :options="rooms" :invalid="selected_room === null" optionLabel="name" placeholder="Выберите Конференц-зал" class="date-picker" />
                        </div>
                        <div class="input-item">
                            <h2>Мастер-код Администратора</h2>
                            <InputText id="topic" type="password"  v-model="code" :invalid="code === null" class="date-picker"/>
                        </div>
                    </div>
                    <Button label="Сформировать" type="button" @click="createReport()" class="button" />
                </div>

            </template>
        </Card>
    </div>
</template>

<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

export default{
    data() {
        return {
            start_date: new Date(new Date(new Date().toISOString().split('T')[0]).valueOf() - 1000 * 60 * 60 * 24 * 7),
            end_date: new Date(new Date().toISOString().split('T')[0]),
            selected_room: {},
            code: "",
            rooms: [],
        }
    },
    components:{
        Card,
        Button,
        DatePicker,
        Select,
        InputText
    },
    methods:{
        getRooms(){
            axios
                .get(`${API_URL}/conference_rooms/`)
                .then((response)=>{
                    this.rooms = response.data
                })
        },
        createReport(){
            axios
                .post(`${API_URL}/reports/`,{
                    conference_room_id : this.selected_room.id,
                    start_date: new Date(new Date(this.start_date).valueOf() + 1000 * 60 * 60 * 5).toISOString().split('T')[0],
                    end_date: new Date(new Date(this.end_date).valueOf() + 1000 * 60 * 60 * 5).toISOString().split('T')[0],
                    admin_password: this.code
                }).then((response)=>{
                    if(response.status === 200){
                        console.log(response.data)
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
                height: 30vh
                width: 100%
                display: grid
                grid-template-columns: auto auto
                grid-gap: 40px
                .input-item
                    h2
                        margin-top: 0
            .button
                padding-left: 2vw
                padding-right: 2vw
                font-size: 1.4rem
</style>