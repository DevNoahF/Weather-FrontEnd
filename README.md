# ConsumingWeather FrontEnd ☀️

Uma aplicação moderna de previsão do tempo desenvolvida com **Angular 21**, que fornece informações detalhadas sobre o clima em qualquer cidade do Brasil.

## 📋 Descrição

Weather FrontEnd é uma interface web responsiva que consome uma API de previsão do tempo. A aplicação permite que usuários consultem previsões meteorológicas para cidades específicas em um período determinado de 7 dias, com uma interface intuitiva e visualmente atraente.


## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** (v20 ou superior)
- **npm** 11.9.0 ou superior


## 🚀 Instalação e Execução

### 1. Clone ou navegue para o projeto
```bash
cd Weather-FrontEnd
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento
```bash
npm start
```

A aplicação estará disponível em `http://localhost:4200`

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── core/
│   │   ├── config/          # Configurações da aplicação
│   │   ├── models/          # Interfaces e tipos de dados
│   │   └── services/        # Serviços (API, lógica compartilhada)
│   ├── features/
│   │   └── weather/
│   │       └── components/  # Componentes da feature de clima
│   ├── app.ts              # Componente raiz
│   ├── app.routes.ts       # Definição de rotas
│   └── app.routes.server.ts # Rotas para SSR
├── environments/            # Configurações por ambiente
├── main.ts                 # Entry point da aplicação
└── main.server.ts          # Entry point do servidor SSR

public/
└── assets/                 # Ícones e recursos estáticos
    ├── app-icons/
    ├── error-icons/
    ├── loading-icons/
    ├── obs-icons/
    └── weather-icons/
```

## 🏗️ Componentes Principais

### WeatherComponent
Componente principal que gerencia a lógica de busca e exibição do clima.
- Captura entrada do usuário (cidade, estado, país, datas)
- Gerencia estados de loading, sucesso e erro
- Renderiza cards de previsão

### ForecastCardComponent
Exibe as informações de previsão para um dia em um card:
- Condições meteorológicas
- Temperatura
- Umidade e pressão
- Ícone representativo

### LoadingCardComponent
Card de estado de carregamento com animação de esqueleto.

### ErrorCardComponent
Exibe mensagens de erro de forma clara e acessível.



## 🎨 Configuração de Ícones

Os ícones de clima são mapeados através do arquivo de configuração em:
- [src/app/core/config/weather-icons.config.ts](src/app/core/config/weather-icons.config.ts)

Os ícones estão localizados em:
- `public/assets/weather-icons/` - Ícones de clima
- `public/assets/error-icons/` - Ícones de erro
- `public/assets/loading-icons/` - Ícones de carregamento

## 🧪 Testes

Para executar os testes:

```bash
npm test
```

Os testes estão localizados em arquivos `.spec.ts` ao lado dos componentes e serviços.


Os arquivos compilados serão gerados na pasta `dist/`.

### Build com SSR

Para compilar com Server-Side Rendering:

```bash
npm run build
npm run serve:ssr:weatherAngular
```


## 🔑 Variáveis de Ambiente

O projeto possui arquivos de ambiente em `src/environments/`:
- `environment.ts` - Configurações de produção
- `environment.development.ts` - Configurações de desenvolvimento
---

**Desenvolvido com ❤️ by Noah Franco**
