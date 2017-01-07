import { expect } from 'chai';
import { FLV } from './flv';
import { describe, it, beforeEach } from 'mocha';
import { Triangle } from './sets/triangle'

describe('FLV', () => {
  describe('defuzzify', () => {
      it('should do something', () => {
          let flv = new FLV();
          flv.add('testset', new Triangle(0, 5, 10));

          flv.defuzzify(3, () => {});
      })

  });

  describe('add', () => {
      let flv, tri;
      beforeEach(() => {
          flv = new FLV();
          tri = new Triangle(0, 5, 10);
      })
      it('should add a set to the list of sets', () => {
          flv.add('testset', tri);
          expect(flv.sets['testset']).to.equal(tri);
      });

      it('should throw an error when trying to add a set with the same name', () => {
          flv.add('testset', new Triangle(0, 10, 20));
          expect(() => { flv.add('testset', tri) }).to.throw(Error);
      });

      it('should replace old set when adding a set with the same name and override flag is set to true', () => {
          flv.add('testset', new Triangle(0, 10, 20))
          .add('testset', tri, true);
          expect(flv.sets['testset']).to.equal(tri);
      });
  });
});
