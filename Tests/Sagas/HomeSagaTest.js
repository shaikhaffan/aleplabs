import FixtureAPI from '../../App/Services/FixtureApi'
import API from '../../App/Services/Api'
import { put, call } from 'redux-saga/effects'
import { getHomeData} from '../../App/Sagas/HomeSagas'
import HomeActions from '../../App/Redux/HomeRedux'
import { path } from 'ramda'


const stepper = (fn) => (mock) => fn.next(mock).value
test('first calls API', () => {
  const step = stepper(getHomeData(API, {data: 's'}))
  // first yield is API
  expect(step()).toEqual(call(API.getHome,"s"))
})

test('success path', () => {
  const response = API.getHome
  const step = stepper(getHomeData(API, {data: 's'}))
  // first step API
  step()
  // Second step successful return
  const stepResponse = step(response)
  // Get the avatar Url from the response
  //const firstUser = path(['data', 'items'], response)[0]
 // const avatar = firstUser.avatar_url
  expect(stepResponse).toEqual(put(HomeActions.userSuccess(true)))
})

test('failure path', () => {
  const response = {ok: false}
  const step = stepper(getHomeData(API, {data: 's'}))
  // first step API
  step()
  // Second step failed response
  expect(step(response)).toEqual(put(HomeActions.userFailure()))
})
