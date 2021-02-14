import {
  SEARCH_USER,
  SEARCH_USER_CHANGE_ORDER,
  SEARCH_USER_ERROR,
  SEARCH_USER_SUCCESS,
  UPDATE_LOADING,
} from './users.constants';
import { UsersActionType } from './users.types';

export const searchUser = (
  page: number,
  results: number,
  seed: string,
): UsersActionType => ({
  type: SEARCH_USER,
  page,
  results,
  seed,
});

export const searchUserSuccess = (usersList: any[]): UsersActionType => ({
  type: SEARCH_USER_SUCCESS,
  usersList,
});

export const searchUserError = (message: string): UsersActionType => ({
  type: SEARCH_USER_ERROR,
  message,
});

export const changeOrder = (
  orderBy: string,
  orderDirection: string,
): UsersActionType => ({
  type: SEARCH_USER_CHANGE_ORDER,
  orderBy,
  orderDirection,
});

export const updateLoading = (isLoading: boolean): UsersActionType => ({
  type: UPDATE_LOADING,
  isLoading,
});
