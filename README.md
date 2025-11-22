🌩️ Formulário de Cadastro com Busca de CEP + Clima em Tempo Real
💙 Interface Neon • 🌎 ViaCEP API • ⛅ WeatherAPI • 🎨 CSS 

Este projeto consiste em um formulário moderno de cadastro que utiliza:

✔️ Busca automática de endereço pelo CEP (ViaCEP API)
✔️ Consulta de clima em tempo real pela cidade (WeatherAPI)
✔️ Interface com efeitos NEON em azul
✔️ Card central com imagem de fundo e transparência
✔️ Fundo animado (GIF)
✔️ Validação e salvamento local com LocalStorage

É uma aplicação leve, responsiva e totalmente em HTML + CSS + JavaScript puro, sem frameworks.

🚀 Funcionalidades
📌 1. Cadastro de Cliente

O usuário preenche:

Nome completo

E-mail

Telefone

CEP

Logradouro

Bairro

Cidade

Estado

Todos os dados são salvos no LocalStorage.

📌 2. Busca Automática de Endereço (ViaCEP)

Ao digitar o CEP e sair do campo, o sistema:

Limpa caracteres inválidos

Consulta https://viacep.com.br/ws/{cep}/json/

Preenche automaticamente:

Logradouro

Bairro

Cidade

Estado

📌 3. Clima em Tempo Real (WeatherAPI)

Após o cadastro, o sistema busca o clima da cidade do usuário:

Temperatura atual

Hora local

Cor dinâmica conforme temperatura

Azul → Frio

Verde → Agradável

Vermelho → Quente

🎨 Interface Neon Moderna

A interface utiliza:

✨ Card central com transparência
✨ Imagem de fundo personalizada
✨ Efeito NEON azul no card e nos textos
✨ Inputs mais visíveis e com foco iluminado
✨ Botão estilizado com efeito degradê

Tudo configurado no arquivo style.css.

🖼️ Prévia (Print)

Você pode adicionar aqui sua imagem depois:

![Preview do Projeto](caminho-da-imagem)

📂 Estrutura de Pastas
/projeto
│── index.html
│── style.css
│── tempo.js
│── raios.gif
│── Tempestade.jfif

🧠 Tecnologias Utilizadas
Tecnologia	Função
HTML5	Estrutura da página
CSS3	Estilização + Efeitos NEON
JavaScript	Lógica e integrações
ViaCEP API	Buscar endereço pelo CEP
WeatherAPI	Obter clima da cidade
LocalStorage	Salvar dados localmente
🔧 Como Rodar o Projeto

Baixe ou clone o repositório:

git clone https://github.com/seu-usuario/seu-projeto.git


Abra o arquivo:

index.html


Importante:
Você precisa inserir sua API Key da WeatherAPI no arquivo tempo.js:

const apiKey = "SUA_API_KEY_AQUI";

📡 APIs Utilizadas
🔹 ViaCEP

Sem necessidade de chave:

https://viacep.com.br/ws/{cep}/json/

🔹 WeatherAPI

Requer cadastro gratuito:

https://www.weatherapi.com/


Endpoint usado:

https://api.weatherapi.com/v1/current.json?key=API&q=CIDADE&lang=pt

🧪 Como Testar

Digite um CEP válido → o endereço será preenchido automaticamente

Preencha os demais campos

Clique em Cadastrar

O card de clima aparece com:

Nome da cidade

Temperatura

Hora local

✨ Melhorias Futuras (opcionais)

Enviar os dados para um Back-End

Criar um Dashboard de cadastros

Adicionar máscara nos inputs

Criar versão mobile totalmente adaptada

👨‍💻 Autor

Criado por Maicon Felipe Ramos
