import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'PegawaisController.index')
  Route.post('/', 'PegawaisController.store')
  Route.get('/:id', 'PegawaisController.show')
  Route.put('/:id', 'PegawaisController.update')
  Route.delete('/:id', 'PegawaisController.destroy')
}).prefix('/api/v1/pegawai')