<template>
<div>
    <div>
        <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">SmsSurveyId</th>
      <th scope="col">Answer</th>
      <th></th>
    
    </tr>
  </thead>
  <tbody >
    <tr v-for="(item,index) in items" :key="index">
      <th scope="row">{{item.id}}</th>
      <td >{{item.smsSurveyId}}</td>
      <td >{{item.answer}}</td>
      <td><button class="btn btn-info">Detail</button></td>
    </tr>
  </tbody>
</table>
    </div>
    <input type="text">
</div>


</template>

<script>

import axios from "axios";


export default {
    data(){
        return{
            items: [],
            answers: {
                smsSurveyId: '',
                answer: '',
            },
        }
    },
    mounted(){
        axios.get("http://localhost:8080/api/SmsSurveyAnswers")
        .then(response => {
            this.items = response.data;            
        })
        .catch(e => console.log(e))
        axios.post('http://localhost:8080/api/SmsSurveyAnswers', this.answers)
            .then(response => console.log(response))
            .catch(error => console.log(error))  
    }
 
}
</script>
