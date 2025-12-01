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
    
    
    
    
/////
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
    
    

//////
CREATE VIEW vw_relacionamentos_completos_usuario AS
SELECT 
    r.id_user,

    -- Dados da tabela rotina
    r.id_rotina,
    r.titulo AS titulo_rotina,
    r.cor,
    
    -- Dados da tabela item
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

    
    
    
    
///////////
SELECT * FROM tbl_responsavel;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM tbl_sangue
WHERE tipo_sanguineo = 't';

SET SQL_SAFE_UPDATES = 1;


use sosbaby;
ALTER TABLE tbl_bebe
DROP COLUMN cartao_medico;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE tbl_sangue;

SET FOREIGN_KEY_CHECKS = 1;

create table tbl_sangue (
	id_sangue int auto_increment primary key not null,
    tipo_sanguineo VARCHAR(4) not null
);

ALTER TABLE tbl_bebe
ADD COLUMN id_user INT;

ALTER TABLE tbl_bebe
ADD CONSTRAINT FK_USER_BEBE
FOREIGN KEY (id_user)
REFERENCES tbl_user(id_user);


SELECT 
    CONSTRAINT_NAME
FROM 
    information_schema.KEY_COLUMN_USAGE
WHERE 
    TABLE_NAME = 'tbl_bebe'
    AND COLUMN_NAME = 'id_convenio';

ALTER TABLE tbl_bebe
DROP FOREIGN KEY FK_CONVENIO_BEBE;

ALTER TABLE tbl_bebe
DROP COLUMN id_convenio;




////////////////
DROP VIEW IF EXISTS vw_responsavel_completo;

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
    
    
///////
DROP VIEW IF EXISTS vw_responsavel_completo_por_id;

CREATE VIEW vw_responsavel_completo_por_id AS
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

    -- Convênios agrupados SEM duplicados
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





//////
DROP VIEW IF EXISTS vw_bebe_completo;

CREATE VIEW vw_bebe_completo AS
SELECT
    b.id_bebe,
    b.nome AS nome_bebe,
    b.data_nascimento,
    b.peso,
    b.altura,
    b.certidao_nascimento,
    b.cpf,
    b.imagem_certidao,

    -- Sexo
    s.id_sexo,
    s.sexo,

    -- Sangue
    sg.id_sangue,
    sg.tipo_sanguineo AS tipo_sanguineo,

    -- User
    u.id_user,
    u.nome_user,
    u.email,
    u.id_tipo,

    -- Tipo user
    tu.tipo AS tipo_user,

    -- Convênios (agrupados e sem duplicados)
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'id_convenio', SUBSTRING_INDEX(cv.item, '|', 1),
            'nome_convenio', SUBSTRING_INDEX(cv.item, '|', -1)
        )
    ) AS convenios

FROM tbl_bebe b
LEFT JOIN tbl_sexo s
    ON b.id_sexo = s.id_sexo
LEFT JOIN tbl_sangue sg
    ON b.id_sangue = sg.id_sangue
LEFT JOIN tbl_user u
    ON b.id_user = u.id_user
LEFT JOIN tbl_type_user tu
    ON u.id_tipo = tu.id_tipo

-- Subselect para remover duplicações de convênios
LEFT JOIN (
    SELECT DISTINCT
        CONCAT(c.id_convenio, '|', c.nome) AS item,
        uc.id_user
    FROM tbl_user_convenio uc
    LEFT JOIN tbl_convenio c
        ON uc.id_convenio = c.id_convenio
) AS cv
ON cv.id_user = b.id_user

GROUP BY
    b.id_bebe,
    b.nome,
    b.data_nascimento,
    b.peso,
    b.altura,
    b.certidao_nascimento,
    b.cpf,
    b.imagem_certidao,
    s.id_sexo,
    s.sexo,
    sg.id_sangue,
    sg.tipo_sanguineo,
    u.id_user,
    u.nome_user,
    u.email,
    u.id_tipo,
    tu.tipo;
    
    
    
    
    
/////
DROP VIEW IF EXISTS vw_bebe_completo_por_id;

CREATE VIEW vw_bebe_completo_por_id AS
SELECT
    b.id_bebe,
    b.nome AS nome_bebe,
    b.data_nascimento,
    b.peso,
    b.altura,
    b.certidao_nascimento,
    b.cpf,
    b.imagem_certidao,

    -- Sexo
    s.id_sexo,
    s.sexo,

    -- Sangue
    sg.id_sangue,
    sg.tipo_sanguineo AS tipo_sanguineo,

    -- User
    u.id_user,
    u.nome_user,
    u.email,
    u.id_tipo,

    -- Tipo user
    tu.tipo AS tipo_user,

    -- Convênios agrupados
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'id_convenio', SUBSTRING_INDEX(cv.item, '|', 1),
            'nome_convenio', SUBSTRING_INDEX(cv.item, '|', -1)
        )
    ) AS convenios

