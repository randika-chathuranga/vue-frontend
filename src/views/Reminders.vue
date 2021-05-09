<template>
    <div>
        <v-img src="../assets/page4.jpg" height="220px" />

        <v-container>
            <v-row wrap>
                <v-col>
                    <v-card height="300px">
                       <v-flex  class="black--text text-darken-1 ma-3 pa-3  text-h5">
                           Create a Complete Marketing Plan
                       </v-flex>
                       <v-divider></v-divider>
                       <v-flex class="ma-3 pa-3">
                           Write a marketing plan and create a budget, 
                           starting with your objectives and ending with your update and measurement plan.
                       </v-flex>
                       <v-flex >
                            <v-chip class="ma-2" color="secondary">Read More</v-chip>
                        </v-flex>
                       <v-divider></v-divider>
                       <v-flex>
                            <v-btn class="mt-5 mr-2" width="100px">
                            <v-icon small flat left class="pa-1 mr-0">mdi-home</v-icon>
                            <span class="text-capitalize">26 steps</span>
                            </v-btn>

                            <v-btn class="mt-5">
                            <v-icon small flat left class="pa-1 mr-0">mdi-calendar</v-icon>
                            <span class="text-capitalize">17-18 hours</span>
                            </v-btn>

                            <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn fab small color="primary" dark v-bind="attrs" v-on="on" class="ml-15 mt-5">
                            <v-icon>mdi-alarm</v-icon>
                            </v-btn>
                            </template>
                            <span>Add reminder</span>
                            </v-tooltip>   

                            <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn fab small color="primary" dark v-bind="attrs" v-on="on" class="ml-2 mt-5">
                            <v-icon>mdi-download</v-icon>
                            </v-btn>
                            </template>
                            <span>Download</span>
                            </v-tooltip> 

                            <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn fab small color="primary" dark v-bind="attrs" v-on="on" class="ml-2 mt-5">
                            <v-icon>mdi-star</v-icon>
                            </v-btn>
                            </template>
                            <span>Favourite</span>
                            </v-tooltip>                            
                       </v-flex>
                    </v-card>
                </v-col>
                
                <v-col>
                    <v-card height="300px">
                       <v-flex  class="black--text text-darken-1 ma-3 pa-3  text-h5">
                           Create a Marketing Budget
                       </v-flex>
                       <v-divider></v-divider>
                       <v-flex class="ma-3 pa-3">
                           Determine what to spend across all marketing areas over a specific timeframe.
                       </v-flex>
                       <v-flex >
                            <v-chip class="ma-2" color="secondary">Read More</v-chip>
                        </v-flex>
                       <v-divider></v-divider>
                       <v-flex>
                            <v-btn class="mt-5 mr-2" width="100px">
                            <v-icon small flat left class="pa-1 mr-0">mdi-home</v-icon>
                            <span class="text-capitalize">26 steps</span>
                            </v-btn>

                            <v-btn class="mt-5">
                            <v-icon small flat left class="pa-1 mr-0">mdi-calendar</v-icon>
                            <span class="text-capitalize">17-18 hours</span>
                            </v-btn>

                            <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn fab small color="primary" dark v-bind="attrs" v-on="on" class="ml-15 mt-5">
                            <v-icon>mdi-alarm</v-icon>
                            </v-btn>
                            </template>
                            <span>Add reminder</span>
                            </v-tooltip>   

                            <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn fab small color="primary" dark v-bind="attrs" v-on="on" class="ml-2 mt-5">
                            <v-icon>mdi-download</v-icon>
                            </v-btn>
                            </template>
                            <span>Download</span>
                            </v-tooltip> 

                            <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn fab small color="primary" dark v-bind="attrs" v-on="on" class="ml-2 mt-5">
                            <v-icon>mdi-star</v-icon>
                            </v-btn>
                            </template>
                            <span>Favourite</span>
                            </v-tooltip>                            
                       </v-flex>
                    </v-card>
                </v-col>
            </v-row>   
        </v-container>
    </div>
    
</template>

