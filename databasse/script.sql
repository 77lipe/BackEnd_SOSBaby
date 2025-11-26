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

CREATE TABLE tbl_convenio (
    id_convenio INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

create table tbl_responsavel (
	id_responsavel int auto_increment primary key,
    nome  varchar(100) not null,
    data_nascimento date NOT NULL,
    cpf varchar(15) not null,
    telefone varchar(45) not null,
	arquivo text(200) not null,
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
    imagem_certidao TEXT (100) not null,
    id_sexo int ,
    id_sangue int,
    id_user int,
	
	constraint FK_SEXO_BEBE
    foreign key (id_sexo)
    references tbl_sexo(id_sexo),
    
	constraint FK_SANGUE_RESPONSAVEL
    foreign key (id_sangue)
    references tbl_sangue(id_sangue),

    CONSTRAINT FK_USER_BEBE
    FOREIGN KEY (id_user)
    REFERENCES tbl_user(id_user);
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

CREATE TABLE tbl_rotina(
	id_rotina int auto_increment primary key not null,
    titulo varchar(100) not null,
    cor char(10) not null,
    id_user int,
    
	constraint FK_ROTINA_USUARIO
    foreign key (id_user)
    references tbl_user(id_user)
);

-- NOVA TABELA DE RELACIONAMENTO N:N
CREATE TABLE tbl_rotina_item_relacionamento (
    id_relacionamento INT AUTO_INCREMENT PRIMARY KEY,
    id_rotina INT NOT NULL,
    id_item INT NOT NULL,

    CONSTRAINT FK_REL_ROTINA
        FOREIGN KEY (id_rotina)
        REFERENCES tbl_rotina(id_rotina)
        ON DELETE CASCADE,

    CONSTRAINT FK_REL_ITEM
        FOREIGN KEY (id_item)
        REFERENCES tbl_rotina_item(id_item)
        ON DELETE CASCADE
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

///////médico
ALTER TABLE tbl_medico
ADD COLUMN id_clinica INT NULL,
ADD CONSTRAINT FK_CLINICA_MEDICO
    FOREIGN KEY (id_clinica)
    REFERENCES tbl_clinica(id_clinica)
    ON DELETE SET NULL
    ON UPDATE CASCADE;

//////RESPONSÁVEL
ALTER TABLE tbl_responsavel
ADD COLUMN id_convenio INT NULL,
ADD CONSTRAINT FK_CONVENIO_RESPONSAVEL
    FOREIGN KEY (id_convenio)
    REFERENCES tbl_convenio(id_convenio)
    ON DELETE SET NULL
    ON UPDATE CASCADE;

//////BEBÊ
ALTER TABLE tbl_bebe
ADD COLUMN id_convenio INT NULL,
ADD CONSTRAINT FK_CONVENIO_BEBE
    FOREIGN KEY (id_convenio)
    REFERENCES tbl_convenio(id_convenio)
    ON DELETE SET NULL
    ON UPDATE CASCADE;







VIEW
//FILTRO DE NOMES USUÁRIO
CREATE OR REPLACE VIEW vw_user_info AS
SELECT 
    u.id_user,
    u.nome_user,
    u.email,
    t.tipo AS tipo_usuario
FROM tbl_user u
INNER JOIN tbl_type_user t
    ON u.id_tipo = t.id_tipo
WHERE t.tipo <> 'ADMIN'; 

//FILTRO DE NOMES DO MÉDICO
CREATE OR REPLACE VIEW vw_medico_info AS
SELECT 
    m.id_medico,
    m.nome AS nome_medico,
    m.email,
    m.telefone,
    m.crm,
    s.sexo AS sexo_medico,
    u.nome_user AS usuario_vinculado,
    c.nome AS nome_clinica
FROM tbl_medico m
LEFT JOIN tbl_sexo s ON m.id_sexo = s.id_sexo
LEFT JOIN tbl_user u ON m.id_user = u.id_user
LEFT JOIN tbl_clinica c ON m.id_clinica = c.id_clinica
GROUP BY m.id_medico, m.nome, m.email, m.telefone, m.crm, s.sexo, u.nome_user, c.nome
ORDER BY m.id_medico DESC;


//FILTRO DE NOMES RESPONSÁVEIS
CREATE OR REPLACE VIEW vw_responsavel_info AS
SELECT 
    r.id_responsavel,
    r.nome AS nome_responsavel,
    r.data_nascimento,
    s.sexo AS sexo_responsavel,
    u.nome_user AS usuario_vinculado,
    c.nome AS convenio,
    COUNT(DISTINCT rb.id_bebe) AS total_bebes
FROM tbl_responsavel r
LEFT JOIN tbl_sexo s ON r.id_sexo = s.id_sexo
LEFT JOIN tbl_user u ON r.id_user = u.id_user
LEFT JOIN tbl_responsavel_bebe rb ON r.id_responsavel = rb.id_responsavel
LEFT JOIN tbl_convenio c ON r.id_convenio = c.id_convenio
GROUP BY r.id_responsavel, r.nome, r.data_nascimento, s.sexo, u.nome_user, c.nome
ORDER BY r.id_responsavel DESC;

//FILTRO DE NOMES BEBÊ
CREATE OR REPLACE VIEW vw_bebe_info AS
SELECT 
    b.id_bebe,
    b.nome AS nome_bebe,
    b.data_nascimento,
    b.peso,
    b.altura,
    s.sexo AS sexo_bebe,
    g.tipo_sanguineo,
    cv.nome AS convenio,
    GROUP_CONCAT(DISTINCT r.nome SEPARATOR ', ') AS responsaveis
FROM tbl_bebe b
LEFT JOIN tbl_sexo s ON b.id_sexo = s.id_sexo
LEFT JOIN tbl_sangue g ON b.id_sangue = g.id_sangue
LEFT JOIN tbl_convenio cv ON b.id_convenio = cv.id_convenio
LEFT JOIN tbl_responsavel_bebe rb ON b.id_bebe = rb.id_bebe
LEFT JOIN tbl_responsavel r ON rb.id_responsavel = r.id_responsavel
GROUP BY b.id_bebe, b.nome, b.data_nascimento, b.peso, b.altura, s.sexo, g.tipo_sanguineo, cv.nome
ORDER BY b.id_bebe DESC;




///
CREATE VIEW vw_relacionamentos_completos_usuario AS
SELECT 
    r.id_user,
    r.id_rotina,
    r.titulo AS titulo_rotina,
    r.cor,
    i.id_item,
    i.titulo AS titulo_item,
    i.descricao,
    i.data_rotina,
    i.hora
FROM tbl_rotina_item_relacionamento rel
INNER JOIN tbl_rotina r 
    ON rel.id_rotina = r.id_rotina
INNER JOIN tbl_rotina_item i
    ON rel.id_item = i.id_item;



////
CREATE OR REPLACE VIEW view_todas_rotinas_com_itens AS
SELECT 
    -- Dados da rotina
    r.id_rotina,
    r.titulo AS titulo_rotina,
    r.cor,
    r.id_user,

    -- Dados do item
    i.id_item,
    i.titulo AS titulo_item,
    i.descricao,
    i.data_rotina,
    i.hora

FROM tbl_rotina_item_relacionamento AS rel
INNER JOIN tbl_rotina AS r
    ON rel.id_rotina = r.id_rotina
INNER JOIN tbl_rotina_item AS i
    ON rel.id_item = i.id_item

ORDER BY 
    r.id_rotina ASC,
    i.hora ASC;





/////
CREATE OR REPLACE VIEW view_rotina_com_itens AS
SELECT 
    -- Dados da rotina
    r.id_rotina,
    r.titulo AS titulo_rotina,
    r.cor,
    r.id_user,

    -- Dados do item
    i.id_item,
    i.titulo AS titulo_item,
    i.descricao,
    i.data_rotina,
    i.hora

FROM tbl_rotina_item_relacionamento AS rel
INNER JOIN tbl_rotina AS r
    ON rel.id_rotina = r.id_rotina
INNER JOIN tbl_rotina_item AS i
    ON rel.id_item = i.id_item;


////////
CREATE VIEW vw_responsavel_completo AS
SELECT 
    r.id_responsavel,
    r.nome AS nome_responsavel,
    r.data_nascimento,
    r.cpf,
    r.telefone,
    r.arquivo,
    r.cep,

    -- Sexo
    s.id_sexo,
    s.sexo AS sexo,

    -- User
    u.id_user,
    u.nome_user,
    u.email,
    u.id_tipo,

    -- Tipo de usuário
    tu.tipo AS tipo_user,

    -- Convênios agrupados sem duplicados
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'id_convenio', SUBSTRING_INDEX(cv.item, '|', 1),
            'nome_convenio', SUBSTRING_INDEX(cv.item, '|', -1)
        )
    ) AS convenios

FROM tbl_responsavel r
LEFT JOIN tbl_sexo s 
    ON r.id_sexo = s.id_sexo
LEFT JOIN tbl_user u 
    ON r.id_user = u.id_user
LEFT JOIN tbl_type_user tu
    ON u.id_tipo = tu.id_tipo

-- SUBQUERY PARA REMOVER DUPLICADOS
LEFT JOIN (
    SELECT DISTINCT 
        CONCAT(c.id_convenio, '|', c.nome) AS item,
        uc.id_user
    FROM tbl_user_convenio uc
    LEFT JOIN tbl_convenio c
        ON uc.id_convenio = c.id_convenio
) AS cv
ON cv.id_user = r.id_user

GROUP BY 
    r.id_responsavel,
    r.nome,
    r.data_nascimento,
    r.cpf,
    r.telefone,
    r.arquivo,
    r.cep,
    s.id_sexo,
    s.sexo,
    u.id_user,
    u.nome_user,
    u.email,
    u.id_tipo,
    tu.tipo;