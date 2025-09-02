document.addEventListener('DOMContentLoaded', function () {
  const chatBox = document.getElementById('chat-box');
  const messageInput = document.getElementById('message-input');
  const sendBtn = document.getElementById('send-btn');

  sendBtn.addEventListener('click', sendMessage);
  messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const text = messageInput.value.trim();
    if (text === '') return;

    appendMessage(text, 'client');
    messageInput.value = '';

    setTimeout(() => {
      const reply = getSellerResponse(text);
      appendMessage(reply, 'seller');
    }, 1000);
  }

  function appendMessage(text, sender) {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function getSellerResponse(userMsg) {
    const msg = userMsg.toLowerCase();

    // Cumprimentos
    if (msg.includes('olá') || msg.includes('ola') || msg.includes('oi') || msg.includes('opa') || 
        msg.includes('bom dia') || msg.includes('boa tarde') || msg.includes('boa noite') || 
        msg.includes('saudações') || msg.includes('eae') || msg.includes('salve')) {
      return 'Olá, a equipe Play4You agradece seu contato! Como podemos ajudar?';
    }

    // Pagamento
    if (msg.includes('pagamento') || msg.includes('pagar') || msg.includes('pix') || msg.includes('cartão') || 
        msg.includes('boleto') || msg.includes('credito') || msg.includes('débito') || msg.includes('dinheiro') || 
        msg.includes('transferência') || msg.includes('parcelar') || msg.includes('dividir')) {
      return 'Aceitamos Pix, cartão de crédito/débito e até parcelamento em algumas compras!';
    }

    // Agradecimento
    if (msg.includes('obrigado') || msg.includes('obrigada') || msg.includes('valeu') || msg.includes('tmj') || 
        msg.includes('thanks') || msg.includes('agradeço') || msg.includes('grat') || msg.includes('vlw')) {
      return 'De nada! Estamos sempre à disposição 😃';
    }

    // Produto
    if (msg.includes('produto') || msg.includes('item') || msg.includes('estoque') || msg.includes('disponível') || 
        msg.includes('comprar') || msg.includes('adquirir') || msg.includes('oferta') || msg.includes('preço') ||
        msg.includes('quanto custa') || msg.includes('valor')) {
      return 'Sim, temos produtos disponíveis! Deseja que eu envie mais detalhes e valores?';
    }

    // Entrega
    if (msg.includes('entrega') || msg.includes('frete') || msg.includes('prazo') || msg.includes('envio') || 
        msg.includes('quando chega') || msg.includes('transportadora') || msg.includes('correio')) {
      return 'Realizamos entregas em até 3 dias úteis após a confirmação do pagamento 🚚';
    }

    // Contato humano
    if (msg.includes('atendente') || msg.includes('humano') || msg.includes('pessoa') || msg.includes('suporte') ||
        msg.includes('ajuda real') || msg.includes('falar com alguém') || msg.includes('representante')) {
      return 'Para atendimento humanizado, mande uma mensagem no email contato@play4you.com.br ou no WhatsApp (31) 99683-5249 📞';
    }

    // Caso nenhuma palavra conhecida seja encontrada
    return 'Infelizmente esse é um chat com ajudas básicas. Para atendimento humanizado, mande uma mensagem no email contato@play4you.com.br ou mande mensagem para (31) 99683-5249.';
  }
});
