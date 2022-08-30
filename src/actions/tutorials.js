import TutorialsServices from "../services/TutorialServices";
import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIAL,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
} from "./types";

export const createTutorial = (title, desc) => async (dispatch) => {
  try {
    const res = await TutorialsServices.create({ title, desc });
    dispatch({
      type: CREATE_TUTORIAL,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const retrieveTutorial = () => async (dispatch) => {
  try {
    const res = await TutorialsServices.getAll();
    dispatch({
      type: RETRIEVE_TUTORIAL,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTutorial = (id, data) => async (dispatch) => {
  try {
    const res = TutorialsServices.update(id, data);
    dispatch({
      type: UPDATE_TUTORIAL,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const deleteTutorial = (id) => async (dispatch) => {
  try {
    const res = TutorialsServices.remove(id);
    dispatch({
      type: DELETE_TUTORIAL,
      payload: { id },
    });
  } catch (error) {
    console.log(error);
  }
};

export const findByTitle = (title) => async (dispatch) => {
  try {
    const res = await TutorialsServices.findByTitle(title);
    dispatch({
      type: RETRIEVE_TUTORIAL,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
