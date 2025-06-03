# CodeConnect

Uma plataforma moderna para compartilhar e descobrir projetos de desenvolvimento, permitindo que desenvolvedores publiquem seus trabalhos com imagens, descrições e tags organizadas.

## 🌐 Demo Online

Acesse a aplicação em funcionamento: **[https://code-connect-js.vercel.app](https://code-connect-js.vercel.app)**

## 🚀 Funcionalidades

- **Upload de Imagens**: Interface intuitiva para carregar imagens dos projetos
- **Formulário de Publicação**: Campos para nome, descrição e tags do projeto
- **Sistema de Tags**: Organização de projetos através de categorias
- **Navegação Lateral**: Menu com acesso rápido às principais funcionalidades
- **Design Responsivo**: Interface adaptada para diferentes dispositivos

## 🎨 Design

O projeto utiliza um tema escuro moderno com:
- **Paleta de Cores**: 
  - Fundo principal: `#00090E`
  - Verde principal: `#81FE88` 
  - Cinza secundário: `#888888`
  - Containers: `#171D1F`
- **Tipografia**: Fonte "Prompt" do Google Fonts
- **Layout**: Design clean com foco na usabilidade

## 📁 Estrutura do Projeto

```
codeconnect/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── scripts.js          # Funcionalidades JavaScript
└── img/                # Imagens e ícones
    ├── Logo.svg
    ├── feed.svg
    ├── account_circle.svg
    ├── info.svg
    ├── logout.svg
    ├── upload.svg
    ├── trash.svg
    ├── arrow_forward2.svg
    ├── close.svg
    └── imagem1.png
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização com variáveis CSS e Flexbox
- **JavaScript**: Interatividade e funcionalidades dinâmicas
- **Google Fonts**: Tipografia "Prompt"

## 📋 Funcionalidades Implementadas

### Interface Principal
- Menu lateral com navegação
- Área de upload de imagens com preview
- Formulário para detalhes do projeto
- Sistema de tags dinâmico
- Botões de ação (Descartar/Publicar)

### Características Técnicas
- Layout responsivo com Flexbox
- Variáveis CSS para fácil manutenção
- Estrutura semântica HTML5
- Design system consistente

## 🎯 Como Usar

1. **Upload de Imagem**: Clique no botão "Carregar imagem" para selecionar uma imagem do seu projeto
2. **Preencher Dados**: Adicione o nome e descrição do projeto
3. **Adicionar Tags**: Categorize seu projeto com tags relevantes
4. **Publicar**: Clique em "Publicar" para compartilhar o projeto

## 🔧 Configuração

### Executar Localmente
1. Clone ou baixe os arquivos do projeto
2. Certifique-se de que todas as imagens estão na pasta `img/`
3. Abra o `index.html` em um navegador web
4. A aplicação estará pronta para uso

### Deploy
O projeto está hospedado na Vercel para fácil acesso e demonstração. Para fazer seu próprio deploy:

1. Faça fork/clone do repositório
2. Conecte com sua conta Vercel
3. Configure o deploy automático
4. Acesse sua URL personalizada

## 📱 Responsividade

O design foi pensado para funcionar bem em diferentes tamanhos de tela, com layout flexível que se adapta aos dispositivos.

## 🎨 Customização

Para personalizar o tema, edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --background-color: #00090E;
    --text-color: #E1E1E1;
    --primary-color: #81FE88;
    --secondary-color: #888888;
    /* ... outras variáveis */
}
```

## 👨‍💻 Autor

**Mauricio Grass de Bronstein**
