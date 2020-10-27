'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  findByIdEstrutura: async ctx => {
    const { id_estrutura } = ctx.params;

    const entity = await strapi.services.disciplina.find({ id_estrutura });
    return entity;
  }
};
