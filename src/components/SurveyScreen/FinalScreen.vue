<template>
<div>    
    <th><sssurvey-component></sssurvey-component></th>    
  <br>
  <tbody >
    <tr v-for="(item,index) in answers" :key="index">
      
      <td ></td>  
    <input type="hidden" v-model="peoplee.answer"><p></p>
    
 
      <button   @click="change(item.answer),changeSmsResult(),changeAnswer(),alert()" class="bg-success text-white">{{item.answer}}</button> 
      <br>  <br>
      
    </tr>
    

    
  </tbody><button   @click="iptal(),changeSmsResult2(),changeAnswer(),alert2()" class="bg-danger text-white">İptal Et </button>
  <br>
  <h3><p v-if="binary" class="p-3 mb-2 bg-success text-white"> Cevabınız kaydedildi</p></h3>
  <h3><p v-if="binary2" class="p-3 mb-2 bg-danger text-white"> Cevabınız iptal edildi</p></h3>
  
  
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
          binary: false,
          binary2: false,
          iptall: "temp"

         
          
        }},
        mounted(){
        
        axios.get('https://localhost:44303/api/SmsSurveyAnswers/GetId/'+ this.$route.params.id)   
        .then(response => {
            this.answers = response.data;            
        })
        .catch(e => console.log(e))    

        axios.get('https://localhost:44303/api/SmsSurveyPeople/'+ this.$route.params.smsSurveyId)   
        .then(response => {
            this.peoplee = response.data;            
        })
        .catch(e => console.log(e)) 
        
        
        
    }, 
    methods:{    
        change(answer){            
            this.peoplee.answer= answer
            
            
             
        },   
        iptal(){            
            this.peoplee.answer= this.iptall
            
             
        }, 
        
        changeAnswer(){            
            axios.put('https://localhost:44303/api/SmsSurveyPeople/'+ this.$route.params.smsSurveyId , this.peoplee)
            .then(response => console.log(response))
            .catch(error => console.log(error))      
        },
        alert(){       
            this.binary2 = false
            this.binary = true   
        }, 
        alert2(){     
            this.binary = false   
            this.binary2 = true   
        },
        changeSmsResult(){
            this.peoplee.smsResult= "access"
        },
        changeSmsResult2(){
            this.peoplee.smsResult= null
        },
    }  }  

</script>
