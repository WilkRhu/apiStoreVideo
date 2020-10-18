<h1>Api Store Video</h1>
<hr>
<p>Api Rest para locação de vídeos/filmes criada com NodeJs com endpoins de cadastro de vídeos (CRUD) e marcação de
    locação com listagem de filmes em atraso de devolução de filmes.</p>

<i><b>Summary</b></i>
<ul>
    <li><a href="#feature">Features</a></li>
    <li><a href="#arq">Arquitetura</a></li>
    <li><a href="#amb">Configurando o ambiente e subindo a aplicação</a></li>
    <li><a href="#pcus">Pacotes Usados</a></li>
    <li><a href="#end">EndPoints</a></li>
    <li><a href="#func">Funções Logicas</a></li>
</ul>
<hr>
<h2><a name="feature">Features</a></h2>
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
<h2 name="arq"> Arquitetura </h2>
<hr>
<b>Banco de dados</b>
<p>
Foi usado o banco de dados Sqlite tanto para a produção
quanto para os testes.
</p>
<h2><a name="amb">Configurando o ambiente e rodando a aplicação</a></h2>
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
<h2>Teste</h2>
Como informado foi ultilizado o jest para os tests unitário e de integração.
Para rodar os testes local será necessário criar um arquivo com o nome de <code>envDatabase</code> na raiz do projeto, contendo essas informações <br>
<code>
const test = {
  dialect: "sqlite",
  storage: "config/database/testes/testes.sqlite"
};
const prod = {
  dialect: "sqlite",
  storage: "config/database/database.sqlite"
};
module.exports = {
  test,
  prod
}
</code>
<hr>

<h2><a  name="pcus">Pacotes Usados</a></h2>
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
<h2 name="end">EndPoints</h2>
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
<hr>
<h2>Rotas Movies</h2>
<p>
    <b>GET /movie</b>
    <p>
        <b>Retorna a lista dos filmes cadastrados</b>
        <div>
            <img src="https://user-images.githubusercontent.com/29145254/96385130-45305b00-1168-11eb-9cb2-516dab44c3c7.PNG" />
        </div>
    <p>
</p>
<p>
    <b>GET /movie{id}</b>
    <p>
        <b>Retorna o filme cadastrado passando a id como parâmetro</b>
        <div>
            <img src="https://user-images.githubusercontent.com/29145254/96385319-7fe6c300-1169-11eb-936f-c5e5a782124e.PNG" />
        </div>
    <p>
</p>

<p>
    <b>POST /movie</b>
    <p>
        <b>Cadastra o movie passando essas informações</b>
        <div>
            <img src="https://user-images.githubusercontent.com/29145254/96385386-e370f080-1169-11eb-98e1-1e94d296d49e.PNG" />
        </div>
        <b>Deve retornar essas informações</b>
        <div>
            <img src="https://user-images.githubusercontent.com/29145254/96385414-2a5ee600-116a-11eb-9e38-6720626eb7e7.PNG" />
        </div>
    <p>
</p>
<p>
    <b>PUT /movie/{id}</b>
    <p>
        <b>Update dos filmes</b>
        <span>Obs: nessa rota você pode passar qualquer um
        dos campos que queira atualizar</span>
        <div>
            <img src="https://user-images.githubusercontent.com/29145254/96385635-883ffd80-116b-11eb-9642-35a94b5ad485.PNG" />
        </div>
        <b>Deve retornar essas informações</b>
        <div>
            <img src="https://user-images.githubusercontent.com/29145254/96385646-9db52780-116b-11eb-9c14-2785f3d74f58.PNG" />
        </div>
    <p>
</p>

<p>
    <b>DELETE /movie/{id}</b>
    <p>
        <b>Deletar um filme passando o {id}</b>
        <div>
            <img src="https://user-images.githubusercontent.com/29145254/96385796-92163080-116c-11eb-85ea-22a45191f0b4.PNG" />
        </div>
        <b>Deve retornar essas informações</b>
        <div>
            <img src="https://user-images.githubusercontent.com/29145254/96385797-93475d80-116c-11eb-92a4-31143aca8760.PNG" />
        </div>
    <p>
