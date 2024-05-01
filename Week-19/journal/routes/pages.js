const pages = require('../controllers/pages');

const routes=[
    {
        method: 'GET',
        url: '/pages/allpages',
        handler: pages.getAllPages
    }
]

module.exports=routes;