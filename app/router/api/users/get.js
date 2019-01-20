'use strict'

const joi = require('joi')
const redis = require('../../../../models/redis')

const querySchema = joi.object({
  limit: joi.number()
    .default(10),
  offset: joi.number()
    .default(0)
})
  .unknown()
  .required()

function getUsers () {
  const { error, value: query } = joi.validate(this.query, querySchema)
  if (error) {
    this.throw(400)
  }

  let users = yield redis.zrevrangebyscore(redis.SET.users, Date.now(), 0, 'LIMIT', query.offset, query.limit)
  users = users.map((string) => {
    let user
    try {
      user = JSON.parse(string)
    } catch (ex) {
      /* ignore */
    }

    return user
  })

  this.body = users
}

module.exports = getUsers
