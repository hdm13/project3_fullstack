/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('member_info').del()
  await knex('member_info').insert([
    {username: 'user1', password: 'password', name:'name1', branch:'navy', gender:'male',   heightinches: 60, physicalLimitations:'no'},
    {username: 'user2', password: 'password', name:'name2', branch:'navy', gender:'female', heightinches: 65, physicalLimitations:'no'},
    {username: 'user3', password: 'password', name:'name3', branch:'navy', gender:'male',   heightinches: 70, physicalLimitations:'yes'},
    {username: 'user4', password: 'password', name:'name4', branch:'navy', gender:'female', heightinches: 59, physicalLimitations:'no'},
  ]);
};
