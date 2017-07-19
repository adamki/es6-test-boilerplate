import { expect } from 'chai';
import Greeting from '../scripts/index';

describe('Your first Test', () => {
  expect(Greeting).to.equal('HelloWorld');
});
