// auto.test.js
import Auto from './auto';

describe('Auto', () => {
    it('debería avanzar hacia adelante cuando la orientación es Norte', () => {
        const auto = new Auto(1, 2, 'N');
        auto.mover('A');
        expect(auto.getPosicion()).toEqual('1,3 N');
    });
});
