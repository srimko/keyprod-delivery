import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        secondary: '#b0bec5',
        anchor: '#8c9eff',
        'kp-main': '#191D20'
      },
    },
  },
});
