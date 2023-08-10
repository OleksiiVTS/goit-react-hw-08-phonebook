import { useDispatch, useSelector } from 'react-redux';
import {
  selectUser,
  selectContacts,
  selectFilters,
  selectIsLoading,
  selectError,
  selectVisibleContacts,
  selectToken,
  selectLoggedIn,
  selectUpdateContact,
} from './selectors';
import {
  getContact,
  addContact,
  deleteContact,
  updateContact,
  getUpdateContact,
  getUser,
  createUser,
  loginUser,
  logoutUser,
} from './operations';
import { setStatusFilter } from './filtersSlice';
import { useCallback } from 'react';

export const useContacts = () => {
  const dispatch = useDispatch();
  const isUser = useSelector(selectUser);
  const isToken = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectLoggedIn);
  const error = useSelector(selectError);
  const valueContacts = useSelector(selectContacts);
  const valueFilters = useSelector(selectFilters);
  const visibleContacts = useSelector(selectVisibleContacts);
  const getUpdate = useSelector(selectUpdateContact);

  const getNewUser = useCallback(() => dispatch(getUser()), [dispatch]);

  const createNewUser = newUser => {
    dispatch(createUser(newUser));
  };
  const loginNewUser = dataUser => {
    dispatch(loginUser(dataUser));
  };
  const logoutNewUser = () => {
    dispatch(logoutUser());
  };

  //! ##################################################################
  const getContacts = useCallback(() => dispatch(getContact()), [dispatch]);

  const getUpdateContacts = updateContact => {
    dispatch(getUpdateContact(updateContact));
  };

  const addContacts = newContact => {
    dispatch(addContact(newContact));
  };

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  const updateContacts = newContact => {
    dispatch(updateContact(newContact));
  };

  const filterContact = updatedTodo => {
    dispatch(setStatusFilter(updatedTodo));
  };

  return {
    isUser,
    isToken,
    isLoading,
    isLoggedIn,
    error,
    valueContacts,
    valueFilters,
    visibleContacts,
    getUpdate,
    getContacts,
    addContacts,
    deleteContacts,
    filterContact,
    updateContacts,
    getUpdateContacts,
    getNewUser,
    createNewUser,
    loginNewUser,
    logoutNewUser,
  };
};