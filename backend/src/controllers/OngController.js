const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
     
       return response.json(ongs);
     },

    async create(request, response) {
       
       const { name, email, Whatsapp, city, UF } = request.body;
    
        console.log(request.body);

        const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name, 
        email,
        Whatsapp,    
        city,
        UF,
    })

    return response.json({ id });     
}
};