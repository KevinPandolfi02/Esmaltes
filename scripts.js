
const produtos = [
  { codigo: "P001", nome: "A Vez da Penélope", tipo: "Esmalte", acabamento: "Cremoso", cor: "Rosa claro romântico", imagem: "a-vez-da-penelope.jpg" },
  { codigo: "P002", nome: "Amor Perolado", tipo: "Esmalte", acabamento: "Perolado", cor: "Rosa claro cintilante", imagem: "amor-perolado.jpg" },
  { codigo: "P003", nome: "Bali Cremoso", tipo: "Esmalte", acabamento: "Cremoso", cor: "Rosa queimado", imagem: "bali-cremoso.jpg" },
  { codigo: "P004", nome: "Batida de Coco", tipo: "Esmalte", acabamento: "Cremoso", cor: "Branco leitoso", imagem: "batida-de-coco.jpg" },
  { codigo: "P005", nome: "Beleza Rara Cremoso", tipo: "Esmalte", acabamento: "Cremoso", cor: "Rosa antigo", imagem: "beleza-rara-cremoso.jpg" },
  { codigo: "P006", nome: "Base Bomba", tipo: "Base", acabamento: "Fortalecedora", cor: "Incolor", imagem: "base-bomba.jpg" },
  { codigo: "P007", nome: "Base Crescimento", tipo: "Base", acabamento: "Tratamento", cor: "Incolor", imagem: "base-crescimento.jpg" },
  { codigo: "P008", nome: "Base Endurecedora", tipo: "Base", acabamento: "Endurecedora", cor: "Incolor", imagem: "base-endurecedora.jpg" },
  { codigo: "P009", nome: "Base Fosca", tipo: "Base", acabamento: "Fosca", cor: "Translúcida", imagem: "base-fosca.jpg" },
  { codigo: "P010", nome: "Base Revitalizante", tipo: "Base", acabamento: "Revitalizante", cor: "Incolor", imagem: "base-revitalizante.jpg" }
];

const container = document.getElementById("catalogo");

produtos.forEach(produto => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="imagens/${produto.imagem}" alt="${produto.nome}" class="produto-img">
    <h2>${produto.nome}</h2>
    <p><strong>Tipo:</strong> ${produto.tipo}</p>
    <p><strong>Acabamento:</strong> ${produto.acabamento}</p>
    <p><strong>Cor:</strong> ${produto.cor}</p>
  `;

  container.appendChild(card);
});
