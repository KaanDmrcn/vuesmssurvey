<template>
<div > 
    
    <br>  <form class="form-control">
    <h3 class="p-3 mb-2 bg-info text-white">Survey Detail</h3>
    <surveydetail-component></surveydetail-component> </form><br>
    


    <th><form class="form-control">
    <h3 class="p-3 mb-2 bg-info text-white">Survey Answers</h3>
    <answerdetail-component></answerdetail-component></form>
    <form ><h2 class="p-3 mb-2 bg-info text-white">Survey Statistics</h2><statistic-component></statistic-component></form></th>
    
   
    
    
     <th><form class="form-control">
    <h3 class="p-3 mb-2 bg-info text-white">Survey People</h3>
    <peopledetail-component></peopledetail-component></form></th>

<th>
    <form class="form-control" @submit.prevent="createAnswer">
      <th><h3 class="p-3 mb-2 bg-info text-white">Add Answer</h3></th> <hr>
         <input value="smsSurveyId" placeholder="17" type="hidden" v-model="answers.smsSurveyId"><p></p>
      <label >Answer</label>    <input placeholder="güzel" type="text" v-model="answers.answer"><p></p>
      <button class="btn btn-success">Create Answer</button><p></p>
      
    </form></th>

     <th>
    <form class="form-control" @submit.prevent="createPerson">
      <th><h3 class="p-3 mb-2 bg-info text-white">Add Person</h3></th> <hr>
        <input type="hidden" v-model="people.smsSurveyId"><p></p>
      <label >Name</label>   <input placeholder="kaan" type="text" v-model="people.name"><p></p>
      <label >PhoneNumber</label>   <input placeholder="05556667788" type="text" v-model="people.phoneNumber"><p></p>
      
      <button class="btn btn-success">Create Person</button><p></p>
    </form></th>
    
    
</div>
</template>

<script>
import axios from "axios";

export default {
     data(){
        return{
            answers: {
                smsSurveyId: this.$route.params.id,
                answer: '',
            },
            people: {
                smsSurveyId: this.$route.params.id,
                name: '',
                phoneNumber: '',
                answer: 'temp',
            }, 
        }
    },
    methods: {
        createAnswer(){            
            axios.post('http://localhost:8081/api/SmsSurveyAnswers', this.answers)
            .then(response => console.log(response))
            .catch(error => console.log(error))      
        },
        createPerson(){            
            axios.post('http://localhost:8081/api/SmsSurveyPeople', this.people)
            .then(response => console.log(response))
            .catch(error => console.log(error))      
        },
        
    }    
}
</script>
