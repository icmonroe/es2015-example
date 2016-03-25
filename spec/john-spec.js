import John  from '../app/scripts/John.js';

describe('John spec', () => {
  it('returns full name', () => {
    var john = new John();
    expect(john.getFullName()).toEqual('John Hamm');
  });
});
