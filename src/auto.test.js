// auto.test.js
import Auto from './auto.js';

describe('Auto Controlado', () => {
    
    describe('Mostrar la posicion del auto', () => {
        it('deberia mostrar la posición inicial', () => {
            const auto = new Auto(1, 2, 'N');
            expect(auto.getPosicion()).toEqual('1,2 N');
        });
    });

});
