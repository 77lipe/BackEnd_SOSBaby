create database sosbaby
use sosbaby

create table tbl_sexo (
	id_sexo int auto_increment primary key,
    sexo VARCHAR(12) not null
);

create table tbl_sangue (
	id_sangue int auto_increment primary key not null,
    tipo_sanguineo VARCHAR(4) not null
);

create table tbl_type_user(
    id_tipo int auto_increment primary key not null,
    tipo varchar(50)
);


create table tbl_type_messager(
    id_tipo_mensagem int auto_increment primary key not null,
    tipo_mensagem varchar(50)
);

create table tbl_status_messager(
    id_status int auto_increment primary key not null,
    status_messagem varchar(50)
);

create table tbl_cep (
	id_cep int auto_increment primary key not. null,
    cep varchar(45) not null,
    logradouro varchar(100) not null,
    cidade varchar(50) not null,
    uf varchar(2) not null,
    id_responsavel int,
    
    constraint FK_RESPONSAVEL_CEP
    foreign key (id_responsavel)
    references tbl_responsavel(id_responsavel)
);
id_re

create table tbl_user(
    id_user int auto_increment primary key not null,
    email varchar(100) not null,
    senha varchar(100) not null,
    id_tipo int,

    constraint FK_TIPO_USER
    foreign key(id_tipo)
    references tbl_type_user(id_tipo)
);

create table tbl_messager(
    id_mensagem int auto_increment primary key not null,
    conteudo text(500) not null,
    id_tipo_mensagem int,
    id_status int,

    constraint FK_TIPO_MENSAGEM
    foreign key (id_tipo_mensagem)
    references tbl_type_messager(id_tipo_mensagem)

    constraint FK_STATUS_MESSAGEM
    foreign key (id_status)
    references tbl_status_messager(id_status)
)

create table tbl_chat(
    id_chat int auto_increment primary key not null,
    id_mensagem int,
    id_user int,

    constraint FK_CHAT_MENSAGEM
    foreign key (id_mensagem)
    references tbl_messager(id_mensagem)

    constraint FK_CHAT_USER
    foreign key (id_user)
    references tbl_user(id_user)
)

create table tbl_responsavel (
	id_responsavel int auto_increment primary key,
    nome  varchar(100) not null,
    data_nascimento date NOT NULL,
    cpf varchar(15) not null,
    telefone varchar(45) not null,
	arquivo text(200) not null,
    cartao_medico varchar(45) not null,
    cep varchar(20) not null,
    id_sexo int,
    id_user int,
    
	constraint FK_RESPONSAVEL_SEX
    foreign key (id_sexo)
    references tbl_sexo(id_sexo)

    constraint FK_USUARIO_RESPONSAVEL
    foreign key (id_user)
    references tbl_user(id_user)
);


create table tbl_bebe (
	id_bebe int auto_increment primary key not null ,
    nome varchar(100) not null,
    data_nascimento date not null,
    peso decimal(2) not null,
    altura int not null,
    certidao_nascimento varchar(50) not null,
    cpf varchar (15),
    cartao_medico varchar(45)not null,
    imagem_certidao TEXT (100) not null,
    id_sexo int ,
    id_cep int,
    id_sangue int ,
    
	constraint FK_SEXO_BEBE
    foreign key (id_sexo)
    references tbl_sexo(id_sexo),
    
   	constraint FK_CEP_BEBE
    foreign key (id_cep)
    references tbl_cep(id_cep),
    
	constraint FK_SANGUE_RESPONSAVEL
    foreign key (id_sangue)
    references tbl_sangue(id_sangue)
)

create table tbl_responsavel_bebe (
    id_bebe_responsavel int auto_increment primary key not null,
    id_bebe int,
    id_responsavel int,

    constraint FK_BEBE
    foreign key(id_bebe)
    references tbl_bebe(id_bebe)

    constraint FK_RESPONSAVEL
    foreign key (id_responsavel)
    references tbl_responsavel(id_responsavel)

)