import type { IAsyncAction } from 'store/store';
import * as API from 'apis/apis';

export const user_click_delay_decrement_button: IAsyncAction = async (dispatch) => {
  dispatch(function before_decreasing_counter(s) {
    s.isLoading = true;
  });

  try {
    await API.decreaseCounter();

    dispatch(function after_decreasing_counter_success(s) {
      s.counter--;
      s.isLoading = false;
    });
  } catch (e) {
    dispatch(function after_decreasing_counter_failure(s) {
      s.isLoading = false;
    });
  }
};
