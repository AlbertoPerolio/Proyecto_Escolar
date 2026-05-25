/*
  Migration: add `status` to product table to support:
   - active
   - paused
   - deleted

  NOTE:
  This project may not have a migrations folder/runner.
  If you use Sequelize migrations, place this file in migrations and run them.
*/

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add column status with default 'active'
    await queryInterface.addColumn("product", "status", {
      type: Sequelize.ENUM("active", "paused", "deleted"),
      allowNull: false,
      defaultValue: "active",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("product", "status");
  },
};
