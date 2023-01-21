/**
 * @api {get} /api/getScores Get Scores
 * @apiName /api/getScores
 * @apiGroup Scores
 * @apiPermission none
 *
 * @apiDescription This will get top 5 players with their scores in the descending order.
 *
 * @apiSuccess {string}   status        ok

@apiSuccessExample {json} Success As an overall count
{
}
@apiSuccessExample {json} Success As a list
{
}
@apiErrorExample {json} EXAMPLE_ERR
{
    error: 'EXAMPLE_ERR',
    details: { hello: "world" },
    userMessage: `Hello there! Erm . . . something went wrong!!!`,
}
*/
const app = require('../app')
const restify = require('../helpers/restifyHelpers')
const listScores = require('../logic/scores/list')

module.exports = async (url) => {
    app.get(url, async (req, res, next) => {
        const scores = new listScores()
        const response = scores.topFive()
        restify.ok(req, res, next, response)
    })
}
