const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 1,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

profile.age = 20;

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
