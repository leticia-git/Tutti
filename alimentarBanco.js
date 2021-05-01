const {Product, Provider, Category} = require("./models")

const criarMuitosProviders = async () =>{
    await Provider.bulkCreate([
        {
        name:'Barraca da Josi',
        cnpjCpf:'123456789',
        description:'frutas', 
        responsible:'compras', 
        fone:'1144444444',
        register: 0,
        status: 1 
        },
        {
        name:'Barraca do Joao',
        cnpjCpf:'987654321',
        description:'legumes', 
        responsible:'fornecedor', 
        fone:'119999999',
        register:0,
        status:0
        },
        {
        name:'Barraca da Leticia',
        cnpjCpf:'222333444',
        description:'verduras', 
        responsible:'fornecedor', 
        fone:'33333333',
        register: 1,
        status:0,
        },
        {
        name:'Barraca do Felipe',
        cnpjCpf:'321654987',
        description:'sacolas', 
        responsible:'fornecedor', 
        fone:'45677891',
        register:1,
        status: 1 ,
        }
    ])
}

const criarCategorias = async () =>{
    await Category.bulkCreate([{
        category:'Frutas',
        description:'A fruta é peça fundamental numa alimentação saudável e devem ser consumidas diariamente. Elas fornecem vitaminas, minerais, diferentes fibras alimentares, compostos protetores que ajudam a regular o organismo e antioxidantes que são nutrientes essenciais na proteção das células.'
    },
    {
        category:'Legumes',
        description:'Os legumes são aqueles em que a parte comestível são frutos ou sementes, como acontece com o feijão, a lentilha, o arroz, o pimentão, a laranja e a abobrinha.'
    },
    {
        category:'Verduras',
        description:'As verduras são aquelas em que a parte comestível são as folhas, as flores ou as hastes, como é o caso da alface, do repolho ou da couve, por exemplo.'
    }
])
}

