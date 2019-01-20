'use strict'

const request = require('super-request')
const expect = require('chai').expect
const redis = require('../../../../models/redis')
const server = require('../../../server')

const url = '/api/v1/users'
describe(`GET ${url}`, () => {
  const now = Date.now()
  const users = [{
    text: 'text',
    tweeter: 'tweeter',
    createdAt: now
  }]

  beforeEach(function () {
    this.sandbox.useFakeTimers(now)

    this.sandbox.stub(redis, 'zrevrangebyscore')
      .returns(Promise.resolve(users.map((user) => JSON.stringify(user))))
  })

  it('should return the users', function * () {
    const response = yield request(server.listen())
      .get(url)
      .qs({
        offset: 9,
        limit: 3
      })
      .json(true)
      .expect(200)
      .end()

    expect(response.body).to.eql(users)
    expect(redis.zrevrangebyscore).to.have.been.calledWith(redis.SET.users, now, 0, 'LIMIT', 9, 3)
  })
})
