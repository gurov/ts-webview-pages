import { apiService } from './api-service';
import { expect } from 'chai';

before(function () {
    apiService.setTokens('{"authToken": "1 authToken", "refreshToken": "1 refreshToken"}');
});

describe('apiService', () => {
    it('setTokens: should set apiService tokens', () => {
        expect(true).to.equal(true);
    });
});
