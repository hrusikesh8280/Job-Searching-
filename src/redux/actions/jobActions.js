import axios from 'axios';

export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';
export const FETCH_JOB_DETAILS_REQUEST = 'FETCH_JOB_DETAILS_REQUEST';
export const FETCH_JOB_DETAILS_SUCCESS = 'FETCH_JOB_DETAILS_SUCCESS';
export const FETCH_JOB_DETAILS_FAILURE = 'FETCH_JOB_DETAILS_FAILURE';
export const SELECT_JOB = 'SELECT_JOB';


export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST,
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error,
});

export const selectJob = (job) => ({
  type: SELECT_JOB,
  payload: job,
});

export const fetchJobDetailsRequest = () => ({
    type: FETCH_JOB_DETAILS_REQUEST,
  });
  
  export const fetchJobDetailsSuccess = (job) => ({
    type: FETCH_JOB_DETAILS_SUCCESS,
    payload: job,
  });
  
  export const fetchJobDetailsFailure = (error) => ({
    type: FETCH_JOB_DETAILS_FAILURE,
    payload: error,
  });

export const fetchJobsByLanguage = (language) => async (dispatch) => {
  try {
    dispatch(fetchJobsRequest());

    const response = await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=fde6b486&app_key=31a0bc37a31ba6dc0985f1d9b047f1b3&results_per_page=10&what=${language}`);

    const jobs = response.data.results;

    dispatch(fetchJobsSuccess(jobs));
  } catch (error) {
    dispatch(fetchJobsFailure(error.message));
  }
};

export const fetchJobDetails = (jobId) => async (dispatch) => {
    try {
      dispatch(fetchJobDetailsRequest());
  
      const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/'; // CORS Anywhere proxy URL
      const apiUrl = `https://api.adzuna.com/v1/api/jobs/us/${jobId}?app_id=fde6b486&app_key=31a0bc37a31ba6dc0985f1d9b047f1b3`;
      
      // Make the request to the proxy URL
      const response = await fetch(corsAnywhereUrl + apiUrl);
  
      if (response.ok) {
        const job = await response.json();
        dispatch(fetchJobDetailsSuccess(job));
      } else {
        dispatch(fetchJobDetailsFailure(`Failed to fetch job details: ${response.status} ${response.statusText}`));
      }
    } catch (error) {
      dispatch(fetchJobDetailsFailure(`Error fetching job details: ${error.message}`));
    }
  };
  