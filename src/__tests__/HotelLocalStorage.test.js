import Hotel from '../modules/Hotel.js';
import { Room } from '../modules/Room.js';

describe('Hotel localStorage tests', () => {
  beforeEach(() => {
    global.localStorage = {
      data: {},
      getItem(key) {
        return this.data[key] || null;
      },
      setItem(key, value) {
        this.data[key] = value;
      },
      clear() {
        this.data = {};
      }
    };
    
    global.prompt = jest.fn();
    
    global.hotelInstance = {
      saveToLocalStorage: jest.fn()
    };
  });

  test('saveToLocalStorage and loadFromLocalStorage should correctly store and retrieve rooms', () => {
    const hotel1 = new Hotel('TestHotel');
    const room = new Room(303, 'suite');
    
    prompt.mockReturnValue('1234567890123456');
    
    hotel1.addRoom(room);
    
    global.hotelInstance = hotel1;
    
    room.book();
    
    const savedData = localStorage.getItem(`hotel_TestHotel`);
    expect(savedData).not.toBeNull();
    
    const parsedData = JSON.parse(savedData);
    
    expect(parsedData.length).toBe(1);
    expect(parsedData[0].number).toBe(303);
    expect(parsedData[0].type).toBe('suite');
    expect(parsedData[0].isAvailable).toBe(false);
    
    const hotel2 = new Hotel('TestHotel');
    
    expect(hotel2.rooms.length).toBe(1);
    expect(hotel2.rooms[0].number).toBe(303);
    expect(hotel2.rooms[0].type).toBe('suite');
    expect(hotel2.rooms[0].isAvailable).toBe(false);
  });
});