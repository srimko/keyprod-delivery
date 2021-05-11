<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <carousel :perPage="1">
          <Slide v-for="(slide, index) in dashboardMenuSlide" :key="index">
            <v-row>
              <v-col 
                v-for="menu in slide" :key="menu.id"
                cols="6"
              >
                  <v-card 
                    class="rounded-lg mx-2"
                    :elevation="10"
                  >
                    <v-card-title>
                      <v-row>
                        <v-col 
                          :class="menu.title.toLowerCase()"
                        >
                          <span class="title text-uppercase">
                            <v-icon>
                              {{menu.icon}}
                            </v-icon>
                            {{menu.title}}
                          </span>
                        </v-col>
                        <v-col>
                          <span class="text-uppercase">{{menu.description}}</span>
                        </v-col>
                      </v-row>
                    </v-card-title>

                    <v-card-text
                      class="pt-6"
                    >
                      <v-chip 
                        v-for="link in menu.links" :key="link"
                        class="text-uppercase mr-4 mb-4 rounded-lg"
                      >{{link}}</v-chip>
                    </v-card-text>
                  </v-card>
              </v-col>
            </v-row>
          </Slide>
        </carousel>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'DashboardItems',
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      dashboardMenuSlide: [
        [
          {
            id: 0,
            title: 'Production',
            description: 'Manage your equipment organization and their tracking with customizable dashboards and stops causes',
            icon: 'mdi-layers-triple-outline',
            links: [
              'Factories', 'Machines', 'Machines groups', 'Stops', 'Dashboards', 'Devices'
            ]
          },
          {
            id: 1,
            title: 'People',
            description: 'Manage your people organization, services, users access to keyprod and their rights',
            icon: 'mdi-account',
            links: [
              'Users', 'User groups', 'Services', 'Empowerment', 'Assignments'
            ]
          },
          {
            id: 2,
            title: 'Time',
            description: 'Manage your time organization with opening times, shift rotations. Plan machine downtinme and get the cost center and pointing tasks',
            icon: 'mdi-circle-slice-5',
            links: [
              'Factories', 'Machines', 'Machines groups', 'Stops', 'Dashboards', 'Devices'
            ]
          },
          {
            id: 3,
            title: 'Job',
            description: 'Access information related to the part you produce, such as customers, prders, productions orders and jobs',
            icon: 'mdi-view-dashboard-variant',
            links: [
              'Clients', 'Orders', 'Products'
            ]
          }
        ],
        [
          {
            id: 0,
            title: 'Production',
            description: 'Manage your equipment organization and their tracking with customizable dashboards and stops causes',
            icon: 'mdi-layers-triple-outline',
            links: [
              'Factories', 'Machines', 'Machines groups', 'Stops', 'Dashboards', 'Devices'
            ]
          },
          {
            id: 1,
            title: 'People',
            description: 'Manage your people organization, services, users access to keyprod and their rights',
            icon: 'mdi-account',
            links: [
              'Users', 'User groups', 'Services', 'Empowerment', 'Assignments'
            ]
          },
          {
            id: 2,
            title: 'Time',
            description: 'Manage your time organization with opening times, shift rotations. Plan machine downtinme and get the cost center and pointing tasks',
            icon: 'mdi-circle-slice-5',
            links: [
              'Factories', 'Machines', 'Machines groups', 'Stops', 'Dashboards', 'Devices'
            ]
          },
          {
            id: 3,
            title: 'Job',
            description: 'Access information related to the part you produce, such as customers, prders, productions orders and jobs',
            icon: 'mdi-view-dashboard-variant',
            links: [
              'Clients', 'Orders', 'Products'
            ]
          }
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

  .v-card {
    // min-height: 550px;
  }

  .v-card__title {
    background-color: #23252A;
    color: #FFFFFF;
    .col {
      display: flex;
      align-items: center;
      i {
        font-size: 1.5em;
      }
      .title {
        font-size: 1.55em !important;
      }
      &:nth-child(1) {
        max-width: max-content;
      }
      &:nth-child(2) {
        padding: 30px 20px;
        flex-grow: 2;
        font-size: 15px;
        line-height: 1.3em;
        word-break: break-word;
      }
    }
  }

  .v-card__text {
    background-color: #3C4348;
    min-height: 140px;
  }

  .v-chip {
    background-color: #191C1E;
    .v-chip__content {
      color: #FFFFFF;
    }
  }

  .production {
    color: #28ABE2;
    i {
      color: #28ABE2;
    }
  }
  .people {
    color: #22B573;
    i {
      color: #22B573;
    }
  }
  .time {
    color: #F15B23;
    i {
      color: #F15B23;
    }
  }
  .job {
    color: #FE961D;
    i {
      color: #FE961D;
    }
  }

</style>


<style lang="scss">
  .VueCarousel-inner {
    flex-basis: 100% !important;
  }

  .VueCarousel-slide {
    padding: 20px;
  }

  // .v-chip {
  //   background-color: #191C1E !important;
  //   .v-chip__content {
  //     background-color: #191C1E !important;
  //     color: #FFF;
  //     font-size: 18px;
  //   }
  // }


</style>