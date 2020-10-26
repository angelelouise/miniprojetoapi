'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findByIdCurso: async ctx => {
    const { id_curso } = ctx.params;

    const entity = await strapi.services.estrutura.find({ id_curso });
    return entity;
  }
};
