
## PO (Persistent Object):
    Esse padrão é muito usado em conjunto com o framework de persistência ORM Hibernate. Representa apenas um objeto de persistência simples com atributos, métodos de recuperação e setagem, muito semelhante ao VO ou TO (Transfer Object), porém sem nenhuma referência a códigos de transação com o banco de dados.
## POJO (Plain Old Java Object):
    Em setembro de 2000, Martin Fowler, Rebecca Parsons e Josh MacKenzie cunharam o novo termo para designar um objeto sem grande valor dentro do modelo de classes de um projeto, an ordinary Java Object.
## BO (Business Object):
    Um objeto de negócios é um tipo de uma entidade inteligível sendo e agindo como um ator dentro da camada de negócio em uma arquitetura de n camadas orientado a objeto.
## DTO (Data Transfer Object):
    O próprio nome já diz muito: um objeto simples usado para transferir dados de um local a outro na aplicação, sem lógica de negócios em seus objetos e comumente associado à transferência de dados entre uma camada de visão (view layer) e outra de persistência dos dados (model layer). 
## VO (Value Object):
    Esse padrão é um pouco confuso. Segundo a Wikipédia, um Objeto de valor “é um pequeno objeto que representa uma entidade simples, cuja igualdade não é baseada em identidade: ou seja, dois objetos de valor são iguais quando têm o mesmo valor, não necessariamente sendo o mesmo objeto”.