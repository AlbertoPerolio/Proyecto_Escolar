# TODO: Admin activar publicación (status=active/paused)

- [ ] Implementar `byUser()` y `adminAll()` en `backend/modules/product/controller.js`.
  - [ ] `byUser(currentUser)`: devolver `status in (active, paused)` y filtrar por `id_user` si no es admin.
  - [ ] `adminAll()`: devolver `status in (active, paused)` para todos.
  - [ ] Actualizar `return { ... }` para exportar esas funciones.
- [ ] Verificar endpoints:
  - [ ] `GET /api/product/admin-all` retorna 200.
  - [ ] `GET /api/product/by-user` retorna 200.
- [ ] Validar en UI:
  - [ ] Admin entra a Profile -> "Mis Ofertas / Productos" y ve publicaciones pausadas.
  - [ ] Botón “Activar” cambia el status a `active`.
