import {render} from '@testing-library/vue';
import ContextPopup from './ContextPopup.vue';

test('ContextPopup', () => {
  const {getByText} = render(ContextPopup.default);

  getByText(/An error occurred/);
});
