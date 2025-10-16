import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import SingUpsController from '#controllers/sing_ups_controller'
import SessionController from '#controllers/session_controller'
import LogoutsController from '#controllers/logouts_controller'

// Pages
router.on('/').render('pages/home')
router.on('/loginView').render('pages/login')
router.on('/dashboardView').render('pages/dashboard').use(middleware.auth())
router.post('/signup', [SingUpsController, 'userStore'])
router.post('/login', [SessionController, 'store'])
router.get('/logout', [LogoutsController, 'storeLogout']).use(middleware.auth())
