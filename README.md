# Calculadora de Antecipação de Parcelas

Aplicação web para estimar o valor da antecipação de parcelas de contratos consignados pelos sistemas Tabela Price e SAC.

## Funcionalidades

- Simulação pela Tabela Price e pela Tabela SAC;
- Cálculo para antecipar 1, 3, 5, 10 ou metade das parcelas restantes;
- Campo personalizado para definir a quantidade de parcelas;
- Estimativa de quantas parcelas podem ser antecipadas com um valor disponível;
- Texto formatado para copiar e enviar pelo WhatsApp;
- Layout adaptado para computador e celular.

## Como executar

Tenha o Node.js 20.9 ou superior instalado. No terminal, dentro da pasta do projeto, execute:

```bash
npm install
npm run dev
```

Depois, abra `http://localhost:3000` no navegador.

## Gerar a versão de produção

```bash
npm run build
npm start
```

## Tecnologias

- Next.js
- React
- TypeScript
- CSS

## Observação

Os resultados são estimativas. O valor oficial deve ser solicitado à instituição financeira responsável pelo contrato.
