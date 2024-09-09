const request = require('supertest')
const app = require('../index')


describe('GET /pedidos', () => {
    it('pegar a lista de pedidos com sucesso', async () => {
        const res = await request(app).get('/pedidos').send();
        expect(res.status).toBe(200)
        // expect (res.body).toBe({})
    });
    it('verficar se a lista de pedidos esta cheia', async () => {
        const res = await request(app).get('/pedidos').send();
        expect(res.body).toBeDefined() //verifica que existe //se fosse undefined não teria nada
    });
    it('pegar um pedido pelo id', async () => {
        const res = await request(app).get('/pedidos/2').send();
        expect(res.status).toBe(200)
        // expect (res.body).toBe({})
    });
})
describe('POST /pedidos', () => {
    it('criar pedido com sucesso', async () => {
        const res = await request(app).post('/pedidos').send(
            {
                "cliente_id": "d05fa528-7a2c-4ffc-b73c-78c87536fc9b",
                "data_pedido": "2023-08-02",
                "nome": "Smartphone",
                "preco": 1500
            });
        expect(res.status).toBe(204)
    });
})

describe('UPDATE /pedidos/:id', () => {
    it('atualizando o cliente com sucesso', async () => {
        const res = await request(app).post('/pedidos/').send(
            {
                quantidade: "2"
            }
            );
        expect(res.status).toBe(406)
    });
})

describe('DELETE /pedidos', () => {
    it('Pedidos excluido com sucesso', async () => {
        const res = await request(app).delete('/pedidos/2').send();
        expect(res.status).toBe(404)
    });
})
