<template>
<div >  
          

  <tbody >
    <tr>

      <h3 >{{survey.question}}</h3>


    
      
    </tr>
  </tbody>

</div>
</template>

<script>

import axios from "axios";



export default {
     data(){
        return{
            survey: [],
        }
    },
    mounted(){
        
        axios.get('https://localhost:44303/api/SmsSurveys/'+ this.$route.params.id)   
        .then(response => {
            this.survey = response.data;            
        })
        .catch(e => console.log(e))       
        
    },  
    
    
}
</script>
