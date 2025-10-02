

-- SEXO --
-- vw_all_sexo
DROP VIEW IF EXISTS vw_all_sexo;
CREATE VIEW vw_all_sexo AS
SELECT * FROM tbl_sexo;

-- vw_sexo_by_id
DROP VIEW IF EXISTS vw_sexo_by_id;
CREATE VIEW vw_sexo_by_id AS
SELECT * FROM tbl_sexo WHERE id_sexo = 1;





-- SANGUE --
-- vw_all_sangue
DROP VIEW IF EXISTS vw_all_sangue;
CREATE VIEW vw_all_sangue AS
SELECT * FROM tbl_sangue;

-- vw_sangue_by_id
DROP VIEW IF EXISTS vw_sangue_by_id;
CREATE VIEW vw_sangue_by_id AS
SELECT * FROM tbl_sangue WHERE id_sangue = 1;




-- TIPO USER --
-- vw_all_type_user
DROP VIEW IF EXISTS vw_all_type_user;
CREATE VIEW vw_all_type_user AS
SELECT * FROM tbl_type_user;

-- vw_type_user_by_id
DROP VIEW IF EXISTS vw_type_user_by_id;
CREATE VIEW vw_type_user_by_id AS
SELECT * FROM tbl_type_user WHERE id_tipo = 1;




-- ESPECIALIDADE --
-- vw_all_especialidade
DROP VIEW IF EXISTS vw_all_especialidade;
CREATE VIEW vw_all_especialidade AS
SELECT * FROM tbl_especialidade;

-- vw_especialidade_by_id
DROP VIEW IF EXISTS vw_especialidade_by_id;
CREATE VIEW vw_especialidade_by_id AS
SELECT * FROM tbl_especialidade WHERE id_especialidade = 1;



-- TIPO MENSAGEM -- 
-- vw_all_type_messager
DROP VIEW IF EXISTS vw_all_type_messager;
CREATE VIEW vw_all_type_messager AS
SELECT * FROM tbl_type_messager;

-- vw_type_messager_by_id
DROP VIEW IF EXISTS vw_type_messager_by_id;
CREATE VIEW vw_type_messager_by_id AS
SELECT * FROM tbl_type_messager WHERE id_tipo_mensagem = 1;



-- STATUS MENSAGEM --
-- vw_all_status_messager
DROP VIEW IF EXISTS vw_all_status_messager;
CREATE VIEW vw_all_status_messager AS
SELECT * FROM tbl_status_messager;

-- vw_status_messager_by_id
DROP VIEW IF EXISTS vw_status_messager_by_id;
CREATE VIEW vw_status_messager_by_id AS
SELECT * FROM tbl_status_messager WHERE id_status = 1;



-- USER --
-- vw_all_user
DROP VIEW IF EXISTS vw_all_user;
CREATE VIEW vw_all_user AS
SELECT u.id_user, u.email, u.senha, t.tipo
FROM tbl_user u
LEFT JOIN tbl_type_user t ON u.id_tipo = t.id_tipo;

-- vw_user_by_id
DROP VIEW IF EXISTS vw_user_by_id;
CREATE VIEW vw_user_by_id AS
SELECT u.id_user, u.email, u.senha, t.tipo
FROM tbl_user u
LEFT JOIN tbl_type_user t ON u.id_tipo = t.id_tipo
WHERE u.id_user = 1;



-- MENSAGEM --
-- vw_all_messager
DROP VIEW IF EXISTS vw_all_messager;
CREATE VIEW vw_all_messager AS
SELECT m.id_mensagem, m.conteudo, t.tipo_mensagem, s.status_messagem
FROM tbl_messager m
LEFT JOIN tbl_type_messager t ON m.id_tipo_mensagem = t.id_tipo_mensagem
LEFT JOIN tbl_status_messager s ON m.id_status = s.id_status;

-- vw_messager_by_id
DROP VIEW IF EXISTS vw_messager_by_id;
CREATE VIEW vw_messager_by_id AS
SELECT m.id_mensagem, m.conteudo, t.tipo_mensagem, s.status_messagem
FROM tbl_messager m
LEFT JOIN tbl_type_messager t ON m.id_tipo_mensagem = t.id_tipo_mensagem
LEFT JOIN tbl_status_messager s ON m.id_status = s.id_status
WHERE m.id_mensagem = 1;



