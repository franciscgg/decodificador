function criptografarTexto(texto) {
    const substituicoes = {
        'e': 'egfhp',
        'i': 'idrf',
        'a': 'afr',
        'o': 'o',
        'u': 'unyhg'
    };

    let textoCriptografado = texto;
    for (let chave in substituicoes) {
        textoCriptografado = textoCriptografado.split(chave).join(substituicoes[chave]);
    }
  
    return {
        titulo: 'Texto Criptografado',
        texto: textoCriptografado
    };
}

function descriptografarTexto(textoCriptografado) {
    const reversoSubstituicoes = {
        'egfhp': 'e',
        'idrf': 'i',
        'afr': 'a',
        'ofuyt': 'o',
        'unyhg': 'u'
    };
    
    let textoDescriptografado = textoCriptografado;
    for (let chave in reversoSubstituicoes) {
        textoDescriptografado = textoDescriptografado.split(chave).join(reversoSubstituicoes[chave]);
    }
    return {
        titulo: 'Texto Descriptografado',
        texto: textoDescriptografado
    };
}

function criptografar() {
    const textoEntrada = document.getElementById('mensagem').value.trim(); 
    if (textoEntrada === '') { 
        exibirMensagemDeErro("Por favor, preencha o campo de texto.");
    } else if (/[A-Z]/.test(textoEntrada)) { 
        exibirMensagemDeErro("Apenas letras minúsculas podem ser criptografadas.");
    } else {
        const resultado = criptografarTexto(textoEntrada);
        exibirMensagem(resultado);
    }
}

function descriptografar() {
    const textoCriptografado = document.getElementById('mensagem').value.trim();
    if (textoCriptografado === '') { 
        exibirMensagemDeErro("Por favor, preencha o campo de texto.");
    } else if (!textoCriptografado.includes('egfhp') && !textoCriptografado.includes('idrf') && !textoCriptografado.includes('afr') && !textoCriptografado.includes('ofuyt') && !textoCriptografado.includes('unyhg')) { 
        exibirMensagemDeErroDescriptografar("Seu texto não está criptografado.");
    } else {
        const resultado = descriptografarTexto(textoCriptografado);
        exibirMensagem(resultado);
    }
}

function copiarTexto() {
    const resultado = document.querySelector('.texto_resposta').textContent;
    const modal = document.getElementById('modal');
    const textoCopiado = document.getElementById('texto-copiado');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    navigator.clipboard.writeText(resultado)
        .then(() => {
            modal.classList.add('mostrar_alert');
            textoCopiado.textContent = 'Texto copiado para a área de transferência!';    
        })
}

function fecharModal() {
    const modal = document.getElementById('modal');
    const textarea = document.getElementById('mensagem');
    
    modal.classList.remove('mostrar_alert');
    textarea.value = ''; 
}

function exibirMensagem(resultado) {
    document.getElementById('mostrar_resposta').style.height = '100%';
    document.getElementById('mostrar_resposta').style.justifyContent = 'space-between';
    const mensagemSection = document.querySelector('.mostrar_resposta');
    mensagemSection.innerHTML = `
        <textarea id="texto_resposta" class="texto_resposta" rows="7" readonly>${resultado.texto}</textarea>
        <div class="btn">                
            <a onclick="copiarTexto()">Copiar</a>
        </div>
        <div id="modal" class="modal">
            <div class="x__fechar">
                <span class="close-button" onclick="fecharModal()">&times;</span>
            </div>
            <h2 class="msg_copy"> Texto copiado para a área de transferência</h2>
        </div>`;
}

function exibirMensagemDeErro(mensagem) {
    const secaoResposta = document.getElementById('mostrar_resposta');
    const titulo = secaoResposta.querySelector('h2');
    const paragrafo = secaoResposta.querySelector('p');
    const imagem = secaoResposta.querySelector('img');

    titulo.textContent = "Pepinha não encontrou nenhuma mensagem";
    paragrafo.textContent = mensagem;
    imagem.src = "Images/pigpig.png"; 

    
    setTimeout(() => {
        titulo.textContent = "Pepinha não encontrou nenhuma mensagem";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
        imagem.src = "Images/pepinhalupa.png"; 
    }, 4000); 
}

function exibirMensagemDeErroDescriptografar(mensagem) {
    const secaoResposta = document.getElementById('mostrar_resposta');
    const titulo = secaoResposta.querySelector('h2');
    const paragrafo = secaoResposta.querySelector('p');
    const imagem = secaoResposta.querySelector('img');

    titulo.textContent = "Pepinha encontrou um erro";
    paragrafo.textContent = mensagem;
    imagem.src = "Images/pepinhalupabrava.png"; 

    setTimeout(() => {
        titulo.textContent = "Pepinha não encontrou nenhuma mensagem";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
        imagem.src = "Images/pepinhalupa.png"; 
    }, 4000); 
}

document.addEventListener("DOMContentLoaded", function() {
    const imagem = document.querySelector('.tamanho_logo');
    imagem.addEventListener("click", function() {
        location.reload(); 
    });
});