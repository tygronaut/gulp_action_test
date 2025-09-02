import {add, multiply, fibonacci} from "../src/functions/functions.js";

describe('functions', () => {
  describe('add', () => {
    it('adds two numbers together', () => {
      
      const result = functions.add(6, 2);
      expect(result).toBe(8);
    });
  });

  describe('multiply', () => {
    it('multiply two numbers', () => {
      
      const result = functions.multiply(3, 3);
      expect(result).toBe(9);
    });
  });

  describe('multiply', () => {
    it('multiply 4 times 4', () => {
      
      const result = functions.multiply(4, 4);
      expect(result).toBe(16);
    });
  });

    describe('multiply', () => {
    it('multiply 5 times 6', () => {
      
      const result = functions.multiply(5, 6);
      expect(result).toBe(30);
    });
  });
  
  describe('fibonacci', () => {
    it('generates a valid fibonacci sequence', () => {
      
      const result = functions.fibonacci(12);
      expect(result[12]).toBe(144);
    });
  });
});
