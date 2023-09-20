import Route from '@ioc:Adonis/Core/Route'



export default () => {
  return Route.group(() => {
    Route.get('/', 'PegawaisController.index')
    Route.post('/', 'PegawaisController.store')
    Route.get('/:id', 'PegawaisController.show')
    Route.put('/:id', 'PegawaisController.update')
    Route.delete('/:id', 'PegawaisController.destroy')
  })
}