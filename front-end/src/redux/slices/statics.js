import { map, filter } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  homestatics:[],
  yearlystatics:[]
};

const slice = createSlice({
  name: 'statics',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PROFILE
    getStaticsSuccess(state, action) {
      state.isLoading = false;
      state.homestatics = action.payload;
    },
    getYearlyStaticsSuccess(state, action) {
      state.isLoading = false;
      state.yearlystatics = action.payload;
    },

     }
});

// Reducer
export default slice.reducer;

export function getHomeStatics() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('http://localhost:8080/static/getAllStatics');
      
      dispatch(slice.actions.getStaticsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}


export function getYearlyStatics() {
  console.log("jje")
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('http://localhost:8080/static/getAllYearlyStatics');
      let temp=[]
        
      response.data.map((item)=>{
        temp.push({x:new Date(2022, item.month),y:item.value})
      })
      console.log(temp)
    
      dispatch(slice.actions.getYearlyStaticsSuccess(temp));

    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

