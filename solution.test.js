const {
  getScore
}= require('./solution');


describe('solution JS', ()=> {
  describe('getScore', ()=> {
    it('should throw error when input is not array', ()=> {
      expect(()=> {getScore('qwerty');}).toThrow('Invalid argument');
    });
    it('should throw error when input is not array of nums', ()=> {
      expect(()=> {getScore(['qwerty', 9]);}).toThrow('Invalid argument');
    });
    it('should return wrong input when inputs don\'t add up', ()=> {
      expect(()=> {getScore([8, 5, 3, 2]);}).toThrow('wrong input');
    });
    it('should return total score of a game when input is correct', ()=> {
      expect(getScore([10, 5, 5, 9, 0])).toBe(48);
      expect(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
    });
  });
});