# projeto-Final-Web-Dev-Grupo-3

Visão geral  
Como projeto final da Disciplina WEB do SERRATEC, o desafio proposto é a criação de uma
aplicação “e-commerce”.  

Objetivos:  
1. Criar uma aplicação React que disponibilize produtos para que um usuário possa,
conforme navega pelo site, incluir os produtos desejados no Carrinho e no
momento que quiser, realizar a compra dos produtos selecionados.
Especificações  
Para a execução do projeto é necessário deixar as seguintes considerações e regras do que
tem que ser feito:

1. Tela de Login, solicitando:  
a. Email  
b. Senha  

2. Tela de Listagem de Produtos:  
a. Nesta tela deverá ser possível filtrar um produto pelo nome do mesmo.  
b. Não deverão ser exibidos os produtos sem quantidade em estoque.  

3. Tela de informação sobre um produto específico.  
a. Nesta tela, o produto será descrito por completo.  

4. Tela ou Modal para Carrinho:  
a. Qualquer produto poderá ser adicionado no carrinho.  
b. O usuário escolherá a quantidade e incluirá no carrinho.  
c. Opção para esvaziar o carrinho.  
d. O carrinho deve ser acessível de qualquer rota  

5. Caso o usuário queira comprar, o mesmo poderá acessar o carrinho onde irá
finalizar a compra.  

a. Por termos a limitação da API, ao finalizar a compra, deverá ser realizada
requisição para diminuir a quantidade de produtos logo após a finalização da
compra.  
b. Após os passos acima redirecionar para a tela de Pedidos realizados, onde
conterá uma listagem de todos os pedidos feitos por aquele usuário.  

2  
Extras:  
● Tela de Cadastro de Usuário, com os campos:  
    ○ Nome completo  
    ○ Email  
    ○ Senha  

● Permitir ver os produtos por categoria, utilizando rotas dinâmicas.  
● Dentro da tela de um produto específico será possível avaliar o produto
como gostei ou não gostei. Qualquer usuário que logar na aplicação, irá ver a
nota dada por outros usuários.  
● Ao finalizar a compra a mesma deverá ser registrada via API na rota de
pedidos.  
Regras:  
● Não será permitido utilizar Tailwindcss e Bootstrap.  
● Qualquer biblioteca de componentes pode ser utilizada.  
● Para gerenciamento de estados, apenas o Context API poderá ser utilizado. Libs
como Redux, Recoil, Zustand e etc. não podem.  
● TODOS os integrantes do grupo devem participar.  
● Não poderá ser utilizado Next nem outro framework parecido e as rotas devem ser
feitas utilizando React Router Dom conforme versão 6.  
● A entidade “Users”, deve conter no mínimo os seguintes campos:  
    ○ nome  
    ○ email  
    ○ senha  

● A entidade “Produto”, deve conter no mínimo os seguintes campos:  
    ○ nome  
    ○ preco  
    ○ quantidade  
    ○ descrição  
    ○ imgurl  
    ○ favoritos  

● A entidade “Pedidos”, deve conter no mínimo os seguintes campos:  
    ○ valortotal  
    ○ iduser  
    ○ itens  

#Créditos:  

Raynan Titoneli  
Douglas Mariano  
Bernardo Bonifácio  
Brayan Gazale  
Douglas Maia  
Natally Monteiro  

#MOCKUP:  

![mockup web dev grupo 3 drawio](https://github.com/tiktoneli/projeto-Final-Web-Dev-Grupo-3/assets/147010696/63d33d2e-8c8c-471e-8ed4-21498096d61d)
