<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <Card>
        <template #title>Поиск конференц-зала</template>
        <template #content>
          <div class="card-wrapper">
            <div class="search">
              <DatePicker v-model="filter_date" showIcon fluid iconDisplay="input" dateFormat="dd.mm.yy" class="date-picker"/>
              <Select v-model="selected" :options="select_options" optionLabel="name" placeholder="Выберите зал" class="select" @change="selectChanged()"/>
              <Button label="Найти" type="button" class="button" @click="getBookings()" />
            </div>
            <DataTable :value="bookings" tableStyle="min-width: 50rem" class="table">
                <Column field="booking_date" header="Дата бронирования">
                  <template #body="slotProps">
                      {{ new Date(slotProps.data.booking_date).toLocaleDateString() }}
                  </template>
                </Column>
                <Column field="start_time" header="Время От"></Column>
                <Column field="end_time" header="Время До"></Column>
                <Column field="topic" header="Тема встречи"></Column>
                <Column field="company" header="Компания">
                  <template #body="slotProps">
                      {{ slotProps.data.company.name }}
                  </template>
                </Column>
                <Column field="creater" header="ФИО"></Column>
                <Column field="phone_number" header="ВН. Номер"></Column>
                <Column field="topic" header="Действие">
                  <template #body="">
                      <span class="close">Отменить</span>
                  </template>
                </Column>
            </DataTable>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from 'primevue/card';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

export default {
  name: 'HomeView',
  data() {
        return {
            filter_date : new Date(),
            selected: {
              name : "Все",
              value : "all"
            },
            select_options: [
              {
              name : "Все",
              value : "all"
            }
          ],
          bookings : [
          //   {
          //   id: 0,
          //   booking_date : "2024-08-20T00:00:00Z",
          //   start_time : "12:00",
          //   end_time : "13:00",
          //   topic : "Обсуждение МСФО 17",
          //   company : {
          //     name : "Казахмыс"
          //   },
          //   creater : "Шахжанов Елдар",
          //   phone_number : "2100"
          // }, {
          //   id: 1,
          //   booking_date : "2024-08-20T00:00:00Z",
          //   start_time : "12:00",
          //   end_time : "13:00",
          //   topic : "Обсуждение МСФО 17",
          //   company : {
          //     name : "Казахмыс"
          //   },
          //   creater : "Шахжанов Елдар",
          //   phone_number : "2100"
          // }
        ]
        }
    },
  components:{
    Card,
    DatePicker,
    Select,
    Button,
    DataTable,
    Column
  },
  methods:{
    selectChanged(){
      this.getBookings()
    },

    getBookings(){
      if(this.selected.value === "all"){
        axios
          .get(`${API_URL}/bookings/?date=${this.filter_date}`)
          .then((response)=>{
            this.bookings = response.data
          })
      }else{
        axios
          .get(`${API_URL}/bookings/?date=${this.filter_date}&conference_room_id=${this.selected.id}`)
          .then((response)=>{
            this.bookings = response.data
          })
      }
    },

    getRooms(){
      axios
        .get(`${API_URL}/conference_rooms/`)
        .then((response)=>{
          response.data.map((item)=>{
            this.select_options.push(item)
          })
        })
    }
  },
  mounted(){
      let authed = localStorage.getItem('is_auth')
      if(authed == null || authed == undefined){
          window.location.replace("/login")
      }
      this.getRooms()
      this.getBookings()
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  width: 100vw
  display: flex
  justify-content: center
  .content-wrapper
    width: 80vw
    margin-top: 4vh
    .card-wrapper
      .search
        display: flex
        flex-direction: row
        justify-content: space-around
        width: 38vw
        .select
          width: 12vw
        .date-picker
          width: 12vw
        .button
          width: 10vw 
    .table
      margin-top: 4vh
      .close
        color: red
        cursor: pointer
</style>