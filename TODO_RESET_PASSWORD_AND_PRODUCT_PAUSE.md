# TODO - Reset contraseña + Pausa/Baja productos

## Backend (productos)

- [ ] Actualizar `backend/DB/models/product.js`: agregar columna `status` (active/paused/deleted) y descontinuar `isActive` o mantenerlo compatible.
- [ ] Crear migración/actualización en DB (si tu proyecto usa sync/Sequelize, decidir estrategia):
  - [ ] Si usás `sequelize.sync({ alter: true })`, correr para que agregue la columna.
  - [ ] Si no, crear script SQL.
- [ ] Actualizar `backend/modules/product/controller.js`:
  - [ ] `all()` debe filtrar `status='active'`.
  - [ ] `one()` debe permitir mostrar según reglas.
  - [ ] `update()` debe mantener status si no se envía.
  - [ ] `del()` (baja) debe marcar `status='deleted'`.
  - [ ] Agregar métodos `pause()` y `activate()` o ajustar `update` para esos endpoints.
- [ ] Actualizar `backend/modules/product/routes.js`:
  - [ ] `PUT /:id/pause` => `status='paused'`
  - [ ] `PUT /:id/activate` => `status='active'`
  - [ ] `DELETE /:id` => `status='deleted'`
- [ ] (Opcional pero recomendado) Crear endpoint privado para panel:
  - [ ] `GET /my-products` (incluye paused y active, excluye deleted)

## Frontend (Profile)

- [ ] Actualizar `frontend/src/pages/Profile.jsx` para que “Mis productos” use el endpoint correcto (incluya paused) o, si se mantiene `GET /product`, filtrar por status.
- [ ] Cambiar label de botones:
  - [ ] Si `status==='active'` => mostrar “Pausar”
  - [ ] Si `status==='paused'` => mostrar “Activar”
  - [ ] Si `status==='deleted'` => no mostrar en lista
- [ ] (Opcional) Actualizar textos de confirmación.

## Backend/Frontend (reset contraseña)

- [ ] Unificar formato de respuestas auth (login/reset)
- [ ] Ajustar frontend ForgotPassword y login para leer siempre `body.mensaje`

## Verificación

- [ ] Probar en backend con requests:
  - [ ] Crear producto => status active
  - [ ] Pause => status paused y se sigue viendo en “Mis productos”
  - [ ] Activate => status active y se ve en lista
  - [ ] Baja => status deleted y desaparece
- [ ] Probar reset contraseña: error y éxito.
