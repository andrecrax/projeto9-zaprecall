# <a href="https://projeto9-zaprecall-or1u99hf0-andrecrax.vercel.app/">⚡ZapRecall<a/>
  
- Seu segundo projeto usando React será a implementação de um app de *flashcards* chamado **Zap Recall**!
- *Flashcards* são cartões de contém uma pergunta/afirmação na sua frente e uma resposta atrás. É possível utilizá-los para treinar sua memória com as metodologias *Active Recall* e *Spaced Repetition.* A ideia é ler a pergunta ou afirmação e tentar lembrar da reposta. Ao se deparar com a mesma, dependendo do esforço necessário para responder ou não o *flashcard*, você fica consciente de quais conteúdos estão frescos na memória e quais não estão, então, pode praticar com frequência os conteúdos que não estão.
- Quando lembramos instantaneamente de um *flashcard*, tivemos um **"Zap!"**
- Conjuntos de *flashcards* são chamados de *decks.* Este app deverá possuir por padrão pelo menos um *deck* com 8 *flashcards*.

 ## <a href="https://www.figma.com/file/PNYkKkFBAE1jRctvHoh7ix/ZapRecall?node-id=0%3A1&t=gLG21prd0nOw5iHS-0">Layout<a>
 - Aplicar layout seguindo o Figma.
  ![image](https://user-images.githubusercontent.com/49844995/223201855-38b26c48-584c-42b8-9f3f-1343046bbd6d.png)

  
  ## Funções 
- Todos os *flashcards* devem aparecer na tela virados e indexados por números (ex: Pergunta 1, Pergunta 2), de modo a “esconder” o termo ou pergunta que ele contém.
- Ao clicar na setinha de “play” de um *flashcard*, a pergunta ou termo correspondente ao *flashcard* deve aparecer (não é necessária nenhuma animação).
- Para ver a resposta do *flashcard*, o usuário deve clicar no ícone de “virar” (o componente é o mesmo, apenas teve seu *layout* adaptado).
- Ao virar um *flashcard*...
- O usuário deve visualizar a resposta correta para a pergunta e os três botões (Não lembrei, Quase não lembrei ou Zap).
- Ao clicar em qualquer um dos botões, o *flashcard* deverá ser dado como respondido e terá seu status alterado para refletir a escolha do usuário:
- *Flashcard* incorreto (Não lembrei)
- *Flashcard* correto com esforço (Quase não lembrei)
- *Flashcard* correto imediatamente (Zap!)
- Depois de respondida, a pergunta deverá ficar fechada e seu texto tachado com a cor correta correspondente ao seu status e um ícone. Ela não poderá ser aberta novamente.
