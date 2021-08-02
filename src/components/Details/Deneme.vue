<template>
<div>  


        <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"   
    ></fusioncharts>
    <br>


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
        type: 'pie2d',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: {
   "data": []
   
},
        radioValue: 'none',
        lastActive: 'none'

            
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
            this.dataSource['data'] = response.data
        })
        .catch(e => console.log(e))   
        
  
    },  
     methods:{
         
        
     }
    
}
</script>

