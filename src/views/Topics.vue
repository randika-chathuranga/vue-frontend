<template>
<div>
 <v-img src="../assets/image.jpg" height="220px" />
  <!--  <div>

    <v-container v-for="align in alignments" :key="align" class="grey lighten-5 mb-6">
      <v-row :align="align"  no-gutters style="height: 150px;">
        <v-col v-for="n in 2" :key="n">
          <v-card class="pa-2" outlined tile>
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>  
  </div>
  -->
<div>
<v-container>
    <v-card max-width="1200px" height="50px" class="mt-5" flat>
       <v-layout row wrap>
            <v-flex xs12 md6 class="mt-2 ml-5">
                Most Popular
            </v-flex>
        </v-layout>     
    </v-card>

    <v-card max-width="1200px" height="50px" flat class="pa-2">
      <v-layout row wrap>
            <v-col v-for="content in contents1" :key="content" cols="12" sm="4">{{content}}</v-col>
       </v-layout>
    </v-card>

    
    <v-card max-width="1200px" height="50px" flat class="pa-2">
      <v-layout row wrap>
            <v-col v-for="content in contents2" :key="content" cols="12" sm="4">{{content}}</v-col>
       </v-layout>
    </v-card>

    
    <v-card max-width="1200px" height="50px" flat class="pa-2">
      <v-layout row wrap>
            <v-col v-for="content in contents3" :key="content" cols="12" sm="4">{{content}}</v-col>
       </v-layout>
    </v-card> 
</v-container>


<v-container>
    <v-card max-width="1200px" height="50px" class="mt-5" flat>
       <v-layout row wrap>
            <v-flex xs12 md6 class="mt-2 ml-5">
                All Topics
            </v-flex>
        </v-layout>     
    </v-card>

    <v-card max-width="1200px" height="50px" flat class="pa-2">
      <v-layout row wrap>
            <v-col v-for="content in contents4" :key="content" cols="12" sm="4">{{content}}</v-col>
       </v-layout>
    </v-card>

    <v-card max-width="1200px" height="50px" flat class="pa-2">
      <v-layout row wrap>
            <v-col v-for="content in contents5" :key="content" cols="12" sm="4">{{content}}</v-col>
       </v-layout>
    </v-card> 

    <v-card max-width="1200px" height="50px" flat class="pa-2">
      <v-layout row wrap>
            <v-col v-for="content in contents6" :key="content" cols="12" sm="4">{{content}}</v-col>
       </v-layout>
    </v-card> 

    <v-card max-width="1200px" height="50px" flat class="pa-2">
      <v-layout row wrap>
            <v-col v-for="content in contents7" :key="content" cols="12" sm="4">{{content}}</v-col>
       </v-layout>
    </v-card> 
</v-container>

</div>
</div>
 


</template>

<script>
  export default {
    data: () => ({
      contents1:['Brand Strategy','Digital Marketing','Marketing Plan and Budget'],
      contents2:['Campaign Examples','Inbound Marketing','Product or Service Launch'],
      contents3:['Content Marketing','Marketing Campaign Planning','Strategic Marketing'],
      contents4:['Brand Strategy','Events and Trade Shows','Print Media'],
      contents5:['Campaign Examples','Inbound Marketing','Product or Service Launch'],
      contents6:['Campaign Measurement','Lead Generation','Publicity'],
      contents7:['Content Marketing','Marketing Automation','Return on Investment']
    }),

  }
</script>