// No mongoose stuff in controller
const example_work = require('../services/example_work');

module.exports = {
    get(req, res, next){
        // !! BAD CODE !!
        // example_work('example')
        // .then(result => {
        //     if (result === 'error'){
        //         next(new Error('An error occurred'))
        //     }
        //     res.send(result);
        //     console.log('statement after res.send runs'); // res.send doesn't terminate the promise/function
        // })
        // .catch(next)

        // a slightly better code
        example_work('example')
        .then(result => {
            if (result === 'error'){ // if something goes wrong
                return next(new Error('An error occurred'))
            }
            res.send(result);
        })
        .catch(next)
    }
}