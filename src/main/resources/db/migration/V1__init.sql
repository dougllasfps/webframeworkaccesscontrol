drop table if exists controleacesso.permissao ;
drop table if exists controleacesso.grupo ;
drop table if exists controleacesso.grupo_permissao ;
drop table if exists controleacesso.usuario ;

create table controleacesso.permissao(
  id serial not null primary key ,
  descricao varchar(50),
  label varchar(20)
);

drop table if exists controleacesso.grupo ;

create table controleacesso.grupo(
  id serial not null primary key ,
  label varchar(20) ,
  descricao varchar (30)
);

drop table if exists controleacesso.grupo_permissao ;

create table controleacesso.grupo_permissao(
  id serial not null primary key ,
  id_grupo int not null,
  id_permissao int not null
);

drop table if exists controleacesso.usuario;

create table controleacesso.usuario(
  id serial not null primary key ,
  login varchar(20),
  senha varchar (200),
  nome varchar (100),
  email varchar (100),
  hash_recupera_senha varchar (200)
);

drop table if exists controleacesso.usuario_grupo ;

create table controleacesso.usuario_grupo (
  id serial not null primary key ,
  id_grupo int not null,
  id_usuario int not null
);
--
-- alter table controleacesso.usuario_grupo
-- add constraint fk_usuario_grupo_grupo
-- foreign key (cd_grupo)
-- references controle_acesso.grupo (id);
--
-- alter table controle_acesso.usuario_grupo
-- add constraint fk_usuario_grupo_usuario
-- foreign key (cd_usuario)
-- references controle_acesso.usuario (id);
--
-- alter table controle_acesso.modulo_permissao
-- add constraint fk_modulo_perm_permissao
-- foreign key (cd_permissao)
-- references controle_acesso.permissao (id);
--
-- alter table controle_acesso.modulo_permissao
-- add constraint fk_modulo_perm_modulo
-- foreign key (cd_modulo)
-- references controle_acesso.modulo (id);
--
-- alter table controle_acesso.grupo
-- add constraint fk_grupo_modulo
-- foreign key (cd_modulo)
-- references controle_acesso.modulo (id);
--
-- alter table controle_acesso.grupo_permissao
-- add constraint fk_grupo_permissao_grupo
-- foreign key (cd_grupo)
-- references controle_acesso.grupo (id);
--
-- alter table controle_acesso.grupo_permissao
-- add constraint fk_grupo_permissao_permissao
-- foreign key (cd_permissao)
-- references controle_acesso.permissao (id);