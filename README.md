# Mundo América: Um Guia Interativo para Explorar o Continente

## Um projeto de Imersão Dev com Google Gemini
Este projeto web oferece uma plataforma para pesquisar e aprender sobre países da América, continentes do mundo e estados brasileiros. A aplicação permite que os usuários encontrem informações relevantes através de uma interface intuitiva de busca.

## Funcionalidades
* **Pesquisa:** Permite aos usuários pesquisar por palavras-chave relacionadas a países, continentes e estados.
* **Resultados Personalizados:** Retorna uma lista de resultados relevantes com base na pesquisa realizada.
* **Links Externos:** Cada resultado inclui um link para uma página externa com informações mais detalhadas.

## Tecnologias Utilizadas
* **HTML:** Estrutura básica das páginas.
* **CSS:** Estilização da interface do usuário.
* **JavaScript:** Lógica da aplicação, incluindo a função de pesquisa.
* **Vercel:** Plataforma de hospedagem para deployment do projeto.

## Como Funciona
1. **Interface do Usuário:** O usuário insere um termo de pesquisa em um campo específico.
2. **Processamento da Pesquisa:** A função JavaScript `pesquisar()` é acionada e realiza as seguintes etapas:
   * Captura o termo de pesquisa.
   * Itera sobre um conjunto de dados pré-definido.
   * Compara o termo de pesquisa com o título, descrição e tags de cada item.
   * Gera uma lista HTML com os resultados relevantes.
3. **Exibição dos Resultados:** A lista de resultados é exibida na página, permitindo que o usuário clique nos links para obter mais informações.

## Estrutura do Projeto
* **index.html:** Página principal da aplicação.
* **style.css:** Arquivo de estilo para customizar a aparência.
* **script.js:** Arquivo JavaScript com a lógica da aplicação.
