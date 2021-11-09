<template>
<div class="table-all">

<table class="table">
   <thead>
      <tr>
         <th>Currency</th> <th>Exchange Rate</th> 
      </tr>
   </thead>
   <tbody>
      <tr>
         <th>EUR</th> <td>4.50</td> 
      </tr>
      <tr>
         <th>USD</th> <td>3.98</td> 
      </tr>
      <tr>
         <th>GBP</th> <td>5.37</td> 
      </tr>
    
   </tbody>
</table>
</div>
</template>


<style>

.table-all{

  display: flex;
  justify-content: center;
  margin:20px;
}

.table{
  text-align: center;

}

  td,th {
     border: 1px solid black;
     padding:10px;
     font-size:23px;
    
     
     
     }
</style>