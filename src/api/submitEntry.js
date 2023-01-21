/**
 * @api {post} /api/submitEntry Submit Score Entry
 * @apiName /api/submitEntry
 * @apiGroup Scores
 * @apiPermission none
 *
 * @apiDescription This allows you to submit an entry with the `name` and the chosen `word`. 
 * 
 * 
 * @apiParam {Object}	entry	   An JSON object consisting of { name, word }
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
const addScores = require('../logic/scores/add')

module.exports = (url) => {
    app.post(url, async (req, res, next) => {
        /** Get all params */
        const entry = restify.getAsObject(req, 'entry', null, true)

        const scores = new addScores({ entry })
        const response = scores.add()

        restify.ok(req, res, next, response)
    })
}
