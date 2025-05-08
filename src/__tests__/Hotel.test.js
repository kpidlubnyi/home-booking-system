import { Room } from '../modules/Room.js';
import Hotel from '../modules/Hotel.js';

beforeEach(() => {
  global.localStorage = {
    getItem: jest.fn().mockReturnValue(null),
    setItem: jest.fn()
  };
  
  global.prompt = jest.fn();
  
  global.hotelInstance = {
    saveToLocalStorage: jest.fn()
  };
});

test('getAvailableRooms() returns only available rooms', () => {
  const hotel = new Hotel('Test Hotel');
  const room = new Room(101, 'standard');
  
  hotel.addRoom(room);
  
  prompt.mockReturnValue('1234567890123456');
  
  room.book();
  
  const available = hotel.getAvailableRooms();
  
  expect(available.length).toBe(0);
});