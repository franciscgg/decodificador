<h1>Alura Challenge Decodificador</h1>
<h2>Tela Incial</h2>

![image](https://github.com/franciscgg/decodificador/assets/113110382/51f8bfe5-4f78-45c1-b35b-7e7387a31335)

<h2>Verificação se o campo está vazio,retorna "Por favor, preencha o campo de texto."</h2>

![image](https://github.com/franciscgg/decodificador/assets/113110382/db8bae78-4402-4934-bcd4-533477f5a9e6)

<h2>Verificação se o texto está criptografado,retorna "Seu texto não está criptografado."</h2>

![image](https://github.com/franciscgg/decodificador/assets/113110382/52edb2b0-2fa5-44af-9661-3943a9544706)

<h2>Verificação de letra maiúscula, retorna "Por favor, digite um texto apenas com letras minúsculas."</h2>

![image](https://github.com/franciscgg/decodificador/assets/113110382/0ea947de-03e0-448f-b3f7-206bc842d8c5)

<h2>Campo que aparece o texto criptografado, retorna o texto criptografado "pegfhppidrfnhafr".</h2>

![image](https://github.com/franciscgg/decodificador/assets/113110382/7b1cbcd0-e16d-4110-8460-f29ccc1baae9)

<h2>Botão de copiar, retorna "Texto copiado para a área de transferência".</h2>

![image](https://github.com/franciscgg/decodificador/assets/113110382/1e572327-c144-44d2-a057-4f6c70d20760)

<h2>Descriptografando o texto, retorna no campo a descriptografia "pepinha".</h2>

![image](https://github.com/franciscgg/decodificador/assets/113110382/1718afce-d4fa-4f70-996a-0e3b48dd5af6)


<h2> 📝Sobre</h2>
<h1>Decodificador de Texto em JavaScript</h1>

Este código em JavaScript implementa um decodificador de texto que pode criptografar e descriptografar mensagens usando um conjunto específico de substituições. Aqui estão as principais partes do código:

### Funções de Criptografia e Descriptografia:

- `criptografarTexto(texto)`: Recebe uma string de texto como entrada e substitui cada caractere conforme definido no objeto `substituicoes`, retornando um objeto com o título "Texto Criptografado" e o texto criptografado.
- `descriptografarTexto(textoCriptografado)`: Recebe uma string criptografada como entrada e substitui as sequências de caracteres correspondentes às substituições inversas definidas no objeto `reversoSubstituicoes`, retornando um objeto com o título "Texto Descriptografado" e o texto descriptografado.

### Funções de Verificação de Entrada:

- `criptografar()`: Chamada quando o usuário tenta criptografar um texto. Verifica se o campo de entrada está vazio ou contém letras maiúsculas. Se não houver problemas, chama `criptografarTexto()` e exibe o resultado.
- `descriptografar()`: Chamada quando o usuário tenta descriptografar um texto. Verifica se o campo de entrada está vazio ou contém um texto não criptografado. Se não houver problemas, chama `descriptografarTexto()` e exibe o resultado.

### Outras Funções:

- `copiarTexto()`: Chamada quando o usuário clica no botão "Copiar". Copia o texto da área de resposta para a área de transferência do sistema.
- `fecharModal()`: Chamada para fechar o modal de feedback após a cópia do texto.
- `exibirMensagem()`, `exibirMensagemDeErro()`, `exibirMensagemDeErroDescriptografar()`, `exibirMensagemDeErroLetraMaiuscula()`: Funções para exibir mensagens de erro ou sucesso durante a operação.

### Event Listeners:

- `DOMContentLoaded`: Adiciona um ouvinte de evento ao logotipo para recarregar a página quando clicado.

O código também contém manipulação de DOM para interação com o usuário, como exibir mensagens de erro, exibir texto criptografado/descriptografado e lidar com a cópia do texto para a área de transferência. Além disso, inclui algumas imagens que são exibidas dependendo do tipo de erro ou sucesso na operação.


## 🚀Tecnologias
<div>
  <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40"/>
  <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40"/>
</div>

## 💼 Linkedin
### link: https://www.linkedin.com/in/francisco-helio/
