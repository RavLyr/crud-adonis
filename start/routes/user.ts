import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get("/", "UsersController.index");
    Route.post("/", "UsersController.store");
    Route.get("/:id", "UsersController.show");
    Route.put("/:id", "UsersController.update");
    Route.delete("/:id", "UsersController.destroy");
  }).prefix("api/v1/users");