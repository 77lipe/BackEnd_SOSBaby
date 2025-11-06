create database sosbaby;
use sosbaby;


create user 'sosbaby''@''%' identified BY '1234';
GRANT ALL privileges ON sosbaby.* TO 'sosbaby''@''%';
flush privileges;


select * from tbl_user;

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

create table tbl_user(
    id_user int auto_increment primary key not null,
    nome_user varchar(100) not null,
    email varchar(100) not null,
    senha varchar(100) not null,
    id_tipo int,
    
    constraint FK_TIPO_USER
    foreign key(id_tipo)
    references tbl_type_user(id_tipo)
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
    id_sangue int,
	
	constraint FK_SEXO_BEBE
    foreign key (id_sexo)
    references tbl_sexo(id_sexo),
    
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
    cidade varchar(100) not null,
    rua varchar(150) not null,
    bairro varchar(100) not null,
    numero varchar(10) not null,
    id_user int,
    
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

CREATE TABLE tbl_rotina_item (
    id_item INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    data_rotina DATE NOT NULL,
    hora TIME NOT NULL
);

create table tbl_rotina(
	id_rotina int auto_increment primary key not null,
    titulo varchar(100) not null,
    cor char(10) not null,
    id_user int,
    id_item_rotina int,
    
	constraint FK_ROTINA_USUARIO
    foreign key (id_user)
    references tbl_user(id_user),
    
    constraint FK_ITEM_ROTINA
    foreign key (id_item_rotina)
    references tbl_rotina_item(id_item)
);

create table tbl_calendario (
    id_calendario int auto_increment primary key,
    id_user int not null,
    titulo varchar(100) not null,
    descricao text(200),
    data_calendario date not null,
    hora_calendario time not null,
    cor char(10) not null,
    alarme_ativo boolean default false,
    
    CONSTRAINT FK_CALENDARIO_USER
    FOREIGN KEY (id_user)
    REFERENCES tbl_user(id_user)
);


create table tbl_categoria (
    id_categoria int auto_increment primary key,
    nome_categoria varchar(50) not null
);

create table tbl_subcategoria (
    id_subcategoria int auto_increment primary key,
    nome_subcategoria  varchar(50) not null
);

create table tbl_dica (
    id_dica int auto_increment primary key,
    titulo varchar(150) not null,
    conteudo text(100) not null,
    imagem varchar(255),
    id_categoria int not null,

    CONSTRAINT FK_DICA_CATEGORIA
    FOREIGN KEY (id_categoria)
    REFERENCES tbl_categoria(id_categoria)
);

create table tbl_dica_subcategoria (
	id_relacionamento int auto_increment primary key,
    id_dica int not null,
    id_subcategoria int not null,


    CONSTRAINT FK_CATEGORIA_SUB_CATEGORIA
	FOREIGN KEY (id_dica)
	REFERENCES tbl_dica(id_dica),

    CONSTRAINT FK_CATEGORIA_SUB_SUB
	FOREIGN KEY (id_subcategoria)
	REFERENCES tbl_subcategoria(id_subcategoria)
);

create table tbl_favorito (
    id_favorito int auto_increment primary key,
    id_user int not null,
    id_dica int not null,
    
    CONSTRAINT FK_FAVORITO_USER
	FOREIGN KEY (id_user) REFERENCES tbl_user(id_user)
	ON DELETE CASCADE,
        
    CONSTRAINT FK_FAVORITO_DICA
	FOREIGN KEY (id_dica) REFERENCES tbl_dica(id_dica)
	ON DELETE CASCADE,
        
    UNIQUE (id_user, id_dica) 
);

create table tbl_chat(
    id_chat int auto_increment primary key not null,
    nome_chat varchar(100) not null
);

create table tbl_messager(
    id_mensagem int auto_increment primary key not null,
    conteudo text(500) not null,
    id_chat int,
    id_user int,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    constraint FK_MENSAGEM_CHAT
    foreign key (id_chat)
    references tbl_chat(id_chat),

    constraint FK_MENSAGEM_USER
    foreign key (id_user)
    references tbl_user(id_user)
);

create table tbl_chat_message(
    id_chat_user int auto_increment primary key not null,
    id_chat int,
    id_mensagem int,

    constraint FK_CHAT_USER_CHAT
    foreign key (id_chat)
    references tbl_chat(id_chat),

    constraint FK_CHAT_USER_USER
    foreign key (id_mensagem)
    references tbl_messager(id_mensagem)
);