import { checkError, client } from './client';

export async function getToDos() {
  const userId = client.auth.session().user.id;
  const response = await client.from('todos').select('*').match({ user_id: userId });
  // this will only grab items that belong to this user thanks to RLS and user_id property

  return checkError(response);
}

export async function createToDoItem(description, completed) {
  const response = await client.from('todos').insert({ description, completed }).single(); // because of RLS and our default values, we add user_id for free

  return checkError(response);
}

// i want to set bought:true for this particular item
// how do i refer to this particular item?
// i use its id. Ids are unique. There is no way to accidentally update the wrong thing if you supply this unique id to supabase
export async function toggleToDo({ id, completed }) {
  // sets a given list item's bought property to true
  const response = await client
    .from('todos')
    .update({ completed: !completed })
    .match({ id: id })
    .single();

  return checkError(response);
}

export async function deleteToDo({ id }) {
  const response = await client.from('todos').delete().match({ id: id });
  return checkError(response);
}
