<template>
<div>    
    <th><sssurvey-component></sssurvey-component></th>    
  <br>
  <tbody >
    <tr v-for="(item,index) in answers" :key="index">
      
      <td ></td>  
    <input type="hidden" v-model="peoplee.answer"><p></p>
 
      <button  @click="change(item.answer),changeAnswer()" class="bg-success text-white">{{item.answer}} </button> 
      <br>  <br>
    </tr>


    
  </tbody>
  <br>
</div>
</template>

<script>
import axios from "axios";

export default {
     data(){
        return{
          id: this.$route.params.id ,
          smsSurveyId: this.$route.params.smsSurveyId ,
          answers: [],
          peoplee: [],

         
          
        }},
        mounted(){
        
        axios.get('http://localhost:8080/api/SmsSurveyAnswers/GetId/'+ this.$route.params.id)   
        .then(response => {
            this.answers = response.data;            
        })
        .catch(e => console.log(e))    

        axios.get('http://localhost:8080/api/SmsSurveyPeople/'+ this.$route.params.smsSurveyId)   
        .then(response => {
            this.peoplee = response.data;            
        })
        .catch(e => console.log(e)) 
        
        
        
    }, 
    methods:{    
        change(answer){            
            this.peoplee.answer= answer
            
             
        },   
        
        changeAnswer(){            
            axios.put('http://localhost:8080/api/SmsSurveyPeople/'+ this.$route.params.smsSurveyId , this.peoplee)
            .then(response => console.log(response))
            .catch(error => console.log(error))      
        },
    }  }  

</script>
