let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional == true) {
    console.log("O produto A,", produtoA.nome,", é internacional. Aplicar", + produtoA.valor * 0.20 , "Reais de imposto");

         } else {
              console.log("O produto A,", produtoA.nome, ",é nacional. Aplicar", + produtoA.valor * 0.12 , "Reais de imposto")
}


if (produtoB.internacional == true) {
    console.log("O produto B,", produtoB.nome,", é internacional. Aplicar", + produtoB.valor * 0.20 , "Reais de imposto");

         } else {
              console.log("O produto B,", produtoB.nome, ",é nacional. Aplicar", + produtoB.valor * 0.12 , "Reais de imposto")
}


if (produtoC.internacional == true) {
    console.log("O produto C,", produtoC.nome,", é internacional. Aplicar", + produtoC.valor * 0.20 , "Reais de imposto");

         } else {
              console.log("O produto C,", produtoC.nome, ",é nacional. Aplicar", + produtoC.valor * 0.12 , "Reais de imposto")
}