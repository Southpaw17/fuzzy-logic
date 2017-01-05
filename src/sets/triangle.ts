import { FuzzySet } from './FuzzySet'

export class Triangle implements FuzzySet {
  left: number;
  peak: number;
  right: number;
  constructor(left: number, peak: number, right: number) {
    this.left = left;
    this.peak = peak;
    this.right = right;
  }

  calculateDOM(value: number) {
    if(value == this.peak) {
      return 1;
    }

    if (value < this.peak && value > this.left) {
      let diff = this.peak - this.left;
      let val_diff = value - this.left;

      return val_diff / diff;
    }

    if (value > this.peak && value < this.right) {
      let diff = this.right - this.peak;
      let val_diff = this.right - value;

      return val_diff / diff;
    }

    return 0;
  }
}
