const request = require('supertest')
const app = require('../index')


describe('GET /clientes', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.status).toBe(200)
        // expect (res.body).toBe({})
    });
    it('verficar se a lista de clientes esta cheia', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.body).toBeDefined() //verifica que existe //se fosse undefined não teria nada
    });
    it('pegar um clientes pelo id', async () => {
        const res = await request(app).get('/clientes/d05fa528-7a2c-4ffc-b73c-78c87536fc9b').send();
        expect(res.status).toBe(200)
        // expect (res.body).toBe({})
    });
})
describe('POST /clientes', () => {
    it('criar cliente com sucesso', async () => {
        const res = await request(app).post('/clientes').send(
            {
                "nome": "create",
                "email": "teste.teste@gmail.com",
                "senha": "teste123",
            }
            );
        expect(res.status).toBe(204)
    });
})

describe('UPDATE /clientes', () => {
    it('atualizando o cliente com sucesso', async () => {
        const res = await request(app).post('/clientes/60601b66-ca08-42c0-83e7-9d1c1eb3c5b6').send(
            {
                "nome": "update"
            }
            );
        expect(res.status).toBe(200)
    });
})

describe('DELETE /clientes', () => {
    it('Cliente excluido com sucesso', async () => {
        const res = await request(app).delete('/clientes/fdc21162-8d22-4dad-bdcf-8d61bff69735').send();
        expect(res.status).toBe(204)
    });
})