const criarProdutos = async () =>{
    await Product.bulkCreate([
        {
        name: 'Abacate', 
        picture: '/images/abacate.png',
        description:'',
        price:3.99,
        categoryId:1,
        stock:15000, 
        providerId:1,
        sale:0
      },
      {
        name: 'Abacaxi', 
        picture: '/images/abacaxi.png',
        description:'',
        price:3.99,
        categoryId:1,
        stock:15000, 
        providerId:2, 
        salePrice:3, 
        sale:1
      },
      {
        name: 'Ameixa', 
        picture: '/images/ameixa.png',
        description:'',
        price: 25.99,
        categoryId:1,
        stock:15000, 
        providerId:1, 
        sale:0
      
      },
      {
        name: 'Amora', 
        picture: '/images/amora.png',
        description:'',
        price:34.99,
        categoryId:1,
        stock:15000, 
        providerId:1,
        sale:0
      },
    
      {
        name: 'Banana', 
        picture: '/images/banana1.png',
        description:'',
        price:2.99,
        categoryId:1,
        stock:15000, 
        providerId:3, 
        salePrice:2.5, 
        sale:1
      },
      {
        name: 'Cereja', 
        picture: '/images/cereja.png',
        description:'',
        price: 49.99,
        categoryId:1,
        stock:15000, 
        providerId:4,
        sale:0
      },
      {
        name: 'Coco', 
        picture: '/images/coco.png',
        description:'',
        price: 2.99,
        categoryId:1,
        stock:15000, 
        providerId:2, 
        sale:0
      },
      {
        name:'Goiaba', 
        picture:'/images/goiaba1.png',
        description:'',
        price:4.99,
        categoryId:1,
        stock:15000, 
        providerId:3, 
        sale:0
    
      },
      {
        name: 'Kiwi', 
        picture: '/images/kiwi.png',
        description:'',
        price:23.99,
        categoryId:1,
        stock:15000, 
        providerId:4, 
        salePrice:20, 
        sale:1
      },
      {
        name: 'Limão', 
        picture: '/images/limao.png',
        description:'',
        price:2.99,
        categoryId:1,
        stock:15000, 
        providerId:2,
      },
      {
        name: 'Maçã', 
        picture: '/images/maça1.png',
        description:'',
        price:2.99,
        categoryId:1,
        stock:15000, 
        providerId:1
      },
      {
        name: 'Maçã Verde', 
        picture: '/images/maçaverde.png',
        description:'',
        price:5.99,
        categoryId:1,
        stock:15000, 
        providerId:4,
      },
    
      {
        name: 'Manga', 
        picture: '/images/manga.png',
        description:'',
        price:5.99,
        categoryId:1,
        stock:15000, 
        providerId:4, 
        salePrice:5.2, 
        sale:1
      },
      {
        name: 'Melancia', 
        picture: '/images/melancia.png',
        description:'',
        price: 2.99,
        categoryId:1,
        stock:15000, 
        providerId:2, 
        salePrice:2.5, 
        sale:1
    
      },
      {
        name: 'Morango', 
        picture: '/images/morango.png',
        description:'',
        price: 5.99,
        categoryId:1,
        stock:15000, 
        providerId:2
        
      },
      {
        name: 'Laranja', 
        picture: '/images/orange.png',
        description:'',
        price:2.99,
        categoryId:1,
        stock:15000, 
        providerId:1
        
      },
      {
        name: 'Mamão', 
        picture: '/images/papaya.png',
        description:'',
        price:5.99,
        categoryId:1,
        stock:15000, 
        providerId:3
      },
      {
        name: 'Pêssego', 
        picture: '/images/pêssego.png',
        description:'',
        price: 7.99,
        categoryId:1,
        stock:15000, 
        providerId:1
    
      },
      {
        name: 'Uva', 
        picture: '/images/uva.png',
        description:'',
        price: 6.99,
        categoryId:1,
        stock:15000, 
        providerId:1
      },
      {
        name: 'Perâ', 
        picture: '/images/pera.png',
        description:'',
        price:6.99,
        categoryId:1,
        stock:15000, 
        providerId:2
      },
      {
        name: 'Abobora', 
        picture: '/images/abobora1.png',
        description:'',
        price:5.99,
        categoryId:2,
        stock:15000, 
        providerId:1, 
        salePrice:5, 
        sale:1
      },
      {
        name: 'Abobrinha', 
        picture: '/images/abobrinha.png',
        description:'',
        price: 5.99,
        categoryId:2,
        stock:15000, 
        providerId:2
      },
      {
        name: 'Aspargos', 
        picture: '/images/aspargos.png',
        description:'',
        price: 53.99,
        categoryId:2,
        stock:15000, 
        providerId:3, 
        salePrice:35, 
        sale:1
      },
      {
        name: 'Batata', 
        picture: '/images/batata.png',
        description:'',
        price: 3.99,
        categoryId:2,
        stock:15000, 
        providerId:4
      },
      {
        name: 'Batata doce', 
        picture: '/images/batatadoce.png',
        description:'',
        price: 3.99,
        categoryId:2,
        stock:15000, 
        providerId:2
      },
      {
        name: 'Beringela', 
        picture: '/images/beringela.png',
        description:'',
        price: 8.99,
        categoryId:2,
        stock:15000, 
        providerId:3,
      },
      {
        name: 'Beterraba', 
        picture: '/images/beterraba1.png',
        description:'',
        price: 5.99,
        categoryId:2,
        stock:15000, 
        providerId:1, 
        salePrice:5.45, 
        sale:1
      },
      {
        name: 'Cenoura', 
        picture: '/images/cenoura.png',
        description:'',
        price: 4.99,
        categoryId:2,
        stock:15000, 
        providerId:1
      },
      {
        name: 'Chuchu', 
        picture: '/images/chuchu.png',
        description:'',
        price: 2.99,
        categoryId:2,
        stock:15000, 
        providerId:4
      },
      {
        name: 'Inhame', 
        picture: '/images/inhame.png',
        description:'',
        price: 4.99,
        categoryId:2,
        stock:15000, 
        providerId:3, 
        salePrice:4.75, 
        sale:1
      },
      {
        name: 'Mandioca', 
        picture: '/images/mandioca.png',
        description:'',
        price: 7.99,
        categoryId:2,
        stock:15000, 
        providerId:1
      },
      {
        name: 'Mandioquinha', 
        picture: '/images/mandioquinha.png',
        description:'',
        price: 5.99,
        categoryId:2,
        stock:15000, 
        providerId:3, 
        salePrice:4.95, 
        sale:1
      },
      {
        name: 'Nabo', 
        picture: '/images/nabo.png',
        description:'',
        price: 4.99,
        categoryId:2,
        stock:15000, 
        providerId:4, 
        salePrice:3, 
        sale:1
      },
      {
        name: 'Palmito', 
        picture: '/images/palmito.png',
        description:'',
        price: 24.99,
        categoryId:2,
        stock:15000, 
        providerId:1
      },
      {
        name: 'Pepino', 
        picture: '/images/pepino.png',
        description:'',
        price: 2.99,
        categoryId:2,
        stock:15000, 
        providerId:2
      },
      {
        name: 'Pimentao', 
        picture: '/images/pimentao.png',
        description:'',
        price: 2.99,
        categoryId:2,
        stock:15000, 
        providerId:3, 
        salePrice:2.5, 
        sale:1
      },
      {
        name: 'Pimentao Amarelo', 
        picture: '/images/pimentaoamarelo.png',
        description:'',
        price: 8.99,
        categoryId:2,
        stock:15000, 
        providerId:3, 
        salePrice:8, 
        sale:1
      },
      {
        name: 'Quiabo', 
        picture: '/images/quiabo.png',
        description:'',
        price: 3.60,
        categoryId:2,
        stock:15000, 
        providerId:2,
      },
      {
        name: 'Rabanete', 
        picture: '/images/rabanete.png',
        description:'',
        price: 5.99,
        categoryId:2,
        stock:15000, 
        providerId:4
      },
      {
        name: 'Tomate', 
        picture: '/images/tomate.png',
        description:'',
        price: 4.99,
        categoryId:2,
        stock:15000, 
        providerId:2, 
        salePrice:4.55, 
        sale:1
      },
        {
        name: 'Acélga', 
        picture: '/images/acelga1.png',
        description:'',
        price: 4.99,
        categoryId:3,
        stock:15000, 
        providerId:2
      },
      {
        name: 'Agião', 
        picture: '/images/agriao.png',
        description:'',
        price: 7.60,
        categoryId:3,
        stock:15000, 
        providerId:2
      },
      {
        name: 'Alface Americana', 
        picture: '/images/alfaceamericana.png',
        description:'',
        price: 5.99,
        categoryId:3,
        stock:15000, 
        providerId:3, 
        salePrice:5, 
        sale:1
      },
      {
        name: 'Alface Crespa', 
        picture: '/images/alfacecrespa.png',
        description:'',
        price: 5.99,
        categoryId:3,
        stock:15000, 
        providerId:1 
      },
      {
        name: 'Alho Poró', 
        picture: '/images/alhoporo.png',
        description:'',
        price: 4.99,
        categoryId:3,
        stock:15000, 
        providerId:4, 
        salePrice:4, 
        sale:1
      },
      {
        name: 'Almeirão', 
        picture: '/images/almeirao.png',
        description:'',
        price: 6.4,
        categoryId:3,
        stock:15000, 
        providerId:3
      },
      {
        name: 'Brocolis', 
        picture: '/images/brocolis1.png',
        description:'',
        price: 10.99,
        categoryId:3,
        stock:15000, 
        providerId:3
      },
      {
        name: 'Cebola', 
        picture: '/images/cebola.png',
        description:'',
        price: 2.99,
        categoryId:3,
        stock:15000, 
        providerId:2
      },
      {
        name: 'Cebola Roxa', 
        picture: '/images/cebolaroxa.png',
        description:'',
        price: 7.99,
        categoryId:3,
        stock:15000, 
        providerId:3
      },
      {
        name: 'Chicoria', 
        picture: '/images/chicoria.png',
        description:'',
        price: 8.89,
        categoryId:3,
        stock:15000, 
        providerId:4
      },
      {
        name: 'Coentro', 
        picture: '/images/coentro.png',
        description:'',
        price: 9.89,
        categoryId:3,
        stock:15000, 
        providerId:2
      },
      {
        name: 'Couve-Flor', 
        picture: '/images/couveflor.png',
        description:'',
        price: 5.99,
        categoryId:3,
        stock:15000, 
        providerId:1
      },
      {
        name: 'Couve-manteiga', 
        picture: '/images/couvemanteiga.png',
        description:'',
        price: 4.99,
        categoryId:3,
        stock:15000, 
        providerId:3
      },
      {
        name: 'Espinafre', 
        picture: '/images/espinafre.png',
        description:'',
        price: 9.99,
        categoryId:3,
        stock:15000, 
        providerId:3
      },
      {
        name: 'Hortela', 
        picture: '/images/hortela.png',
        description:'',
        price: 79.99,
        categoryId:3,
        stock:15000, 
        providerId:1
      },
      {
        name: 'Repolho', 
        picture: '/images/repolho1.png',
        description:'',
        price: 3.99,
        categoryId:3,
        stock:15000, 
        providerId:4
      },
      {
        name: 'Repolho Roxo', 
        picture: '/images/repolhoroxo.png',
        description:'',
        price: 5.99,
        categoryId:3,
        stock:15000, 
        providerId:3
      },
      {
        name: 'Rucula ', 
        picture: '/images/rucula.png',
        description:'',
        price: 5.99,
        categoryId:3,
        stock:15000, 
        providerId:3
      },
      {
        name: 'Salsão', 
        picture: '/images/salsao.png',
        description:'',
        price: 7.99,
        categoryId:3,
        stock:15000, 
        providerId:2,
      },
      {
        name: 'Cebolinha', 
        picture: '/images/cebolinha.png',
        description:'',
        price: 6.99,
        categoryId:3,
        stock:15000, 
        providerId:2, 
        salePrice:6, 
        sale:1
      }
    ])
}

criarMuitosProviders();
criarCategorias();
criarProdutos()

