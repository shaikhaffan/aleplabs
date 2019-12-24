import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { HomeTypes } from '../Redux/HomeRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getHome,addBlog ,deleteBlog , editBlog} from './HomeSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(HomeTypes.EDIT_BLOG, editBlog,api),
    takeLatest(HomeTypes.HOME_REQUEST, getHome,api),
    takeLatest(HomeTypes.DELETE_BLOG, deleteBlog,api),
    takeLatest(HomeTypes.ADD_BLOG, addBlog,api),
    
   // takeLatest(HomeTypes.HOME_REQUEST, deleteBlog,api),
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
   // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ])
}
