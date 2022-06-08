// see https://testing-library.com/docs/vue-testing-library/examples
// https://vuejs.org/guide/scaling-up/testing.html#component-testing
import {render} from '@testing-library/vue';
import ActivityHeatmap from './ActivityHeatmap.vue';

test('ActivityHeatmap', () => {
  const helpers = render(ActivityHeatmap, {
    props: {
      values: [],
    }
  });
  const {getByText} = helpers;
  console.log('Component', ActivityHeatmap);
  getByText('contributions in the last 12 months');
});
