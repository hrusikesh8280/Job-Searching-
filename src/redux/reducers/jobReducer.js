import { FETCH_JOBS_FAILURE, FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOB_DETAILS_FAILURE, FETCH_JOB_DETAILS_REQUEST, FETCH_JOB_DETAILS_SUCCESS, SELECT_JOB } from "../actions/jobActions";

  
  const initialState = {
    jobs: [],
    selectedJob: null,
    loading: false,
    error: null,
    jobDetails: null,
    jobDetailsLoading: false,
    jobDetailsError: null, 
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_JOBS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_JOBS_SUCCESS:
        return {
          ...state,
          jobs: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_JOBS_FAILURE:
        return {
          ...state,
          jobs: [],
          loading: false,
          error: action.payload,
        };
      case SELECT_JOB:
        return {
          ...state,
          selectedJob: action.payload,
        };
      case FETCH_JOB_DETAILS_REQUEST:
        return {
          ...state,
          jobDetailsLoading: true,
          jobDetailsError: null,
        };
      case FETCH_JOB_DETAILS_SUCCESS:
        return {
          ...state,
          jobDetails: action.payload,
          jobDetailsLoading: false,
          jobDetailsError: null,
        };
      case FETCH_JOB_DETAILS_FAILURE:
        return {
          ...state,
          jobDetails: null,
          jobDetailsLoading: false,
          jobDetailsError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  