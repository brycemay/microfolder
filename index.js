const {micro} = require ('micro')
const {router, get, post, put, del} = require('microrouter')
const Datastore = require ('nedb')
// db = new Datastore ({animals: '/animalsdb.db'})


module.exports = router (
    get('/', (req,res) => 'hello world'),
    get('/animals', (req, res) => ["mammoth", "llama", "sheep"]),
    get('/cars', (req, res) => ["vw", "ford", "chevy"]),
    put('/cars', (req, res) => "Wut?"),
)


