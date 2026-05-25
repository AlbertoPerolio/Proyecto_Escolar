// Helper script (optional) to sync `status` with existing `isActive`.
// Run manually if needed:
//   node backend/seed/migrate-product-status.js
//
// It will set:
//  - status='active' for isActive=true
//  - status='paused' for isActive=false
//
// It does NOT set 'deleted'; deletions will happen on the next Baja.

import sequelize from "../DB/sequelize.js";
import ProductModel from "../DB/models/product.js";

async function main() {
  await sequelize.connect?.();

  // If status doesn't exist in DB yet, this will fail; run after migration.
  const pausedCount = await ProductModel.update(
    { status: "paused" },
    { where: { isActive: false } },
  );
  const activeCount = await ProductModel.update(
    { status: "active" },
    { where: { isActive: true } },
  );

  console.log({ activeCount, pausedCount });
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
