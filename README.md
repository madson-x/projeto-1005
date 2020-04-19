# projeto-1005
Trabalho apresentado a disciplina de Tópicos especiais em SI do curso de Sistemas de Informação da Puc Minas

Ojetivo: O trabalho é para ser apresentado na disciplina como parte do cronograma de atividades. No decorrer da disciplina é apresentado as técnidas de desenvolvimento web usando o Progressive Web App ou PWA que por definição abordada na disciplina são páginas web (ou sites) tecnicamente regulares, mas podem aparecer ao usuário como aplicativos tradicionais ou aplicativos móveis (nativos). Este novo tipo de aplicativo tenta combinar os recursos oferecidos pela maioria dos navegadores modernos com os benefícios da experiência móvel. No trabalho é soliciato que seja desenvovido um PWA de um site com implementação de todos as estruturas e serviços necessários para que o PWA seja execuado.

Escopo do projeto: O tema da aplicação será livre. Em outras palavras, você poderá implementar uma PWA com qualquer funcionalidade, desde que seja de fato uma PWA, isto é, que atenda aos seguintes requisitos:

Conter pelo menos duas páginas HTML, formatadas adequadamente para smartphones por meio da CSS. Não adianta fazer uma aplicação web de página única (SPA), ok? É necessário que sua página tenha pelo menos dois arquivos HTML e um arquivo CSS, para que possamos ter alguma navegação entre elas.
Usar armazenamento local de dados, por meio da API Web Storage ou da API IndexedDB, considerando:
Os dados armazenados devem ser específicos do usuário (determinados automaticamente ou informados por meio de um formulário). Não podem ser, portanto, dados do servidor ou dados automáticos da aplicação - tem que ser alguma coisa que o usuário informou na página da aplicação e que é diferente entre cada usuário.
Os dados armazenados devem ser usados em alguma funcionalidade da aplicação. Isso significa que não adianta pedir o preenchimento de um campo na primeira página e mostrar o valor armazenado na segunda. Tem que ser alguma coisa realmente útil, que ajude na construção do contéudo. Seja criativo aqui.
A aplicação deve possuir um manifesto que permita a instalação na tela inicial dos dispositivos dos usuários.
A aplicação deve possuir um service worker que.
Implemente corretamente a instalação e a ativação da aplicação.
Permita o funcionamento offline da aplicação.
Os requisitos podem parecer complexos ou trabalhosos, mas nada mais são do que a implementação daquilo que está comentado nos textos e vídeos desta unidade. Basta seguir o que é feito lá, que você conseguirá implementar a sua aplicação.

E se você não estiver conseguindo pensar no que a sua aplicação pode fazer, veja esse exemplo simples e interessante:

PWA de exemplo
A aplicação TENHO QUE COMPRAR registra aquelas coisas que você percebe que tem que comprar alguma hora, mas que nunca se lembra quando está no supermercado ou na farmácia.

Assim, nada melhor do que ter um espaço onde registrar os produtos que precisa levar para casa.

O cadastro dos produtos é bem simples, basta informar o nome do produto, a quantidade que precisa e a unidade desse produto (unidade, frasco, pacote, Kg, litro, etc.).

Após comprar o produto, basta marcá-lo como comprado na própria lista. E, quando achar que está na hora, você pode limpar de uma só vez todos os produtos já comprados.

E você pode variar essa aplicação para fazer muitas outras que usam a mesma estrutura. Veja uma variação:

PWA de exemplo
A aplicação GET IT DONE serve para não deixar mais você esquecer daquilo que tem que fazer - e para quando tem que fazer.

Você pode cadastrar cada tarefa de forma simples e objetiva: basta informar o nome da tarefa e a data limite para quando ela tem que ser realizada.

Quando a tarefa estiver concluída, basta você marcar o box da tarefa na lista da tela principal. E quando quiser, você pode apagar todas as tarefas já concluídas da lista, para que possa se concentrar naquelas que ainda estão pendentes. 

