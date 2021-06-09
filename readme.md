# Micro-serviço com Node.js

- Utilizando Kafta - Node;

## Aplicações

- API principal (Station);
- Geração de certficado;

## Fluxo de aplicação

-  API Principal encia uma mensagem pro serviço de certificado para gerar o certificado;
-  Micro-serviço de certificado devolve uma resposta (síncronia/assíncrona);

Se consseguir síncrona/assíncrona;

- Receber uma resposta assíncrona de quando o email com certificado foi enviado;

## O que sabemos?

- REST (Latência);
- Redis / RabbitMQ / **Kafta**;

- Nubank, Uber, Paypal, Netflix