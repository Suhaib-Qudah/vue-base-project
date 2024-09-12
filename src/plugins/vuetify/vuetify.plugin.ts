import { createVuetify } from 'vuetify';
import { md3 } from 'vuetify/blueprints';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import ThemeConfigVuetify from './themes.vuetify.ts';
import 'vuetify/styles';

const vuetify = createVuetify({
  theme: ThemeConfigVuetify,
  blueprint: md3,
  components,
  directives,
});

export default vuetify;
