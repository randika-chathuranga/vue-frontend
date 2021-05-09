<template>
  <v-card>
    <v-toolbar color="purple lighten-2" dark flat>
      <v-app-bar-nav-icon color="black"></v-app-bar-nav-icon>

      <v-toolbar-title class="black--text">qlutch.....</v-toolbar-title>

      <v-spacer></v-spacer>

     
        <v-tabs v-model="currentItem" centered class="ma-3" color="black"> 
          <v-tab class="text-capitalize"  v-for="link in links" :key="link.text" @click="$router.push({path: link.route})">
          {{ link.text }}
          </v-tab>
        </v-tabs>
     
      <v-btn class="ma-2 text-capitalize">Credits</v-btn>
      <v-btn class="ma-2 text-capitalize">Login</v-btn>
      

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      
    </v-toolbar>

    
  </v-card>
</template>



<script>
  export default {
    data: () => ({
      
      links:[
                { text:'Topics', route:'/'},
                { text:'Reminders', route:'/reminders'},
                {icon:'mdi-account', text:'Favourites', route:'/favourites'}
            ],
    }),
  }
</script>