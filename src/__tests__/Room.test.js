import { Room } from '../modules/Room.js';

beforeEach(() => {
  global.prompt = jest.fn();
  
  global.hotelInstance = {
    saveToLocalStorage: jest.fn()
  };
});

test('booking a room sets isAvailable to false', () => {
  const room = new Room(101, 'standard');
  
  prompt.mockReturnValue('1234567890123456');
  
  room.book();
  
  expect(room.isAvailable).toBe(false);
  
  expect(global.hotelInstance.saveToLocalStorage).toHaveBeenCalled();
});

test('cancelBooking sets isAvailable back to true', () => {
  const room = new Room(202, 'standard');
  
  prompt.mockReturnValue('1234567890123456');
  
  room.book();
  
  expect(room.isAvailable).toBe(false);
  
  global.hotelInstance.saveToLocalStorage.mockClear();
  
  room.cancelBooking();
  
  expect(room.isAvailable).toBe(true);
  
  expect(global.hotelInstance.saveToLocalStorage).toHaveBeenCalled();
});