//crea la suit de los test
describe('Example Suit test', () => {
    //Dentro todos los test

    test('Debe de ser mayor a 10', () => {

        // Arreglar
        let value = 10;

        // Estímulo
        value = value + 2

        // Observar el resultado
        expect(value).toBeGreaterThan(10)

    })

})