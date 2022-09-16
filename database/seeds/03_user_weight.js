/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user_weight').del()
  await knex('user_weight').insert([
    {date:'date', weight:'180', member_info_id: 1 },
    {date:'date', weight:'182', member_info_id: 1 },
    {date:'date', weight:'177', member_info_id: 1 },
    {date:'date', weight:'170', member_info_id: 1 },
    {date:'date', weight:'180', member_info_id: 2 },
    {date:'date', weight:'182', member_info_id: 2 },
    {date:'date', weight:'177', member_info_id: 2 },
    {date:'date', weight:'170', member_info_id: 2 },
    {date:'date', weight:'170', member_info_id: 3 },
    {date:'date', weight:'182', member_info_id: 3 },
    {date:'date', weight:'177', member_info_id: 3 },
    {date:'date', weight:'170', member_info_id: 3 },
    {date:'date', weight:'180', member_info_id: 4 },
    {date:'date', weight:'187', member_info_id: 4 },
    {date:'date', weight:'177', member_info_id: 4 },
    {date:'date', weight:'170', member_info_id: 4 }
  ]);
};
