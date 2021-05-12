<template>
  <carousel :perPage="1">
    <Slide v-for="(slide, index) in dashboardMenuSlide" :key="index">
      <v-row>
        <v-col 
          v-for="menu in slide" :key="menu.id"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <v-card 
            class="rounded-lg mx-2"
            :elevation="10"
          >
            <v-card-title>
              <v-row>
                <v-col 
                  sm="12"
                  :class="menu.title.toLowerCase()"
                >
                  <span class="title text-uppercase">
                    <v-icon>
                      {{menu.icon}}
                    </v-icon>
                    {{menu.title}}
                  </span>
                </v-col>
                <v-col >
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
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'DashboardItems',
  components: {
    Carousel,
    Slide
  },
  computed: {
    dashboardMenuSlide () {
      return this.$store.state.dashboardMenuSlide
    }
  }
}
</script>

<style lang="scss" scoped>
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
        max-width: inherit;
        @media screen and (min-width: 1264px) {
          max-width: max-content;
        }
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
</style>
