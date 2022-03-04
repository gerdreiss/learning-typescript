@classDec
class Boat {
  @propDec
  color: string = 'red';

  @propDec
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError('Oops, boat was sunk.\n')
  pilot(@paramDec speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('shoooo');
    }
  }
}

function classDec(constructor: typeof Boat) {
  console.log(constructor);
}

function paramDec(target: any, key: string, index: number) {
  console.log(key, index);
}

function propDec(target: any, key: string) {
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage, e);
      }
    };
  };
}
