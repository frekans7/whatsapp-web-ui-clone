import { createContext } from 'react';
import users from '../../data';

// initial user
const initialUser = {
  id: 1,
  picture: users.avatar,
  name: 'Jocelyn Lipshutz',
  phone_number: '+1 123 456 789',
  about: 'Hey there! I am using WhatsApp.',
  message: 'see you latter',
  date: 'yesterday',
};

const UsersContext = createContext(users);

export { initialUser, UsersContext };
