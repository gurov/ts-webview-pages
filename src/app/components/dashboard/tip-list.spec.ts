import { expect } from 'chai';
import { getTipList } from './tip-list';

describe('Tip list', () => {
    it('tipList: generate string array', () => {
        let tips = [{
            id: '1',
            title: '1',
            description: '1'
        }];
        const testString = '<div class="tip-line-item"><a class="text-gray-dark" href="#tip-details-article/1">1</a></div>';
        let tipsGenerated = getTipList(tips);
        expect(testString).to.equal(tipsGenerated);
    });
});
