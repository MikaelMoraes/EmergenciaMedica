import Vuex from  'vuex'

export default new Vuex.Store({
    state:{
        titulo:'Emergências Médicas',
        equipe:{
            enfermeiros:'Nome do enfermeiro',
            socorrista: 'Nome do socorrista',
            medico:'Nome do médico',
            carro:'Placa do Carro',
            telefone: '+55 21 00000-0000',
            kitDeReanimacao: 'kit 0001'
        }
    }
})