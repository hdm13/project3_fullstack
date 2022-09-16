/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex){
    return knex.schema.createTable('user_scores', table => {
        table.increments('id');
        table.string('age');
        table.string('gender');
        table.string('category');
        table.string('level');
        table.string('points');
        table.string('pushups');
        table.string('forearm_plank');
        table.string('run');
        table.string('row');
        table.string('swim_yard');
        table.string('swim_meter');
        table.string('date');
        table.integer('member_info_id').unsigned();
        table.foreign('member_info_id').references('member_info.id');
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function down(knex) {
    return knex.schema.dropTableIfExists('user_scores');
};

