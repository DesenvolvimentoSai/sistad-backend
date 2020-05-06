
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

## MODELOS 
sequelize-cli model:generate --name Login --attributes cpf:bigint,senhacript:string,token:string
sequelize-cli model:generate --name OM --attributes nome_om:string,sg_om:string,status:enum
sequelize-cli model:generate --name Quadro --attributes dsc_quadro:string
sequelize-cli model:generate --name Posto --attributes dsc_posto:string
sequelize-cli model:generate --name Turma --attributes fk_id_quadro:bigint,no_turma:string,dt_formacao_turma:date
sequelize-cli model:generate --name PessoaFisica --attributes fk_id_posto:bigint,fk_id_quadro:bigint,fk_id_om:bigint,fk_id_cfr:bigint,fk_id_perfil:bigint,fk_id_turma:bigint,fk_id_login:bigint,nome_pessoa:string,nome_guerra:string,nr_ident_aer:integer,dt_nascimento:date,nr_antiguidade:integer,nr_antig_sigpes:integer,vl_med_cfr:double,foto:BLOB
sequelize-cli model:generate --name LogAcoesSistema --attributes fk_id_pessoa:bigint,fk_id_perfil:bigint,acao:string,dt_ultimo_acesso:DATE
    yarn sequelize db:migrate