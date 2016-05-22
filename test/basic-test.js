import { expect } from 'chai';

/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* global describe, it */

describe('1 + 2', function () {
  it('should equal 3', function () {
    expect(1 + 2).to.eql(3);
  });
});
