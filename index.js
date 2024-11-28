import express from 'express';
import { buscarUfs, buscarUfsPorId, buscarUfsPorNome } from './servicos/servicos';


const app = express();


app.get('/ufs', (req, res) =>{
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
    if (resultado.length > 0) {
    res.json(resultado);
}   else {
    res.status(404).send({"erro": "Nenhu UF encontrado"})
    }
});

app.get('/ufs:iduf', (req, res) => {
    const uf = buscarUfsPorId(req.params.iduf)
if (uf) {
    res.json(uf);
} else if (isNaN(parseInt(req.params.iduf))) {
    res.status(400).send({"erro" : "Requisicao invalida"});
} else {
    res.status(404).send({"erro" : "Uf nao encontrada"});
}
});

app.listen(8080, () => {
    let data = new Date()
    console.log("servidorinciado na porta 8080 em"+data);
    
});