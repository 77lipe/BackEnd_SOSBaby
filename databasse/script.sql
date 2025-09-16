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

create table tbl_cep (
	id_cep int auto_increment primary key,
    cep varchar(45) not null,
    logradouro varchar(100) not null,
    cidade varchar(50) not null,
    uf varchar(2) not null,
    id_responsavel int,
    
    constraint FK_RESPONSAVEL_CEP
    foreign key (id_responsavel)
    references tbl_responsavel(id_responvael)
);



create table tbl_responsavel (
	id_responsavel int auto_increment primary key,
    email varchar(100) not null,
    senha varchar(100)not null,
    nome  varchar(100) not null,
    data_nascimento date NOT NULL,
    cpf varchar(15) not null,
    telefone varchar(45) not null,
	cep varchar(20) not null,
    id_sexo int,
    
	constraint FK_RESPONSAVEL_SEX
    foreign key (id_sexo)
    references tbl_sexo(id_sexo)
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
    observacao TEXT (100) not null,
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