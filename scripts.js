const produtos = [
  { codigo: "P001", nome: "A Vez da Penélope", tipo: "Esmalte", acabamento: "Cremoso", cor: "Rosa claro", imagem: "A vez da Penelope.jpg" },
  { codigo: "P002", nome: "Amor Perolado", tipo: "Esmalte", acabamento: "Perolado", cor: "Rosa claro", imagem: "Amor Perolado.jpg" },
  { codigo: "P003", nome: "Bali Cremoso", tipo: "Esmalte", acabamento: "Cremoso", cor: "Rosa queimado", imagem: "Bali Cremoso.jpg" },
  { codigo: "P004", nome: "Batida de Coco", tipo: "Esmalte", acabamento: "Cremoso", cor: "Branco leitoso", imagem: "Batida de Coco.jpg" },
  { codigo: "P005", nome: "Beleza Rara Cremoso", tipo: "Esmalte", acabamento: "Cremoso", cor: "Rosa antigo", imagem: "Beleza Rara Cremoso.jpg" },
  { codigo: "P006", nome: "Base Bomba", tipo: "Base", acabamento: "Fortalecedora", cor: "Incolor", imagem: "Base Bomba.jpg" },
  { codigo: "P007", nome: "Base Crescimento", tipo: "Base", acabamento: "Tratamento", cor: "Incolor", imagem: "Base Crescimento.jpg" },
  { codigo: "P008", nome: "Base Endurecedoura", tipo: "Base", acabamento: "Endurecedoura", cor: "Incolor", imagem: "Base Endurecedoura.jpg" },
  { codigo: "P009", nome: "Base fosca", tipo: "Base", acabamento: "Fosca", cor: "Translúcida", imagem: "Base fosca.jpg" },
  { codigo: "P010", nome: "Base Revitalizante", tipo: "Base", acabamento: "Revitalizante", cor: "Incolor", imagem: "Base Revitalizante.jpg" }
];

const container = document.getElementById("catalogo");

produtos.forEach(produto => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img">
    <h2>${produto.nome}</h2>
    <p><strong>Tipo:</strong> ${produto.tipo}</p>
    <p><strong>Acabamento:</strong> ${produto.acabamento}</p>
    <p><strong>Cor:</strong> ${produto.cor}</p>
  `;

  container.appendChild(card);
});
