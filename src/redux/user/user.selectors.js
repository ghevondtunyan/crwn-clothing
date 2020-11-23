import { createSelector } from "reselect";

const selectoreuser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectoreuser],
  (user) => user.currentUser
);
