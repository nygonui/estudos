# Conceitos:
1. Conceitos 
* Simples: Legível, para qualquer pessoa
* Cliente/Servidor: Requisição/Resposta
	Você pede e consequentemente recebe uma resposta
* Stateless:(Ele não guarda o estado) não guarda informações
	- Não existe relação entre conexões(um pedido pode recebeer outro pedido
	- Uma coisa não depende da outra (exemplo de jogar a moeda para cima)
	- Entretanto ele usa sessões(ex: cookies e storages) que guardam algumas informações
		no intuito de utiliza-la, ex é o login de um site, que para fazer o pedido da
		próxima página, precisa do usuário e senha.
		- Guardar a informação para ser enviada na próxima conexão.
* Extensível: 
	    - Através do cabeçalho, podemos fazer diversas trocas de informação entre o cliente-servidor,
		 conforme a necessidade
	    - Headers: informações para a comunicação
	    - Body: corpo do pedido ou da resposta

2. Cliente 
- Quem é o cliente: 
	- User agent (Browser, cURL)
	- Entidade que dá início à comunicação
- Pedidos - Ações do cliente - métodos http (GET,POST,PUT,DELETE)

3. Servidor
	- Se apresenta como uma máquina que é preparado para ouvir e processar
	- Vários servidores em um computador
	- Vários computadores para um servidor
	- Resposta: header - status code 
	     body

4 - Proxies = 
 . Representantes 
 . Fica entre o cliente e o servidor
 . Ajuda a fazer o transporte de dados
 . Diversas funções
   , Cache (prioriza certo pedido, e aumenta a velocidade da resposta)
   , Filtro (tipo um antivírus, ou controle parental)
   , Autenticação
   , Autorização