</p>
<hr>
<h2>Rotas Rental</h2>

<p>
    <b>POST /rental</b>
    <p>
        <b>Fazer um pedido de locação</b>
        <div>
            <img src="https://user-images.githubusercontent.com/29145254/96386451-75c8c280-1171-11eb-87fb-ae66d4ada6ca.PNG" />
        </div>
        <b>Deve retornar essas informações</b>
        <div>
            <img src="https://user-images.githubusercontent.com/29145254/96386073-7f9cf680-116e-11eb-98e2-d0994386cdc4.PNG" />
        </div>
    <p>
</p>

<p>
    <b>GET /rental</b>
    <p>
        <b>Retorna a lista de todas as locações criadas</b>
        <div>
        <b>Deve retornar essas informações</b>
            <img src="https://user-images.githubusercontent.com/29145254/96386449-74979580-1171-11eb-839e-fc5c1467397b.PNG" />
        </div>
    <p>
</p>

<p>
    <b>GET /rental/expire</b>
    <p>
        <b>Retorna a lista de todas as locações com a data de inpiração atrasada</b>
        <div>
        <b>Deve retornar essas informações</b>
            <img src="https://user-images.githubusercontent.com/29145254/96386068-7d3a9c80-116e-11eb-8dc6-a76b6f128e07.PNG" />
        </div>
    <p>
</p>

<p>
    <b>PUT /rental/devolve</b>
    <p>
        <b>Rota usada para devolver a locação passando o id com corpo da requisição</b>
        <b>Dessa forma</b>
        <div>
        <span>Caso a locação esteja em atraso retorna essa informação</span>
        </div>
            <img src="https://user-images.githubusercontent.com/29145254/96386453-76615900-1171-11eb-902e-9cbf442be882.PNG" />
        </div>
        <span>Caso a locação NÃO esteja em atraso retorna essa informação</span>
        </div>
            <img src="https://user-images.githubusercontent.com/29145254/96388537-e2e35480-117f-11eb-802a-150a97959bed.PNG" />
        </div>
    <p>
</p>
<hr>
<h2><a name="func">Sobre as funções de logica</a></h2>
<p>
Crie na forma de função logica arquivo dentro da pasta api/rental/utils/logicFunction.js, esse arquivo é responsável pelo acoplamento das funções que são necessárias para :
</p>
<b>Funções</b>
<br>
<b>deadLineReturn</b>
<p>
Verifica a quantidade de filmes disponíveis, caso o numero de locação seja maior que a quantidade disponivel retorna um erro, caso esteja tudo ok elacria uma data de previsão de entrega em formato string para ser salva no banco
</p>
<b>amountFunction</b>
<p>
Verifica a quantidade de filmes disponíveis, caso o numero de locação seja maior que a quantidade disponivel retorna um erro, porem essa função subtrai a quantidade no banco de dados, ou seja caso tenha 10 ele queira fazer a locação de 2 no banco ele muda o valor de 10 para 8;
</p>
<b>amountForRentalFunction</b>
<p>
Retorna a quantidade de dias para devolver o filme, se o usuário locar de 1 retorna 1 caso 2 a 5 retorna 3 dias, caso 5 a 9 filmes ela retorna 5 dias caso  10 ou mais filmes ele retorna 10 dias
</p>
<b>expiresFunction</b>
<p>
Essa função é responsável para verificar o banco de dados e retornar as locações que estão em atraso, caso não tenha ele retorna uma mensagem
</p>
<b>expiresOneFunction</b>
<p>
Verifica se a locação esta ou não atrasada porem só lê uma entidade, é usada na rota put para retornar uma mensagem informando se a devolução está ou não em atraso.
</p>
