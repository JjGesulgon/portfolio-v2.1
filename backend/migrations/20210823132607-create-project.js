'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      intro_image: {
        type: Sequelize.STRING
      },
      screen_image: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      date_deployed: {
        type: Sequelize.DATE
      },
      overview: {
        type: Sequelize.TEXT
      },
      concept_description: {
        type: Sequelize.TEXT
      },
      development_description: {
        type: Sequelize.TEXT
      },
      github_repository: {
        type: Sequelize.STRING
      },
      live: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      reason_if_unavailable: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projects');
  }
};