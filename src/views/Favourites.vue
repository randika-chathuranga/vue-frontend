<template>
    <div>
        <v-img src="../assets/page2.jpg" height="220px" />

        <v-container>
            <template>
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">Go to the topics</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step :complete="e1 > 2" step="2">Select one topic</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step :complete="e1 > 3" step="3">Search it</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="4">Find your favorite</v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                    <v-stepper-content step="1">
                    <v-card  class="mb-12" color="grey lighten-1" height="200px">
                        <v-row wrap flat class="pt-5 pb-5">
                            <v-flex class="text-h5 mt-1 ml-7 font-weight-medium">Go to the topic</v-flex>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row wrap flat>
                            <v-flex class="pa-2 mt-3 ml-3">
                            Online advertising addresses ads placed on other websites, in email newsletters, or via affiliate programs to generate leads, increase website traffic, raise visibility and drive sales.
                            Online advertising has numerous benefits, allowing you to reach a very broad or very targeted audience on multiple devices, from PCs to tablets to smart phones. It gives you flexibility in ad formats and sizes, 
                            allowing for text ads, graphical ads, interactive ads and video. Different ad networks allow for different payment options, either on a cost per impression or cost per click format.
                            </v-flex>
                        </v-row>
                    </v-card>
                    <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
                    <v-btn text>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                    <v-card class="mb-12" color="grey lighten-1" height="200px">
                        <v-row wrap flat class="pt-5 pb-5">
                            <v-flex class="text-h5 mt-1 ml-7 font-weight-medium">Select one topic</v-flex>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row wrap flat>
                            <v-flex class="pa-2 mt-3 ml-3">
                            Online advertising addresses ads placed on other websites, in email newsletters, or via affiliate programs to generate leads, increase website traffic, raise visibility and drive sales.
                            Online advertising has numerous benefits, allowing you to reach a very broad or very targeted audience on multiple devices, from PCs to tablets to smart phones. It gives you flexibility in ad formats and sizes, 
                            allowing for text ads, graphical ads, interactive ads and video. Different ad networks allow for different payment options, either on a cost per impression or cost per click format.
                            </v-flex>
                        </v-row>
                    </v-card>
                    <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
                    <v-btn text>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                    <v-card class="mb-12" color="grey lighten-1" height="200px">
                        <v-row wrap flat class="pt-5 pb-5">
                            <v-flex class="text-h5 mt-1 ml-7 font-weight-medium">Search it</v-flex>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row wrap flat>
                            <v-flex class="pa-2 mt-3 ml-3">
                            Online advertising addresses ads placed on other websites, in email newsletters, or via affiliate programs to generate leads, increase website traffic, raise visibility and drive sales.
                            Online advertising has numerous benefits, allowing you to reach a very broad or very targeted audience on multiple devices, from PCs to tablets to smart phones. It gives you flexibility in ad formats and sizes, 
                            allowing for text ads, graphical ads, interactive ads and video. Different ad networks allow for different payment options, either on a cost per impression or cost per click format.
                            </v-flex>
                        </v-row>
                    </v-card>
                    <v-btn color="primary" @click="e1 = 4">Continue</v-btn>
                    <v-btn text>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="4">
                    <v-card class="mb-12" color="grey lighten-1" height="200px">
                        <v-row wrap flat class="pt-5 pb-5">
                            <v-flex class="text-h5 mt-1 ml-7 font-weight-medium">Find your favorite</v-flex>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row wrap flat>
                            <v-flex class="pa-2 mt-3 ml-3">
                            Online advertising addresses ads placed on other websites, in email newsletters, or via affiliate programs to generate leads, increase website traffic, raise visibility and drive sales.
                            Online advertising has numerous benefits, allowing you to reach a very broad or very targeted audience on multiple devices, from PCs to tablets to smart phones. It gives you flexibility in ad formats and sizes, 
                            allowing for text ads, graphical ads, interactive ads and video. Different ad networks allow for different payment options, either on a cost per impression or cost per click format.
                            </v-flex>
                        </v-row>
                    </v-card>
                    <v-btn color="primary" @click="e1 = 1">Continue</v-btn>
                    <v-btn text>Cancel</v-btn>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </template>
    </v-container>   
    </div>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
<<<<<<< HEAD
</script>
=======
</script>

>>>>>>> 032885c5e2c796c6a15e0033949920eff192ff4d
