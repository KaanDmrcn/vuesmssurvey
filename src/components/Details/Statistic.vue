<template>
<div>  
    <table class="table table-success table-striped">
         
       <tr v-for="(item,index) in text" :key="index">
      <th scope="row">{{item.label}}    :   </th>
      <br>
      <td >{{item.value}}</td>
    </tr>
    <h3>Total : {{counter}} </h3>
    </table>


</div>
</template>

<script>

import axios from "axios";


export default {
    
     data(){
        return{
            counter: 0,
            text: [],
            temp: this.$route.params.id,

            
        }
    },
    mounted(){
                axios.get('https://localhost:44303/api/Statistic/'+ this.temp)   
        .then(response => {
            this.counter = response.data;            
        })
        .catch(e => console.log(e))      
        
        axios.get('https://localhost:44303/api/Statistic/GetTemp/'+ this.temp)   
        .then(response => {
            this.text = response.data;            
        })
        .catch(e => console.log(e))   
        
  
    },  
     methods:{
         count(){
             this.counter = this.counter++
         }

     },
    
    
}
</script>


