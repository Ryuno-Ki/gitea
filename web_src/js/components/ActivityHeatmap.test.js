// see https://testing-library.com/docs/vue-testing-library/examples
// https://vuejs.org/guide/scaling-up/testing.html#component-testing
import {render} from '@testing-library/vue';
import ActivityHeatmap from './ActivityHeatmap.vue';

test('ActivityHeatmap', () => {
  const {getByText} = render(ActivityHeatmap.default, {
    props: {
      values: [{
        date: '2022-06-18',
        count: 42,
      }]
    },
  });
  getByText(/contributions in the last 12 months/);
});
