const {Router} = require('express')
const route = Router()
const controller = require('../controller/controller')

route.get('/', controller.get_home)

route.get('/admin',controller.get_admin )
route.get('/add-staff', controller.get_add_staff)
route.post('/add-staff', controller.post_add_staff)
route.get('/view-staff', controller.get_staffs)

route.post('/log-in', controller.post_log_in)
route.get('/log-in', controller.get_log_in)
module.exports = route