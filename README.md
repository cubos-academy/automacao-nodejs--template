# Projeto - Envio de Tarefas via WhatsApp

Vamos desenvolver um projeto em nodejs para enviar notificações no WhatsApp para lembrar sobre as tarefas programadas em uma planilha.

## Tarefas
- [ ] Ler a planilha com as tarefas
- [ ] Verificar Dia da semana e horário
- [ ] Enviar uma mensagem no WhatsApp avisando que é hora da tarefa

## 0 - Configurar o Projeto

### 1. Requisitos
- Node e NPM instalados

### 2. Clone a Base do Projeto

```bash
# Clone o template do projeto
git clone <URL>

# Entre na pasta do template do projeto
cd <pasta>

# Instale as dependências do projeto
npm i
```
### 3. Bibliotecas do Projeto

- [csv-parser](https://www.npmjs.com/package/csv-parser): Converte CSV para JSON.
- [fs](https://nodejs.org/api/fs.html): Lê os arquivos CSV (módulo nativo do Node.js).
- [node-schedule](https://www.npmjs.com/package/node-schedule): Agenda os envios das mensagens.
- [twilio](https://www.npmjs.com/package/twilio): Envia as mensagens pelo WhatsApp.
- [date-fns](https://www.npmjs.com/package/date-fns): Manipula e formata datas.
- [dotenv](https://www.npmjs.com/package/dotenv): Carrega variáveis de ambiente a partir do arquivo `.env`.
- [zod](https://www.npmjs.com/package/zod): Valida schemas (no projeto, valida as chaves do arquivo `.env`).

## 1 - Gerar Chaves TWILIO

As chaves devem ser colocadas no arquivo `.env` na raiz do projeto. Existe um arquivo de exemplo chamado `.env.example`.

1. **Cadastre-se**
   - Acesse o [site do Twilio](https://twilio.com/) e crie uma conta.

2. **Acesse o Painel**
   - Acesse o [painel do Twilio](https://console.twilio.com/).

3. **Obter o `TWILIO_ACCOUNT_SID`**
   - No menu superior direito, clique em **"Admin"**.
   - No menu suspenso, clique em **"Account Management"**.
   - Em **"Manage Account"**, clique em **"General Settings"**.
   - Procure por **"Account SID"** e copie o valor.

4. **Obter o `TWILIO_AUTH_TOKEN`**
   - No menu superior direito, clique em **"Admin"**.
   - No menu suspenso, clique em **"Account Management"**.
   - Em **"Keys & Credentials"**, clique em **"API Keys & Tokens"**.
   - Clique em **"Create API Key"**.
   - Adicione um nome para sua chave em **"Friendly Name"**.
   - Em **"Region"**, deixe o padrão **"United States - Default"**.
   - Em **"Key Type"**, deixe o padrão **"Standard"**.
   - Clique no botão **"Create"** e copie o `Auth Token` gerado.

5. **Obter o `TWILIO_WHATSAPP_NUMBER`**
   - Na aba **"Develop"**, clique em **"Messaging"** > **"Try it Out"** > **"Send a WhatsApp Message"**.
   - Abaixo de **"Send a WhatsApp Message"**, você verá um número de WhatsApp fornecido pelo Twilio.

6. **Aprovar o Número para Receber Mensagens**
   - Na aba **"Develop"**, clique em **"Messaging"** > **"Try it Out"** > **"Send a WhatsApp Message"**.
   - Leia o QR Code com o WhatsApp ou clique em **"Open WhatsApp"** para aprovar o número.
