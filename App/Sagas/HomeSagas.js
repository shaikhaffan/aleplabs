/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import HomeActions from '../Redux/HomeRedux'
// import { HomeSelectors } from '../Redux/HomeRedux'

export function * getHomeData (api, action) {
  const { data } = action;
  // make the call to the api
  const response = yield call(api.getHome);
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(HomeActions.homeSuccess(response.data))
  } else {
    yield put(HomeActions.homeFailure())
  }
}

export function * deleteBlogData (api, action) {
  const { data } = action
  const response = yield call(api.deleteBlog,data.id);
  console.log(response.status);

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(HomeActions.deleteSuccess((response.status == 200) ? true : false))
  } else {
    yield put(HomeActions.homeFailure())
  }
  
}

export function * addBlogData (api, action) {
  const { data } = action
  const response = yield call(api.addBlog,data);
  console.log(response);

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(HomeActions.addBlogSuccess((response.status == 201) ? true : false))
  } else {
    yield put(HomeActions.homeFailure())
  }
}

export function * editBlogData (api, action) {
  const { data } = action
  const response = yield call(api.editBlog,data);
  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(HomeActions.editBlogSuccess((response.ok) ? true : false))
  } else {
    yield put(HomeActions.homeFailure())
  }
  
}
