create database sosbaby;
use sosbaby;

create database sosbaby;
use sosbaby;


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

create table tbl_especialidade(
      id_especialidade int auto_increment primary key not null,
      especialidade varchar(100)
);

create table tbl_type_messager(
    id_tipo_mensagem int auto_increment primary key not null,
    tipo_mensagem varchar(50)
);

create table tbl_status_messager(
    id_status int auto_increment primary key not null,
    status_messagem varchar(50)
);

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
    references tbl_type_messager(id_tipo_mensagem),

    constraint FK_STATUS_MESSAGEM
    foreign key (id_status)
    references tbl_status_messager(id_status)
);

create table tbl_chat(
    id_chat int auto_increment primary key not null,
    id_mensagem int,
    id_user int,

    constraint FK_CHAT_MENSAGEM
    foreign key (id_mensagem)
    references tbl_messager(id_mensagem),

    constraint FK_CHAT_USER
    foreign key (id_user)
    references tbl_user(id_user)
);


create table tbl_cep(
	id_cep int auto_increment primary key not null,
    cep varchar(20) not null,
    logradouro varchar(100) not null,
    cidade varchar(50) not null,
    uf varchar (2) not null,
    id_responsavel int
    
);
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
    id_cep int,
    
    constraint FK_CEP_RESPONSAVEL
    foreign key (id_cep)
    references tbl_cep(id_cep),
    
	constraint FK_RESPONSAVEL_SEX
    foreign key (id_sexo)
    references tbl_sexo(id_sexo),

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
    id_sangue int,
	
	constraint FK_SEXO_BEBE
    foreign key (id_sexo)
    references tbl_sexo(id_sexo),
    
   	constraint FK_CEP_BEBE
    foreign key (id_cep)
    references tbl_cep(id_cep),
    
	constraint FK_SANGUE_RESPONSAVEL
    foreign key (id_sangue)
    references tbl_sangue(id_sangue)
);

create table tbl_responsavel_bebe (
    id_bebe_responsavel int auto_increment primary key not null,
    id_bebe int,
    id_responsavel int,

    constraint FK_BEBE
    foreign key(id_bebe)
    references tbl_bebe(id_bebe),

    constraint FK_RESPONSAVEL
    foreign key (id_responsavel)
    references tbl_responsavel(id_responsavel)

);

create table tbl_medico(
	id_medico int auto_increment primary key not null,
    nome varchar(60) not null,
    email varchar(100) not null,
    telefone varchar(20) not null,
    crm varchar(20) not null,
    cpf varchar(20) not null,
    foto text(200) not null,
    id_sexo int,
    id_user int,
    
    constraint FK_SEXO_MEDICO
    foreign key (id_sexo)
    references tbl_sexo(id_sexo),
    
	constraint FK_USUARIO_MEDICO
    foreign key (id_user)
    references tbl_user(id_user)
    
);

create table tbl_especialidade_medico(
	id int auto_increment primary key not null,
    id_medico int,
    id_especialidade int,
    
	constraint FK_MEDICO
    foreign key (id_medico)
    references tbl_medico(id_medico),
    
	constraint FK_ESPECIALIDADE_MEDICO
    foreign key (id_especialidade)
    references tbl_especialidade(id_especialidade)
);

create table tbl_clinica(
	id_clinica int auto_increment primary key not null,
    nome varchar(100) not null,
    cnpj varchar(20) not null,
    telefone varchar(20) not null,
    email varchar(100) not null,
    id_cep int,
    id_user int,
    
    constraint FK_CEP_CLINICA
    foreign key (id_cep)
    references tbl_cep(id_cep),
    
	constraint FK_USUARIO_CLINICA
    foreign key (id_user)
    references tbl_user(id_user)
);

create table tbl_especialidade_clinica (
	id int auto_increment primary key not null,
    id_clinica int,
    id_especialidade int,
    
    constraint FK_CLINICA
    foreign key (id_clinica)
    references tbl_clinica(id_clinica),
    
	constraint FK_ESPECIALIDADE_CLINICA
    foreign key (id_especialidade)
    references tbl_especialidade(id_especialidade)
);

create table tbl_rotina_base(
	id_rotina_base int auto_increment primary key not null,
    titulo varchar(100) not null,
    cor char(10) not null,
    data_rotina date not null,
    hora time not null,
    descricao text(200) not null
);


create table tbl_rotina(
	id_rotina int auto_increment primary key not null,
    titulo varchar(100) not null,
    cor char(10) not null,
    data_rotina date not null,
    id_user int,
    
	constraint FK_ROTINA_USUARIO
    foreign key (id_user)
    references tbl_user(id_user)
);

create table tbl_rotina_item (
    id_item INT AUTO_INCREMENT PRIMARY KEY,
    id_rotina INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    hora TIME NOT NULL,
	
	constraint FK_ITEM_ROTINA
    foreign key (id_rotina)
    references tbl_rotina( id_rotina)
);

