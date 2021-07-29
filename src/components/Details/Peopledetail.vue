<template>
<div >  
            <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">SmsSurveyId</th>

      <th scope="col">Name</th>
      <th scope="col">PhoneNumber</th>
      <th scope="col">SmsResult</th>
      <th scope="col">Answer</th>      
      <th></th>
    </tr>
  </thead>
  <tbody >
    <tr v-for="(item,index) in people" :key="index">
      <th scope="row">{{item.id}}</th>
      <td >{{item.smsSurveyId}}</td>

      <td >{{item.name}}</td>
      <td >{{item.phoneNumber}}</td>
      <td >{{item.smsResult}}</td>
      <td >{{item.answer}}</td>
            <td><button v-on:click="deletePerson(item.id)" class="btn btn-info">Delete</button></td>

    </tr>
  </tbody>
</table>
</div>
</template>

<script>

import axios from "axios";



export default {
     data(){
        return{
            people: [],
            temp: this.$route.params.id,
        }
    },
    mounted(){
        
        axios.get('http://localhost:8081/api/SmsSurveyPeople/GetId/'+ this.temp)   
        .then(response => {
            this.people = response.data;            
        })
        .catch(e => console.log(e))       
        
    },  
     methods:{
        getData(){
           axios.get('http://localhost:8080/api/SmsSurveyPeople/GetId/'+ this.temp)   
        .then(response => {
            this.people = response.data;            
        })
        .catch(e => console.log(e))
        },
        deletePerson(id){
            axios.delete("http://localhost:8080/api/SmsSurveyPeople/"+id)
            .then(() => {this.getData()})
            
        },
     }
    
    
}
</script>
