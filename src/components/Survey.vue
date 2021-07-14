<template>
<div>
    <div>
        <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">StartDate</th>
      <th scope="col">Duration</th>
      <th scope="col">Question</th>
      <th scope="col">InsertedBy</th>
      <th scope="col">InsertedDate</th>
      <th scope="col">Status</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody >
    <tr v-for="(item,index) in items" :key="index">
      <th scope="row">{{item.id}}</th>
      <td >{{item.startDate}}</td>
      <td >{{item.duration}}</td>
      <td >{{item.question}}</td>
      <td >{{item.insertedBy}}</td>
      <td >{{item.insertedDate}}</td>
      <td >{{item.status}}</td>
      
      <td><button v-on:click="getir" class="btn btn-info">Detail</button></td>
    </tr>
  </tbody>
</table>
    </div>
</div>


</template>

<script>

import axios from "axios";


export default {
    data(){
        return{
            items: [],
            temp:"",
        }
    },
    mounted(){
        axios.get("http://localhost:8080/api/SmsSurveys")
        .then(response => {
            this.items = response.data;            
        })
        .catch(e => console.log(e))
    },
    methods:{
        getir(){
            console.warn(this.temp)
        },
    }
}
</script>
