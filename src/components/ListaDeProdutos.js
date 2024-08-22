// ListaDeProdutos.js
import React from 'react';
import Produto from './/Produto';

const produtos = [
  {
    id: 1,
    title: "Babaganoush",
    description: "Pastinha de berinjela que se une ao tahine, ao limão e hortelã para ser degustada como entrada nas refeições junto com o pão árabe. ",
    imageUrl: "https://s2-receitas.glbimg.com/wGmcjLDe0KwZR_QL_6CWEbAxCyo=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/Q/n/4AzZssTG6L8q6NhcPnZQ/babaganoush-com-azeite.jpg"
  },
  {
    id: 2,
    title: "Falafel",
    description: "São bolinhos feitos de grão-de-bico processado com alho, hortelã e cenoura. Depois de feita a massa, você modela os bolinhos e leva ao forno.",
    imageUrl: "https://s2-receitas.glbimg.com/JpczXeTXMLF4kqXJjr0aqkh8ACU=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/r/4/nAl63PSeK9d2O283tAcA/receita-2910.jpg"
  },
  {
    "id": 3,
    "title": "Kafta",
    "description": "Muito popular no Brasil, a kafta é feita de carne moída, hortelã, e especiarias como a pimenta síria, que dão o toque especial ao prato.",
    "imageUrl": "https://s2-receitas.glbimg.com/iDGJHxdftYny3V7ihBB2Y0X1I0Q=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/L/6/wzuC30QuS3cZzr1uIwAg/kafta-receita-completa.jpg"
    },
    {
    "id": 4,
    "title": "Tabule",
    "description": "Também no ramo das saladas, o tabule talvez seja a mais popular da cozinha árabe. Seu preparo consiste em unir o trigo para kibe com cebola.",
    "imageUrl": "https://s2-receitas.glbimg.com/El64Zf726o8a-jCIP-n_Z0ngLKA=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/z/S/Rw5p6ISkusZl0vcwoa0g/tabule-aprenda-a-receita.jpg"
    },
    {
    
    "id": 5,
    "title": "Fatouche",
    "description": "Nesta salada feita à base de pão libanês torradinho, você junta legumes como pepino, rabanete e tomate, temperando com limão e zaatar, especiaria típica.",
    "imageUrl": "https://s2-receitas.glbimg.com/6npS1pIPkeQLbpsUYFfLTRW-j-U=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/F/8/2DjMXjTdq6x6Uj8BVi0Q/salada-fatouche.jpeg"
    },
    {
    "id": 6,
    "title": "Shawarma",
    "description": "Este tipo de preparação trata-se de fatias bem finas de cordeiro, frango ou carne.No Brasil, em algumas regiões, é costume colocar batata frita.",
    "imageUrl": "https://s2-receitas.glbimg.com/zz_bCruvoRRVo1eMMcfKnZ-z6Mk=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/V/x/iYqWlBTn6cfyvf9KpQQQ/shawarma-tempero.webp"
    },
    {
    "id": 7,
    "title": "Arroz de lentilha",
    "description": "Este acompanhamento tradicional na culinária árabe facilmente caiu no gosto dos brasileiros. Trata-se de um arroz feito com o mesmo.",
    "imageUrl": "https://s2-receitas.glbimg.com/_ejSh2oV6wUxZLOB8aNl7mixWYI=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2020/P/U/ohRKWuTnidiPhfdcbEag/arroz-de-lentilha-com-cebola-frita.jpg"
    },
    {
    "id": 8,
    "title": "Kibe cru",
    "description": "Esta receita pode ser consumida crua, assada, ou até mesmo frita. Trata-se da carne bem moída unida a temperos tradicionais da gastronomia. ",
    "imageUrl": "https://s2-receitas.glbimg.com/ERdw2AzQNZU8wwtcPXTnygiBcqQ=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/8/S/Pn0rBBRuyH6JTsfz3ZkA/kibe-cru-receita.jpg"
    },
    {
    "id": 9,
    "title": "Coalhada seca",
    "description": "A receita desta pastinha servida como entrada ou molho é muito simples de fazer, pois leva apenas dois ingredientes. Porém, o preparo.",
    "imageUrl": "https://s2-receitas.glbimg.com/cD9L6YY1ghiW2PST1yecDH9Bhgw=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/A/Z/1KBJVDSQmy76bVYEASug/coalhada-seca-da-gigi-vilela.jpg"
    
    },
    {
    "id": 10,
    "title": "Esfiha",
    "description": "Talvez o prato mais popular de todos no Brasil, a esfiha é uma massa muito fácil de praparar com o recheio de carne. Por aqui, podem ser encontrados.",
    "imageUrl": "https://s2-receitas.glbimg.com/5CLdOBGmiIN5lMjJIFDu_NPuFIQ=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/J/7/FTKBA0QVWfpZmMFCBcsQ/esfiha-de-carne-receita-completa.jpg"
    },
    {
    "id": 11,
    "title": "Homus tahine",
    "description": "Mais uma pastinha árabe de sucesso, o homus tahine é feito com grão-de-bico cozido e moído no liquidificador. Depois deste processo.",
    "imageUrl": "https://s2-receitas.glbimg.com/H5lXjEPgOaqsIZSKaobmZ15XpKc=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/E/t/KfecRAQLuiJiEJBKJG2Q/homus-tahine-receita.jpg"
    },
    {
    "id": 12,
    "title": "Pão sírio",
    "description": "Diferentemente do pão convencional, o pão sírio tem o formato arredondado e fino. Conhecido como pão árabe, ou pão folha.",
    "imageUrl": "https://s2-receitas.glbimg.com/-Nfu38pfu0oIlS7QL9j705IEMGc=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/s/T/TQCksqQBi80gIzafCozg/pao-sirio-receita.jpg"
    },
    {
      id: 13,
      title: "Babaganoush",
      description: "Pastinha de berinjela que se une ao tahine, ao limão e hortelã para ser degustada como entrada nas refeições junto com o pão árabe. ",
      imageUrl: "https://s2-receitas.glbimg.com/wGmcjLDe0KwZR_QL_6CWEbAxCyo=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/Q/n/4AzZssTG6L8q6NhcPnZQ/babaganoush-com-azeite.jpg"
    },
    {
      id: 14,
      title: "Falafel",
      description: "São bolinhos feitos de grão-de-bico processado com alho, hortelã e cenoura. Depois de feita a massa, você modela os bolinhos e leva ao forno.",
      imageUrl: "https://s2-receitas.glbimg.com/JpczXeTXMLF4kqXJjr0aqkh8ACU=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/r/4/nAl63PSeK9d2O283tAcA/receita-2910.jpg"
    },
    {
      "id": 15,
      "title": "Kafta",
      "description": "Muito popular no Brasil, a kafta é feita de carne moída, hortelã, e especiarias como a pimenta síria, que dão o toque especial ao prato.",
      "imageUrl": "https://s2-receitas.glbimg.com/iDGJHxdftYny3V7ihBB2Y0X1I0Q=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/L/6/wzuC30QuS3cZzr1uIwAg/kafta-receita-completa.jpg"
      },
    {
      "id": 16,
      "title": "Tabule",
      "description": "Também no ramo das saladas, o tabule talvez seja a mais popular da cozinha árabe. Seu preparo consiste em unir o trigo para kibe com cebola.",
      "imageUrl": "https://s2-receitas.glbimg.com/El64Zf726o8a-jCIP-n_Z0ngLKA=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/z/S/Rw5p6ISkusZl0vcwoa0g/tabule-aprenda-a-receita.jpg"
      },
    {
      "id": 17,
      "title": "Fatouche",
      "description": "Nesta salada feita à base de pão libanês torradinho, você junta legumes como pepino, rabanete e tomate, temperando com limão e zaatar, especiaria típica.",
      "imageUrl": "https://s2-receitas.glbimg.com/6npS1pIPkeQLbpsUYFfLTRW-j-U=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/F/8/2DjMXjTdq6x6Uj8BVi0Q/salada-fatouche.jpeg"
      },
    {
      "id": 18,
      "title": "Arroz de lentilha",
      "description": "Este acompanhamento tradicional na culinária árabe facilmente caiu no gosto dos brasileiros. Trata-se de um arroz feito com o mesmo.",
      "imageUrl": "https://s2-receitas.glbimg.com/_ejSh2oV6wUxZLOB8aNl7mixWYI=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2020/P/U/ohRKWuTnidiPhfdcbEag/arroz-de-lentilha-com-cebola-frita.jpg"
      },
    {
    
      "id": 19,
      "title": "Coalhada seca",
      "description": "A receita desta pastinha servida como entrada ou molho é muito simples de fazer, pois leva apenas dois ingredientes. Porém, o preparo.",
      "imageUrl": "https://s2-receitas.glbimg.com/cD9L6YY1ghiW2PST1yecDH9Bhgw=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/A/Z/1KBJVDSQmy76bVYEASug/coalhada-seca-da-gigi-vilela.jpg"
      
      },
    {
      "id": 20,
      "title": "Esfiha",
      "description": "Talvez o prato mais popular de todos no Brasil, a esfiha é uma massa muito fácil de praparar com o recheio de carne. Por aqui, podem ser encontrados.",
      "imageUrl": "https://s2-receitas.glbimg.com/5CLdOBGmiIN5lMjJIFDu_NPuFIQ=/320x182/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/J/7/FTKBA0QVWfpZmMFCBcsQ/esfiha-de-carne-receita-completa.jpg"
      }
];

const ListaDeProdutos = () => {
  return (
    <div>
      {produtos.map(produto => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </div>
  );
};

export default ListaDeProdutos;