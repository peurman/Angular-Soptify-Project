import { createReducer, on, Action } from '@ngrx/store';
import * as categoriesActions from './categories.actions';
import { CategoriesState } from './categories.state';

export const initialCategoryState: CategoriesState = {
  categoriesData: null,
  isLoading: false,
  isError: null,
};

const categoriesReducerInternal = createReducer(
  initialCategoryState,
  on(categoriesActions.getCategoriesAction, (state): CategoriesState => {
    return {
      ...state,
      isLoading: true,
      isError: null,
    };
  }),
  on(
    categoriesActions.getCategoriesSuccessAction,
    (state, { data }): CategoriesState => {
      return {
        ...state,
        categoriesData: data,
        isLoading: false,
      };
    }
  ),
  on(
    categoriesActions.getCategoriesErrorAction,
    (state, { message }): CategoriesState => {
      return {
        ...state,
        isLoading: false,
        isError: message,
      };
    }
  )
);
export function categoriesReducer(
  state: CategoriesState | undefined,
  action: Action
) {
  return categoriesReducerInternal(state, action);
}
