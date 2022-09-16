/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user_scores').del()
  await knex('user_scores').insert([

    {age: '17', gender: 'male', category:'',   level:'',   points:'', pushups:'92', forearm_plank: "3:24", run: "8:15", row: "7:00",  swim_yard: "6:30",  swim_meter: "6:20", date: "09/16/2022", member_info_id: 1},
    {age: '18', gender: 'male', category:'',   level:'', points:'',  pushups:'91', forearm_plank: "3:19", run: "8:45", row: "7:10",  swim_yard: "6:45",  swim_meter: "6:35", date: "09/16/2022",member_info_id: 2},
    {age: '19', gender: 'female', category:'',   level:'',    points:'',  pushups:'86', forearm_plank: "3:14", run: "9:00", row: "7:20",  swim_yard: "7:15",  swim_meter: "7:05", date: "09/16/2022", member_info_id: 3},
    {age: '18', gender: 'female', category:'',     level:'',   points:'',  pushups:'82', forearm_plank: "3:04", run: "9:15", row: "7:30",  swim_yard: "7:45",  swim_meter: "7:35", date: "09/16/2022", member_info_id: 4},
    
    
  ]);
};
