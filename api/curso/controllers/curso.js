'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findOneByCodigo: async ctx => {
    const { codigo } = ctx.params;

    const entity = await strapi.services.curso.findOne({ codigo });
    return entity;
  }
};
