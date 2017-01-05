import { expect } from 'chai';
import { Triangle } from './triangle';
import { describe, it, beforeEach } from 'mocha';

describe('Triangle', () => {
  describe('calculateDOM', () => {
    let tri;
    beforeEach(() => {
      tri = new Triangle(0, 10, 20);
    });

    it('should return 1 when value equals peak', () => {
      expect(tri.calculateDOM(10)).to.equal(1);
    });

    it('should return 0 when value is lower than left', () => {
      expect(tri.calculateDOM(-2)).to.equal(0);
    });

    it('should return 0 when value is higher than right', () => {
      expect(tri.calculateDOM(21)).to.equal(0);
    });

    it('should return .5 when value is halfway between left and peak', () => {
      expect(tri.calculateDOM(5)).to.equal(.5);
    });

    it('should return .5 when value is halfway between peak and right', () => {
      expect(tri.calculateDOM(15)).to.equal(.5);
    });
  });
});
