<h1>Api Store Video</h1>
<hr>
<p>Api Rest para locação de vídeos/filmes criada com NodeJs com endpoins de cadastro de vídeos (CRUD) e marcação de
    locação com listagem de filmes em atraso de devolução de filmes.</p>

<i><b>Summary</b></i>
<ul>
    <li><a href="">Features</a></li>
    <li><a href="">Arquitetura</a></li>
    <li><a href="">Configurando o ambiente e subindo a aplicação</a></li>
    <li><a href="">Pacotes Usados</a></li>
    <li><a href="">EndPoints</a></li>
</ul>
<hr>
<h2>Features</h2>
<span>
    A organização do código foi baseada no MVC porem ultilizado
    o melhor forma de desacoplamento das funcionalidades, visando a
    simplicidade na hora de encontar as suas respectivas funções.
</span>
<p>
    <b>ORM para integração com o banco de dados</b>
    Como ORM foi usado o Sequelize.
    Foi ponderado o Kenex(query builder) pelo o
    uso e melhor conpreenção da base de dados com
    query string, porem não o escolhi pois o gerenciamento
    mais completo do Sequelize nos deixa mas traquilo com a
    questão do gerenciamento da DB, ganhando assim mais performance
    na hora da criação.
</p>
<b>Preparado para testes</b>
<p>
    Foi usado jest como framework para realizar essa tarefa. Tanto para os unitários como para os de integração,
    Testando
    o aquivo de logica das funções responsáveis por faze a alocação, passando todas as rotas.
</p>
<b>CLI integration</b>
<p>
    Sequelize é uma mão na roda nesse contexto. migrações e seeders são feitos quase que sem nenhum problemas
</p>
<b>Linter</b>
<p>Para code styling foi usado <a href="https://eslint.org/">eslint</a>.</p>
<hr>
<h2> Arquitetura </h2>
<hr>
<b>Banco de dados</b>
<p>
Foi usado o banco de dados Sqlite tanto para a produção
quanto para os testes.
</p>
<h2>Configurando o ambiente e rodando a aplicação</h2>
<p>
Depois de criar um gitclone  é só ultilizar o gerenciandor de pacotes de sua preverência.
</p>
<code>npm install</code>
<br>
<code>yarn</code>
<p>
Dessa forma ele irá instalar os pacotes necessários para qua a plicação funcione normalmete.
</p>
<i>Obs: não é necessário fazer  qualquer tipo de instação do banco de dados o <a href="https://www.sqlite.org/index.html">Sqlite</a> cria um arquivo dentro do projeto ultilizando o sequelize-cli(Explicarei a seguir..)</i>
<b>Sequelize CLI</b>
<p>
Será necessário ter o sequelize-cli de forma global o como dependencia de desenvolvemento.
</p>
<code>npm install --save-dev sequelize-cli</code>
<p>
<a href="https://www.npmjs.com/package/sequelize-cli"><p>Mais informações aqui</p></a></p>
<hr>

<h2>Pacotes Usados</h2>
Em resumo...
<table class="table">
  <thead>
    <tr>
      <th scope="col">Nome do Pacote</th>
      <th scope="col">Finalidade</th>
      <th scope="col">Link Documentação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Jest</th>
      <td>Testes</td>
      <td><a href="https://jestjs.io/docs/en/getting-started">Link</a></td>
    </tr>
    <tr>
      <th scope="row">Eslint</th>
      <td> Irá olhar o seu código e vai te acusar os erros baseados na regra que você definir</td>
      <td><a href="https://eslint.org/">Link</a></td>
    </tr>
    <tr>
      <th scope="row">Prettier</th>
      <td>O Prettier é um code formatter livre (MIT) e de código aberto, que tem por finalidade "forçar" um padrão de código.</td>
      <td><a href="https://prettier.io/">Link</a></td>
    </tr>
    <tr>
      <th scope="row">@hapi/joi</th>
      <td>Joi: Esse pacote é usado para validar e retornar erros de validação de forma automatizada</td>
      <td><a href="https://hapi.dev/module/joi">Link</a></td>
    </tr>
    <tr>
      <th scope="row">Body-Parser</th>
      <td>O body-parser é um módulo capaz de converter o body da requisição para vários formatos. Um desses formatos é json</td>
      <td><a href="https://www.npmjs.com/package/body-parser">Link</a></td>
    </tr>
    <tr>
      <th scope="row">cors</th>
      <td>Cross-origin resource sharing (CORS ou compartilhamento de recursos de origem cruzada) é uma especificação de uma tecnologia de navegadores que define meios para um servidor permitir que seus recursos sejam acessados por uma página web de um domínio diferente</td>
      <td><a href="https://www.npmjs.com/package/cors">Link</a></td>
    </tr>
    <tr>
      <th scope="row">supertest</th>
      <td>Basicamente o Supertest é um módulo que forja requisições visando testar webservers em Node. js e verifica o retorno das mesmas para automatizar testes deste tipo de infraestrutura, principalmente web APIs</td>
      <td><a href="https://www.npmjs.com/package/supertest">Link</a></td>
    </tr>
    <tr>
      <th scope="row">Express.js</th>
      <td>Express.js é um framework para aplicações web para Node.js, lançado como software livre e de código aberto sob a Licença MIT...</td>
      <td><a href="https://www.npmjs.com/package/express">Link</a></td>
    </tr>
  </tbody>
</table>

<p>Obs:  esses são os principais pacotes que foram ultilizados na construção do projeto e serão istalados automaticamente a partir do comando <code>npm intall</code>
<hr>
<h2>EndPoints</h2>
<ul>
<li><code>GET /movie - listar todos os filmes</code></li>

<li><code>GET /movie/{id} - listar um filme por ID</code></li>

<li><code>POST /movie - criar um filme</code></li>

<li><code>PUT /movie - atualizar um filme</code></li>

<li><code>DELETE /movie - excluir um filme</code></li>

<li><code>GET /rental - listar todas as locações</code></li>

<li><code>GET /rental/expire - listar locações com a data de devolução vencida</code></li>

<li><code>POST /rental - locar um filme</code></li>

<li><code>PUT /rental/devolve - devolver um filme</code></li>
</ul>
<p>
    <b>GET /movie</b>
    <p>
        <b>Retorna a lista dos filmes cadastrados</b>
        <code>![getMoviesAll](https://user-images.githubusercontent.com/29145254/96385130-45305b00-1168-11eb-9cb2-516dab44c3c7.PNG)
        </code>
    <p>
</p>
