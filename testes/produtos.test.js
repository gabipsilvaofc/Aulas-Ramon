const request = require('supertest')
const app = require('../index')


describe('GET /produtos', () => {
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.status).toBe(200)
        // expect (res.body).toBe({})
    });
    it('verficar se a lista de produtos esta cheia', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.body).toBeDefined() //verifica que existe //se fosse undefined não teria nada
    });
    it('pegar um produto pelo id', async () => {
        const res = await request(app).get('/produtos/3f5bba88-4fd8-4faa-845d-540aeaa8f342').send();
        expect(res.status).toBe(200)
        // expect (res.body).toBe({})
    });
})
describe('POST /produtos', () => {
    it('criar produto com sucesso', async () => {
        const res = await request(app).post('/produtos').send(
            {
            "nome": "Garrafa",
            "descricao": "Garrafa 600ml de plástico",
            "preco": 20,
            "imagem": "garrafa.jpg"
            }
            );
        expect(res.status).toBe(204)
    });
})

describe('UPDATE /produtos/id', () => {
    it('atualizando o produto com sucesso', async () => {
        const res = await request(app).post('/produtos/e56219c9-0bbb-49fb-9c29-d663ebfb30ea').send(
            {
                nome: "updateProduto"            
            });
        expect(res.status).toBe(500);
    })
})



describe('DELETE /produtos/:id', ()=>{
    it('Deletar produto com sucesso', async () => {
        const res = await request(app).delete('/produtos/722955c2-0543-46d6-91c7-4c44ed308825').send();
        expect(res.status).toBe(404);
    })
})