FROM tbl_bebe b
LEFT JOIN tbl_sexo s ON b.id_sexo = s.id_sexo
LEFT JOIN tbl_sangue sg ON b.id_sangue = sg.id_sangue
LEFT JOIN tbl_user u ON b.id_user = u.id_user
LEFT JOIN tbl_type_user tu ON u.id_tipo = tu.id_tipo

LEFT JOIN (
    SELECT DISTINCT
        CONCAT(c.id_convenio, '|', c.nome) AS item,
        uc.id_user
    FROM tbl_user_convenio uc
    LEFT JOIN tbl_convenio c ON uc.id_convenio = c.id_convenio
) AS cv
ON cv.id_user = b.id_user

GROUP BY
    b.id_bebe,
    b.nome,
    b.data_nascimento,
    b.peso,
    b.altura,
    b.certidao_nascimento,
    b.cpf,
    b.imagem_certidao,
    s.id_sexo,
    s.sexo,
    sg.id_sangue,
    sg.tipo_sanguineo,
    u.id_user,
    u.nome_user,
    u.email,
    u.id_tipo,
    tu.tipo;
    
    
    use sosbaby;



//////////
CREATE VIEW vw_responsavel_completo_por_user AS
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

WHERE u.id_user = u.id_user  -- Filtro dinâmico (deixe assim para a VIEW)

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


////////////////////
CREATE VIEW vw_medicos_completos AS
SELECT
    m.id_medico,
    m.nome AS nome_medico,
    m.email,
    m.telefone,
    m.crm,
    m.cpf,
    m.foto,

    -- Sexo
    s.id_sexo,
    s.sexo AS sexo,

    -- User
    u.id_user,
    u.nome_user,
    u.email AS email_user,
    u.id_tipo,

    -- Tipo de usuário
    tu.tipo AS tipo_user,

    -- Clínica
    c.id_clinica,
    c.nome AS nome_clinica,
    c.cnpj AS cnpj_clinica,
    c.telefone AS telefone_clinica,
    c.email AS email_clinica,
    c.cidade,
    c.rua,
    c.bairro,
    c.numero

FROM tbl_medico m
LEFT JOIN tbl_sexo s 
    ON m.id_sexo = s.id_sexo
LEFT JOIN tbl_user u 
    ON m.id_user = u.id_user
LEFT JOIN tbl_type_user tu
    ON u.id_tipo = tu.id_tipo
LEFT JOIN tbl_clinica c
    ON m.id_clinica = c.id_clinica;



////////////////////////
CREATE VIEW vw_medico_completo AS
SELECT 
    m.id_medico,
    m.nome AS nome_medico,
    m.email AS email_medico,
    m.telefone AS telefone_medico,
    m.crm,
    m.cpf,
    m.foto,

    -- Sexo
    s.id_sexo,
    s.sexo,

    -- User
    u.id_user,
    u.nome_user,
    u.email AS email_user,
    u.id_tipo,

    -- Tipo de Usuário
    t.tipo AS tipo_usuario,

    -- Clínica
    c.id_clinica,
    c.nome AS nome_clinica,
    c.cnpj,
    c.telefone AS telefone_clinica,
    c.email AS email_clinica,
    c.cidade,
    c.rua,
    c.bairro,
    c.numero

FROM tbl_medico AS m
LEFT JOIN tbl_sexo AS s 
    ON m.id_sexo = s.id_sexo
LEFT JOIN tbl_user AS u
    ON m.id_user = u.id_user
LEFT JOIN tbl_type_user AS t
    ON u.id_tipo = t.id_tipo
LEFT JOIN tbl_clinica AS c
    ON m.id_clinica = c.id_clinica;

//////////////////////
CREATE VIEW vw_medico_completo_por_user AS
SELECT 
    m.id_medico,
    m.nome AS nome_medico,
    m.email AS email_medico,
    m.telefone AS telefone_medico,
    m.crm,
    m.cpf,
    m.foto,

    -- Sexo
    s.id_sexo,
    s.sexo,

    -- User (responsável pelo médico)
    u.id_user,
    u.nome_user,
    u.email AS email_user,
    u.id_tipo,

    -- Tipo de usuário
    t.tipo AS tipo_usuario,

    -- Clínica
    c.id_clinica,
    c.nome AS nome_clinica,
    c.cnpj,
    c.telefone AS telefone_clinica,
    c.email AS email_clinica,
    c.cidade,
    c.rua,
    c.bairro,
    c.numero

