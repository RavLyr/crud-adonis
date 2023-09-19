import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/register', 'PegawaiAuthsController.register')
    Route.post('/login', 'PegawaiAuthsController.login')
    Route.get('/logout', 'PegawaiAuthsController.logout')
    }).prefix('/api/auth')