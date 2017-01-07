import { expect } from 'chai';
import { RightShoulder } from './right.shoulder';
import { describe, it, beforeEach } from 'mocha';

describe('RightShoulder', () => {
  describe('calculateDOM', () => {
    let rs: RightShoulder;
    beforeEach(() => {
      rs = new RightShoulder(0, 10, 20);
    });

    it('should return 1 when value equals peak', () => {
      expect(rs.calculateDOM(10)).to.equal(1);
    });

    it('should return 0 when value is lower than left', () => {
      expect(rs.calculateDOM(-2)).to.equal(0);
    });

    it('should return 0 when value is higher than right', () => {
      expect(rs.calculateDOM(21)).to.equal(0);
    });

    it('should return .5 when value is halfway between left and peak', () => {
      expect(rs.calculateDOM(5)).to.equal(.5);
    });

    it('should return 1 when value is halfway between peak and right', () => {
      expect(rs.calculateDOM(15)).to.equal(1);
    });

    it('should return 1 when value equals right', () => {
      expect(rs.calculateDOM(20)).to.equal(1);
    });
  });
});
