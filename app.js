function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão inseridos
    let section = document.getElementById("resultados-pesquisa")
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa){
      section.innerHTML = `<h3>Nenhuma informação na barra de pesquisa. Digite o nome de um continente, país que faz parte do continente americano ou estado brasileiro</h3>`
      return
    }

    if (campoPesquisa == " "){
      section.innerHTML = `Erro: <h3>Erro: Apenas espaço na barra de pesquisa. Digite o nome de um continente, país que faz parte do continente americano ou estado brasileiro</h3>`
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado da pesquisa e cria um elemento HTML para cada resultado
    for(let dado of dados){
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {
          resultados += `
          <div class="item-resultado">
          <h2><a target="_blank" href="#">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a target="_blank" href=${dado.link}>Saiba Mais</a>
          </div>`;
        }
        
    }
    if (!resultados){
      section.innerHTML = `<h3>Nenhum resultado encontrado. Digite o nome de um continente, país que faz parte do continente americano ou estado brasileiro</h3>`
      return
    }
    // Insere os resultados formatados na seção HTML
    section.innerHTML = resultados
  }