-- CHAT --
-- vw_all_chat
DROP VIEW IF EXISTS vw_all_chat;
CREATE VIEW vw_all_chat AS
SELECT c.id_chat, u.email AS usuario, m.conteudo AS mensagem
FROM tbl_chat c
LEFT JOIN tbl_user u ON c.id_user = u.id_user
LEFT JOIN tbl_messager m ON c.id_mensagem = m.id_mensagem;

-- vw_chat_by_id
DROP VIEW IF EXISTS vw_chat_by_id;
CREATE VIEW vw_chat_by_id AS
SELECT c.id_chat, u.email AS usuario, m.conteudo AS mensagem
FROM tbl_chat c
LEFT JOIN tbl_user u ON c.id_user = u.id_user
LEFT JOIN tbl_messager m ON c.id_mensagem = m.id_mensagem
WHERE c.id_chat = 1;




-- CEP --
-- vw_all_cep
DROP VIEW IF EXISTS vw_all_cep;
CREATE VIEW vw_all_cep AS
SELECT * FROM tbl_cep;

-- vw_cep_by_id
DROP VIEW IF EXISTS vw_cep_by_id;
CREATE VIEW vw_cep_by_id AS
SELECT * FROM tbl_cep WHERE id_cep = 1;



-- RESPONSAVEL -- 
-- vw_all_responsavel
DROP VIEW IF EXISTS vw_all_responsavel;
CREATE VIEW vw_all_responsavel AS
SELECT r.id_responsavel, r.nome, r.cpf, r.telefone, u.email
FROM tbl_responsavel r
LEFT JOIN tbl_user u ON r.id_user = u.id_user;

-- vw_responsavel_by_id
DROP VIEW IF EXISTS vw_responsavel_by_id;
CREATE VIEW vw_responsavel_by_id AS
SELECT r.id_responsavel, r.nome, r.cpf, r.telefone, u.email
FROM tbl_responsavel r
LEFT JOIN tbl_user u ON r.id_user = u.id_user
WHERE r.id_responsavel = 1;



-- BEBÊ --
-- vw_all_bebe
DROP VIEW IF EXISTS vw_all_bebe;
CREATE VIEW vw_all_bebe AS
SELECT b.id_bebe, b.nome, b.data_nascimento, s.sexo, sg.tipo_sanguineo
FROM tbl_bebe b
LEFT JOIN tbl_sexo s ON b.id_sexo = s.id_sexo
LEFT JOIN tbl_sangue sg ON b.id_sangue = sg.id_sangue;

-- vw_bebe_by_id
DROP VIEW IF EXISTS vw_bebe_by_id;
CREATE VIEW vw_bebe_by_id AS
SELECT b.id_bebe, b.nome, b.data_nascimento, s.sexo, sg.tipo_sanguineo
FROM tbl_bebe b
LEFT JOIN tbl_sexo s ON b.id_sexo = s.id_sexo
LEFT JOIN tbl_sangue sg ON b.id_sangue = sg.id_sangue
WHERE b.id_bebe = 1;




-- vw_all_responsavel_bebe
DROP VIEW IF EXISTS vw_all_responsavel_bebe;
CREATE VIEW vw_all_responsavel_bebe AS
SELECT rb.id_bebe_responsavel, b.nome AS bebe, r.nome AS responsavel
FROM tbl_responsavel_bebe rb
LEFT JOIN tbl_bebe b ON rb.id_bebe = b.id_bebe
LEFT JOIN tbl_responsavel r ON rb.id_responsavel = r.id_responsavel;

-- vw_responsavel_bebe_by_id
DROP VIEW IF EXISTS vw_responsavel_bebe_by_id;
CREATE VIEW vw_responsavel_bebe_by_id AS
SELECT rb.id_bebe_responsavel, b.nome AS bebe, r.nome AS responsavel
FROM tbl_responsavel_bebe rb
LEFT JOIN tbl_bebe b ON rb.id_bebe = b.id_bebe
LEFT JOIN tbl_responsavel r ON rb.id_responsavel = r.id_responsavel
WHERE rb.id_bebe_responsavel = 1;



-- MÉDICO -- 
-- vw_all_medico
DROP VIEW IF EXISTS vw_all_medico;
CREATE VIEW vw_all_medico AS
SELECT m.id_medico, m.nome, m.email, m.telefone, m.crm, m.cpf, s.sexo
FROM tbl_medico m
LEFT JOIN tbl_sexo s ON m.id_sexo = s.id_sexo;

