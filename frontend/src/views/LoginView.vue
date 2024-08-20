<template>
    <div class="wrapper">
        <Fieldset legend="Введите ключ" class="field-set">
            <form action="">
                <InputText v-model="password" type="password" size="large" placeholder="Введите ключ" class="input"/>
                <Button label="Войти" type="button" class="button" @click="login()" />
            </form>
        </Fieldset>
    </div>
  </template>
  
  <script>
 import Fieldset from 'primevue/fieldset';
 import InputText from 'primevue/inputtext';
 import Button from 'primevue/button';

  export default {
    name: 'HomeView',
    data() {
        return {
            password : ""
        }
    },
    components:{
        Fieldset,
        InputText,
        Button
    },
    methods:{
        login(){
            console.log(this.password)
            if(this.password === "123321"){
                window.localStorage.setItem("is_auth", true)
                window.location.replace('/')
            }
        }
    }
  }
  </script>
  
<style lang="sass" scoped>
.wrapper    
    width: 100vw
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    .field-set
        width: 30vw
        height: 10vh
        .input
            width: 70%
        .button
            width: 15%
            margin-left: 5%
</style>
  