/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex){
    return knex.schema.createTable('user_weight', table => {
        table.increments('id');
        table.string('date');
        table.integer('weight');
        table.integer('member_info_id').unsigned();
        table.foreign('member_info_id').references('member_info.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function down(knex) {
    return knex.schema.dropTableIfExists('user_weight');
};