-- vw_medico_by_id
DROP VIEW IF EXISTS vw_medico_by_id;
CREATE VIEW vw_medico_by_id AS
SELECT m.id_medico, m.nome, m.email, m.telefone, m.crm, m.cpf, s.sexo
FROM tbl_medico m
LEFT JOIN tbl_sexo s ON m.id_sexo = s.id_sexo
WHERE m.id_medico = 1;





-- RELAÇAOM MÉDICO E ESPECIALIDADE --
-- vw_all_especialidade_medico
DROP VIEW IF EXISTS vw_all_especialidade_medico;
CREATE VIEW vw_all_especialidade_medico AS
SELECT em.id, m.nome AS medico, e.especialidade
FROM tbl_especialidade_medico em
LEFT JOIN tbl_medico m ON em.id_medico = m.id_medico
LEFT JOIN tbl_especialidade e ON em.id_especialidade = e.id_especialidade;

-- vw_especialidade_medico_by_id
DROP VIEW IF EXISTS vw_especialidade_medico_by_id;
CREATE VIEW vw_especialidade_medico_by_id AS
SELECT em.id, m.nome AS medico, e.especialidade
FROM tbl_especialidade_medico em
LEFT JOIN tbl_medico m ON em.id_medico = m.id_medico
LEFT JOIN tbl_especialidade e ON em.id_especialidade = e.id_especialidade
WHERE em.id = 1;







-- CLÍNICA --
-- vw_all_clinica
DROP VIEW IF EXISTS vw_all_clinica;
CREATE VIEW vw_all_clinica AS
SELECT c.id_clinica, c.nome, c.cnpj, c.telefone, c.email
FROM tbl_clinica c;

-- vw_clinica_by_id
DROP VIEW IF EXISTS vw_clinica_by_id;
CREATE VIEW vw_clinica_by_id AS
SELECT c.id_clinica, c.nome, c.cnpj, c.telefone, c.email
FROM tbl_clinica c
WHERE c.id_clinica = 1;



-- RELAÇÃO CLÍNICA E ESPECIALIDADE --
-- vw_all_especialidade_clinica
DROP VIEW IF EXISTS vw_all_especialidade_clinica;
CREATE VIEW vw_all_especialidade_clinica AS
SELECT ec.id, c.nome AS clinica, e.especialidade
FROM tbl_especialidade_clinica ec
LEFT JOIN tbl_clinica c ON ec.id_clinica = c.id_clinica
LEFT JOIN tbl_especialidade e ON ec.id_especialidade = e.id_especialidade;

-- vw_especialidade_clinica_by_id
DROP VIEW IF EXISTS vw_especialidade_clinica_by_id;
CREATE VIEW vw_especialidade_clinica_by_id AS
SELECT ec.id, c.nome AS clinica, e.especialidade
FROM tbl_especialidade_clinica ec
LEFT JOIN tbl_clinica c ON ec.id_clinica = c.id_clinica
LEFT JOIN tbl_especialidade e ON ec.id_especialidade = e.id_especialidade
WHERE ec.id = 1;



-- ROTINA --
-- vw_all_rotina
DROP VIEW IF EXISTS vw_all_rotina;
CREATE VIEW view_rotinas AS
SELECT r.id_rotina, r.titulo, r.cor, u.id_user
FROM tbl_rotina r
JOIN tbl_user u ON r.id_user = u.id_user;


-- vw_rotina_by_id
DROP VIEW IF EXISTS vw_rotina_by_id;
CREATE VIEW view_rotina_itens AS
SELECT i.id_item, i.titulo, i.descricao, i.data_rotina, i.hora,
       r.id_rotina, r.titulo AS rotina_titulo
FROM tbl_rotina_item i
JOIN tbl_rotina r ON i.id_rotina = r.id_rotina;


-- vw_all_rotina_item -- 
DROP VIEW IF EXISTS vw_all_rotina_itens;
CREATE VIEW vw_all_rotina_itens AS
SELECT i.id_item, i.titulo, i.descricao, i.data_rotina, i.hora,
       r.id_rotina, r.titulo AS rotina_titulo
FROM tbl_rotina_item i
JOIN tbl_rotina r ON i.id_rotina = r.id_rotina;

-- vw_rotina_item_by_id
CREATE VIEW view_rotina_item_by_id AS
SELECT i.id_item, i.titulo, i.descricao, i.data_rotina, i.hora,
       r.id_rotina, r.titulo AS rotina_titulo
FROM tbl_rotina_item i
JOIN tbl_rotina r ON i.id_rotina = r.id_rotina
WHERE i.id_item = i.id_item; 



