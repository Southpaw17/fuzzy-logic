import { FuzzySet } from './sets/fuzzy.set';

export class FLV {
  sets: {};
  constructor() {
    this.sets = {};
  }

  add(name: string, set: FuzzySet, override = false): FLV {
    if (!override && this.sets[name]) {
      throw new Error("A set with this name has already been added to this FLV.");
    }

    this.sets[name] = set;

    return this;
  }

  defuzzify(value: number, method?: Function) {
      for (let set in this.sets) {
          let dom = this.sets[set].calculateDOM(value);
          console.log(set + ": " + dom);
      }
  }
}