FROM tbl_medico AS m
LEFT JOIN tbl_sexo AS s 
    ON m.id_sexo = s.id_sexo
LEFT JOIN tbl_user AS u
    ON m.id_user = u.id_user
LEFT JOIN tbl_type_user AS t
    ON u.id_tipo = t.id_tipo
LEFT JOIN tbl_clinica AS c
    ON m.id_clinica = c.id_clinica;



/////////
CREATE OR REPLACE VIEW vw_medico_por_especialidade AS
SELECT 
    m.id_medico,
    m.nome        AS nome_medico,
    m.email,
    m.telefone,
    m.foto,
    s.sexo,
    c.nome        AS nome_clinica,
    c.cidade,
    e.id_especialidade,
    e.especialidade
FROM tbl_medico AS m
INNER JOIN tbl_sexo AS s
    ON m.id_sexo = s.id_sexo
INNER JOIN tbl_clinica AS c
    ON m.id_clinica = c.id_clinica
INNER JOIN tbl_especialidade_medico AS em
    ON m.id_medico = em.id_medico
INNER JOIN tbl_especialidade AS e
    ON em.id_especialidade = e.id_especialidade;




//////////////////////////////
DROP VIEW IF EXISTS vw_clinicas_por_especialidade;

CREATE OR REPLACE VIEW vw_clinicas_por_especialidade AS
SELECT 
    -- Clínica
    c.id_clinica,
    c.nome AS nome_clinica,
    c.cnpj,
    c.telefone AS telefone_clinica,
    c.email AS email_clinica,
    c.cidade,
    c.rua,
    c.bairro,
    c.numero,

    -- Usuário da clínica
    u.id_user,
    u.nome_user,
    u.email AS email_user,

    -- Tipo usuário
    t.id_tipo,
    t.tipo AS tipo_user,

    -- Especialidade (mantida normal para usar LIKE)
    e.id_especialidade,
    e.especialidade AS nome_especialidade,

    -- Convênios em JSON (para evitar duplicação)
    (
        SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
                'id_convenio', conv.id_convenio,
                'nome_convenio', conv.nome
            )
        )
        FROM tbl_user_convenio uc
        INNER JOIN tbl_convenio conv
            ON uc.id_convenio = conv.id_convenio
        WHERE uc.id_user = u.id_user
    ) AS convenios

FROM tbl_clinica AS c

INNER JOIN tbl_user AS u 
    ON c.id_user = u.id_user

INNER JOIN tbl_type_user AS t
    ON u.id_tipo = t.id_tipo

INNER JOIN tbl_especialidade_clinica AS ec
    ON c.id_clinica = ec.id_clinica

INNER JOIN tbl_especialidade AS e
    ON ec.id_especialidade = e.id_especialidade;









////////////////////////////
CREATE VIEW vw_clinica_por_convenio AS
SELECT 
    c.id_clinica,
    c.nome AS nome_clinica,
    c.cnpj,
    c.telefone AS telefone_clinica,
    c.email AS email_clinica,
    c.cidade,
    c.rua,
    c.bairro,
    c.numero,

    u.id_user,
    u.nome_user,
    u.email AS email_user,

    conv.id_convenio,
    conv.nome AS nome_convenio

FROM tbl_clinica c
LEFT JOIN tbl_user u
       ON u.id_user = c.id_user

LEFT JOIN tbl_user_convenio uc
       ON uc.id_user = u.id_user

LEFT JOIN tbl_convenio conv
       ON conv.id_convenio = uc.id_convenio

WHERE conv.id_convenio IS NOT NULL;



//////////////////////
CREATE VIEW vw_medico_por_especialidade AS
SELECT 
    m.id_medico,
    m.nome AS nome_medico,
    m.email AS email_medico,
    m.telefone,
    m.crm,

    u.id_user,
    u.nome_user,
    u.email AS email_user,

    e.id_especialidade,
    e.especialidade

FROM tbl_medico m
LEFT JOIN tbl_user u
       ON u.id_user = m.id_user

LEFT JOIN tbl_user_especialidade ue
       ON ue.id_user = u.id_user

LEFT JOIN tbl_especialidade e
       ON e.id_especialidade = ue.id_especialidade

WHERE e.id_especialidade IS NOT NULL;