Esses exemplos mostram como você pode criar um exemplo simples, útil e em que pode experimentar todos os recursos de uma PWA.

Então, vamos lá? Só não se esqueça desses detalhes:

Você não pode usar nenhuma tecnologia extra, como os frameworks front-end. Eu sei que fazer uma PWA usando React ou Ionic é bem mais fácil e interessante. Mas eu preciso que você experimente criar os recursos na mão. É mais ou menos a mesma necessidade que os professores de matemática alegam, quando dizem que você não pode usar a calculadora na prova. Precisamos avaliar a sua capacidade de desenvolvimento(e não a do cara que criou o framework), mesmo que, neste momento, isso pareça muito frustrante. Na próxima atividade, você vai poder usá-los.
A criatividade e originalidade serão avaliadas. Em outras palavras, espera-se que a aplicação seja de fato criada você (e não copiada da Internet ou de outro aluno), bem como ofereça alguma funcionalidade relevante (por mais simples que seja).
O código fonte da aplicação deve ser entregue nesta tarefa, por meio de um arquivo compactado.
Além desse código da aplicação, deve ser entregue um relatório em PDF descrevendo a aplicação e como cada requisito listado acima foi atendido.
Preciso reforçar isso: A sua aplicação será avaliada por meio do relatório e testada por meio do código fonte. Assim, o relatório deve ter todas as informações sobre necessárias para ver como você implementou cada requisito. O que não estiver descrito no relatório, será considerado como não implementado. Eu gostaria muito que você fizesse um relatório com a seguinte estrutura:

Nome da aplicação e o seu próprio nome;
Descrição do que a aplicação faz, acompanhada de algumas telas (exatamente como eu fiz para as aplicações de exemplo acima);
Lista de arquivos (HTML, CSS, JS, etc.) com a descrição de cada um deles (por mais óbvia que seja);
Todos trechos de códigos que são responsáveis pelo armazenamento e recuperação de dados locais, acompanhados de explicações do que está sendo feito em cada trecho;
Código do manifesto da aplicação, com comentários sobre as condições que você previu para a instalação da aplicação;
Trecho do código do service worker responsável pela instalação e pela ativação, com explicações do que eles fazem;
Trecho do código do service worker responsável pelo funcionamento offline, com explicações sobre como os arquivos estão sendo armazenados e recuperados;
Orientações para instalação e execução da aplicação.
Esse relatório vai ficar um pouco longo, mas não será difícil elaborá-lo, pois será apenas uma explicação do que você implementou.

E você pode conversar à vontade com seus colegas sobre o seu trabalho e o deles, mas cada um tem que fazer o seu próprio, pois o trabalho é individual. O importante aqui é que você tenha uma experiência concreta de desenvolvimento de uma PWA, algo que vai contar bastante nas suas futuras oportunidades profissionais.

Sobre a correção
Este projeto também será corrigido na forma de avaliação por pares.  Seu trabalho será avaliado por 2 outros colegas e você terá que avaliar 2 trabalhos. Novamente, a avaliação será anônima.

As regras da correção são as mesmas da atividade passada, mas agora com um número menor de tarefas por aluno:

Você deverá avaliar o trabalho de dois colegas;
O período para avaliação por pares é de apenas uma semana;
A avaliação será feita por meio de uma rubrica (tabela de critérios e pontos), de tal forma a minimizar a subjetividade no processo;
Todo o processo será diretamente supervisionado por mim - tanto os trabalhos entregues quanto as avaliações feitas pelos pares;
A avaliação por pares vale pontos - quem não a fizer ou a fizer precariamente perderá esses pontos.


Projeto PWA proposto: 


Créditos: 
Madson Oliveira 
Graduando em Sistemas de Informação 
Pontifícia Universidade Católica de Minas Gerais 
Unidade São Gabriel
