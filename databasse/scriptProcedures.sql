
-- PROCEDURES





-- Procedure tbl_sexo
-- INSERT
DELIMITER $
DROP procedure IF EXISTS insertSexo;
CREATE PROCEDURE insertSexo(
	IN p_sexo varchar(100)
)
BEGIN
	INSERT INTO tbl_sexo (
		sexo
    )
    VALUES (
		p_sexo
    );
    
     SELECT LAST_INSERT_ID() AS id_sexo;
END $ 

-- DELETE

DELIMITER $$
DROP PROCEDURE IF EXISTS deleteSexo; 
CREATE PROCEDURE deleteSexo(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_sexo
    WHERE id_sexo = p_id;
END $$







-- PROCEDURE TBL_TYPE_USER --
-- INSERT
DELIMITER $$
DROP procedure IF EXISTS insertTypeUser;
CREATE PROCEDURE insertTypeUser(
	IN p_tipo varchar(100)
)
BEGIN
	INSERT INTO tbl_type_user (
		tipo
    )
    VALUES (
		p_tipo
    );
    
     SELECT LAST_INSERT_ID() AS id_tipo;
END $$

-- DELETE
DELIMITER $$
DROP PROCEDURE IF EXISTS DeleteTypeUser;
CREATE PROCEDURE DeleteTypeUser(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_type_user
    WHERE id_tipo = p_id;
END $$

-- UPDATE
DELIMITER $$
DROP PROCEDURE IF EXISTS UpdateTypeUser;
CREATE PROCEDURE UpdateTypeUser(
	IN p_id int,
	IN p_tipo varchar(100)
)
BEGIN
	UPDATE tbl_type_user
    SET tipo = p_tipo
    WHERE id_tipo = p_id;
END $$









-- PROCEDURE TBL_SANGUE --

-- INSERT
DELIMITER $$
DROP procedure IF EXISTS insertSangue;
CREATE PROCEDURE insertSangue(
	IN p_sangue varchar(100)
)
BEGIN
	INSERT INTO tbl_sangue (
		tipo_sanguineo
    )
    VALUES (
		p_sangue
    );
    
     SELECT LAST_INSERT_ID() AS id_sangue;
END $$


-- DELETE
DELIMITER $$
DROP PROCEDURE IF EXISTS DeleteSangue;
CREATE PROCEDURE DeleteSangue(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_sangue
    WHERE id_sangue = p_id;
END $$









-- PROCEDURE TBL_ESPECIALIDADE --
-- INSERT
DELIMITER $$
DROP procedure IF EXISTS insertEspecialidade;
CREATE PROCEDURE insertEspecialidade(
	IN p_especialidade varchar(100)
)
BEGIN
	INSERT INTO tbl_especialidade(
		especialidade
    )
    VALUES (
		p_especialidade
    );
    
     SELECT LAST_INSERT_ID() AS id_especialidade;
END $$

-- DELETE
DELIMITER $$
DROP PROCEDURE IF EXISTS DeleteEspecialidade;
CREATE PROCEDURE DeleteEspecialidade(
    IN p_especialidade INT
)
BEGIN
    DELETE FROM tbl_especialidade
    WHERE id_especialidade = p_id;
END $$

-- UPDATE
DELIMITER $$
DROP PROCEDURE IF EXISTS UpdateEspecialidade;
CREATE PROCEDURE UpdateEspecialidade(
	IN p_id int,
	IN p_especialidade varchar(100)
)
BEGIN
	UPDATE tbl_especialidade
    SET especialidade = p_especialidade
    WHERE id_especialidade = p_id;
END $$







-- PROCEDURE TBL_TYPE_MESSAGER --
-- INSERT
DELIMITER $$
DROP procedure IF EXISTS insertTypeMessager;
CREATE PROCEDURE insertTypeMessager(
	IN p_tipo_mensagem varchar(100)
)
BEGIN
	INSERT INTO tbl_type_messager (
		tipo_mensagem
    )
    VALUES (
		p_tipo_mensagem
    );
    
     SELECT LAST_INSERT_ID() AS id_tipo_mensagem;
END $$

-- DELETE
DELIMITER $$
DROP PROCEDURE IF EXISTS DeleteTypeUser;
CREATE PROCEDURE DeleteTypeUser(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_type_messager
    WHERE id_tipo_mensagem = p_id;
END $$

-- UPDATE
DELIMITER $
DROP procedure IF EXISTS UpdateTypeMessager;
CREATE PROCEDURE UpdateTypeMessager(
	IN p_id int,
	IN p_tipo_messager varchar(100)
)
BEGIN
	UPDATE tbl_type_messager
    SET tipo_mensagem = p_tipo_messager
    WHERE id_tipo_mensagem = p_id;
END $







-- PROCEDURE TBL_STATUS_MESSAGER --
-- INSERT
DELIMITER $
DROP procedure IF EXISTS insertStatusMessager;
CREATE PROCEDURE insertStatusMessager(
	IN p_status varchar(100)
)
BEGIN
	INSERT INTO tbl_status_messager (
		status_messagem
    )
    VALUES (
		p_status
    );
    
     SELECT LAST_INSERT_ID() AS id_status;
END $ 

-- DELETE
DELIMITER $$
DROP PROCEDURE IF EXISTS DeleteStatusMessager;
CREATE PROCEDURE DeleteStatusMessager(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_status_messager
    WHERE id_status = p_id;
END $$

-- UPDATE
DELIMITER $$
DROP PROCEDURE IF EXISTS UpdateStatusUser;
CREATE PROCEDURE UpdateStatusUser(
    IN p_id INT,
    IN p_status_messagem VARCHAR(100)
)
BEGIN
    UPDATE tbl_status_messager
    SET status_messagem = p_status_messagem
    WHERE id_status = p_id;
END $$








-- PROCEDURE USER --
-- INSERT --
DELIMITER $$
CREATE PROCEDURE insertUser(
    IN p_email VARCHAR(100),
    IN p_senha VARCHAR(100),
    IN p_id_tipo INT
)
BEGIN
    INSERT INTO tbl_user (email, senha, id_tipo)
    VALUES (p_email, p_senha, p_id_tipo);
    SELECT LAST_INSERT_ID() AS novo_id;
END $$

-- UPDATE -- 

DELIMITER $$
CREATE PROCEDURE updateUser(
    IN p_id INT,
    IN p_email VARCHAR(100),
    IN p_senha VARCHAR(100),
    IN p_id_tipo INT
)
BEGIN
    UPDATE tbl_user
    SET email = p_email, senha = p_senha, id_tipo = p_id_tipo
    WHERE id_user = p_id;
END $$

-- DELETE
DELIMITER $$
DROP PROCEDURE IF EXISTS DeleteUser;
CREATE PROCEDURE DeleteUser(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_user
    WHERE id_user = p_id;
END $$







-- PROCEDURE MESSAGER --
-- INSERT --
DELIMITER $$
DROP PROCEDURE IF EXISTS insertMessager;
CREATE PROCEDURE insertMessager(
    IN p_conteudo TEXT,
    IN p_id_tipo_mensagem INT,
    IN p_id_status INT
)
BEGIN
    INSERT INTO tbl_messager (conteudo, id_tipo_mensagem, id_status)
    VALUES (p_conteudo, p_id_tipo_mensagem, p_id_status);
    SELECT LAST_INSERT_ID() AS novo_id;
END $$


-- UPDATE --
DELIMITER $$
DROP PROCEDURE IF EXISTS updateMessager;
CREATE PROCEDURE updateMessager(
    IN p_id INT,
    IN p_conteudo TEXT,
    IN p_id_tipo_mensagem INT,
    IN p_id_status INT
)
BEGIN
    UPDATE tbl_messager
    SET conteudo = p_conteudo,
        id_tipo_mensagem = p_id_tipo_mensagem,
        id_status = p_id_status
    WHERE id_mensagem = p_id;
END $$


-- DELETE --
DELIMITER $$
DROP PROCEDURE IF EXISTS deleteMessager;
CREATE PROCEDURE deleteMessager(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_messager WHERE id_mensagem = p_id;
END $$








-- PROCEDURE CHAT --
-- INSERT --
DELIMITER $$
DROP PROCEDURE IF EXISTS insertChat;
CREATE PROCEDURE insertChat(
    IN p_id_mensagem INT,
    IN p_id_user INT
)
BEGIN
    INSERT INTO tbl_chat (id_mensagem, id_user)
    VALUES (p_id_mensagem, p_id_user);
    SELECT LAST_INSERT_ID() AS novo_id;
END $$

-- UPDATE --
DELIMITER $$
DROP PROCEDURE IF EXISTS updateChat;
CREATE PROCEDURE updateChat(
    IN p_id INT,
    IN p_id_mensagem INT,
    IN p_id_user INT
)
BEGIN
    UPDATE tbl_chat
    SET id_mensagem = p_id_mensagem,
        id_user = p_id_user
    WHERE id_chat = p_id;
END $$


-- DELETE --
DELIMITER $$
DROP PROCEDURE IF EXISTS deleteChat;
CREATE PROCEDURE deleteChat(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_chat WHERE id_chat = p_id;
END $$





-- PROCEDURE CEP --
-- INSERT --
DELIMITER $$
DROP PROCEDURE IF EXISTS insertCep;
CREATE PROCEDURE insertCep(
    IN p_cep VARCHAR(10),
    IN p_logradouro VARCHAR(150),
    IN p_bairro VARCHAR(100),
    IN p_cidade VARCHAR(100),
    IN p_estado VARCHAR(2)
)
BEGIN
    INSERT INTO tbl_cep (cep, logradouro, bairro, cidade, estado)
    VALUES (p_cep, p_logradouro, p_bairro, p_cidade, p_estado);
    SELECT LAST_INSERT_ID() AS novo_id;
END $$


-- UPDATE --
DELIMITER $$
DROP PROCEDURE IF EXISTS updateCep;
CREATE PROCEDURE updateCep(
    IN p_id INT,
    IN p_cep VARCHAR(10),
    IN p_logradouro VARCHAR(150),
    IN p_bairro VARCHAR(100),
    IN p_cidade VARCHAR(100),
    IN p_estado VARCHAR(2)
)
BEGIN
    UPDATE tbl_cep
    SET cep = p_cep,
        logradouro = p_logradouro,
        bairro = p_bairro,
        cidade = p_cidade,
        estado = p_estado
    WHERE id_cep = p_id;
END $$

-- DELETE --
DELIMITER $$
DROP PROCEDURE IF EXISTS deleteCep;
CREATE PROCEDURE deleteCep(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_cep WHERE id_cep = p_id;
END $$








-- PROCEDURE RESPONSAVEL --
-- INSERT --
DELIMITER $$
DROP PROCEDURE IF EXISTS insertResponsavel;
CREATE PROCEDURE insertResponsavel(
    IN p_nome VARCHAR(150),
    IN p_cpf VARCHAR(14),
    IN p_telefone VARCHAR(15),
    IN p_id_user INT,
    IN p_id_cep INT
)
BEGIN
    INSERT INTO tbl_responsavel (nome, cpf, telefone, id_user, id_cep)
    VALUES (p_nome, p_cpf, p_telefone, p_id_user, p_id_cep);
    SELECT LAST_INSERT_ID() AS novo_id;
END $$


-- UPDATE --
DELIMITER $$
DROP PROCEDURE IF EXISTS updateResponsavel;
CREATE PROCEDURE updateResponsavel(
    IN p_id INT,
    IN p_nome VARCHAR(150),
    IN p_cpf VARCHAR(14),
    IN p_telefone VARCHAR(15),
    IN p_id_user INT,
    IN p_id_cep INT
)
BEGIN
    UPDATE tbl_responsavel
    SET nome = p_nome,
        cpf = p_cpf,
        telefone = p_telefone,
        id_user = p_id_user,
        id_cep = p_id_cep
    WHERE id_responsavel = p_id;
END $$

-- DELETE --
DELIMITER $$
DROP PROCEDURE IF EXISTS deleteResponsavel;
CREATE PROCEDURE deleteResponsavel(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_responsavel WHERE id_responsavel = p_id;
END $$







-- PROCEDURE BEBE --
-- INSERT --
DELIMITER $$
DROP PROCEDURE IF EXISTS insertBebe;
CREATE PROCEDURE insertBebe(
    IN p_nome VARCHAR(150),
    IN p_data_nascimento DATE,
    IN p_id_sexo INT,
    IN p_id_sangue INT
)
BEGIN
    INSERT INTO tbl_bebe (nome, data_nascimento, id_sexo, id_sangue)
    VALUES (p_nome, p_data_nascimento, p_id_sexo, p_id_sangue);
    SELECT LAST_INSERT_ID() AS novo_id;
END $$


-- UPDATE --
DELIMITER $$
DROP PROCEDURE IF EXISTS updateBebe;
CREATE PROCEDURE updateBebe(
    IN p_id INT,
    IN p_nome VARCHAR(150),
    IN p_data_nascimento DATE,
    IN p_id_sexo INT,
    IN p_id_sangue INT
)
BEGIN
    UPDATE tbl_bebe
    SET nome = p_nome,
        data_nascimento = p_data_nascimento,
        id_sexo = p_id_sexo,
        id_sangue = p_id_sangue
    WHERE id_bebe = p_id;
END $$

-- DELETE --
DELIMITER $$
DROP PROCEDURE IF EXISTS deleteBebe;
CREATE PROCEDURE deleteBebe(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_bebe WHERE id_bebe = p_id;
END $$







-- PROCEDURE RESPONSAVEL_BEBE --
-- INSERT --
DELIMITER $$
DROP PROCEDURE IF EXISTS insertResponsavelBebe;
CREATE PROCEDURE insertResponsavelBebe(
    IN p_id_bebe INT,
    IN p_id_responsavel INT
)
BEGIN
    INSERT INTO tbl_responsavel_bebe (id_bebe, id_responsavel)
    VALUES (p_id_bebe, p_id_responsavel);
    SELECT LAST_INSERT_ID() AS novo_id;
END $$


-- UPDATE --
DELIMITER $$
DROP PROCEDURE IF EXISTS updateResponsavelBebe;
CREATE PROCEDURE updateResponsavelBebe(
    IN p_id INT,
    IN p_id_bebe INT,
    IN p_id_responsavel INT
)
BEGIN
    UPDATE tbl_responsavel_bebe
    SET id_bebe = p_id_bebe,
        id_responsavel = p_id_responsavel
    WHERE id_bebe_responsavel = p_id;
END $$


-- DELETE --
DELIMITER $$
DROP PROCEDURE IF EXISTS deleteResponsavelBebe;
CREATE PROCEDURE deleteResponsavelBebe(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_responsavel_bebe WHERE id_bebe_responsavel = p_id;
END $$







-- PROCEDURE MEDICO --
-- INSERT --
DELIMITER $$
DROP PROCEDURE IF EXISTS insertMedico;
CREATE PROCEDURE insertMedico(
    IN p_nome VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_telefone VARCHAR(20),
    IN p_crm VARCHAR(20),
    IN p_cpf VARCHAR(20),
    IN p_foto TEXT,
    IN p_id_sexo INT,
    IN p_id_user INT
)
BEGIN
    INSERT INTO tbl_medico (nome, email, telefone, crm, cpf, foto, id_sexo, id_user)
    VALUES (p_nome, p_email, p_telefone, p_crm, p_cpf, p_foto, p_id_sexo, p_id_user);
    SELECT LAST_INSERT_ID() AS novo_id;
END $$

-- UPDATE --
DELIMITER $$
DROP PROCEDURE IF EXISTS updateMedico;
CREATE PROCEDURE updateMedico(
    IN p_id INT,
    IN p_nome VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_telefone VARCHAR(20),
    IN p_crm VARCHAR(20),
    IN p_cpf VARCHAR(20),
    IN p_foto TEXT,
    IN p_id_sexo INT,
    IN p_id_user INT
)
BEGIN
    UPDATE tbl_medico
    SET nome = p_nome,
        email = p_email,
        telefone = p_telefone,
        crm = p_crm,
        cpf = p_cpf,
        foto = p_foto,
        id_sexo = p_id_sexo,
        id_user = p_id_user
    WHERE id_medico = p_id;
END $$

-- DELETE --
DELIMITER $$
DROP PROCEDURE IF EXISTS deleteMedico;
CREATE PROCEDURE deleteMedico(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_medico WHERE id_medico = p_id;
END $$









-- PROCEDURE ESPECIALIDADE_MEDICO --
-- INSERT --
DELIMITER $$
DROP PROCEDURE IF EXISTS insertEspecialidadeMedico;
CREATE PROCEDURE insertEspecialidadeMedico(
    IN p_id_medico INT,
    IN p_id_especialidade INT
)
BEGIN
    INSERT INTO tbl_especialidade_medico (id_medico, id_especialidade)
    VALUES (p_id_medico, p_id_especialidade);
    SELECT LAST_INSERT_ID() AS novo_id;
END $$

-- UPDATE --
DELIMITER $$
DROP PROCEDURE IF EXISTS updateEspecialidadeMedico;
CREATE PROCEDURE updateEspecialidadeMedico(
    IN p_id INT,
    IN p_id_medico INT,
    IN p_id_especialidade INT
)
BEGIN
    UPDATE tbl_especialidade_medico
    SET id_medico = p_id_medico,
        id_especialidade = p_id_especialidade
    WHERE id = p_id;
END $$

-- DELETE --
DELIMITER $$
DROP PROCEDURE IF EXISTS deleteEspecialidadeMedico;
CREATE PROCEDURE deleteEspecialidadeMedico(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_especialidade_medico WHERE id = p_id;
END $$







-- PROCEDURE CLINICA --
-- INSERT --
DELIMITER $$
DROP PROCEDURE IF EXISTS insertClinica;
CREATE PROCEDURE insertClinica(
    IN p_nome VARCHAR(100),
    IN p_cnpj VARCHAR(20),
    IN p_telefone VARCHAR(20),
    IN p_email VARCHAR(100),
    IN p_id_cep INT,
    IN p_id_user INT
)
BEGIN
    INSERT INTO tbl_clinica (nome, cnpj, telefone, email, id_cep, id_user)
    VALUES (p_nome, p_cnpj, p_telefone, p_email, p_id_cep, p_id_user);
    SELECT LAST_INSERT_ID() AS novo_id;
END $$


-- UPDATE --
DELIMITER $$
DROP PROCEDURE IF EXISTS updateClinica;
CREATE PROCEDURE updateClinica(
    IN p_id INT,
    IN p_nome VARCHAR(100),
    IN p_cnpj VARCHAR(20),
    IN p_telefone VARCHAR(20),
    IN p_email VARCHAR(100),
    IN p_id_cep INT,
    IN p_id_user INT
)
BEGIN
    UPDATE tbl_clinica
    SET nome = p_nome,
        cnpj = p_cnpj,
        telefone = p_telefone,
        email = p_email,
        id_cep = p_id_cep,
        id_user = p_id_user
    WHERE id_clinica = p_id;
END $$

-- DELETE --
DELIMITER $$
DROP PROCEDURE IF EXISTS deleteClinica;
CREATE PROCEDURE deleteClinica(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_clinica WHERE id_clinica = p_id;
END $$









-- PROCEDURE ESPECIALIDADE_CLINICA --
-- INSERT --
DELIMITER $$
DROP PROCEDURE IF EXISTS insertEspecialidadeClinica;
CREATE PROCEDURE insertEspecialidadeClinica(
    IN p_id_clinica INT,
    IN p_id_especialidade INT
)
BEGIN
    INSERT INTO tbl_especialidade_clinica (id_clinica, id_especialidade)
    VALUES (p_id_clinica, p_id_especialidade);
    SELECT LAST_INSERT_ID() AS novo_id;
END $$

-- UPDATE --
DELIMITER $$
DROP PROCEDURE IF EXISTS updateEspecialidadeClinica;
CREATE PROCEDURE updateEspecialidadeClinica(
    IN p_id INT,
    IN p_id_clinica INT,
    IN p_id_especialidade INT
)
BEGIN
    UPDATE tbl_especialidade_clinica
    SET id_clinica = p_id_clinica,
        id_especialidade = p_id_especialidade
    WHERE id = p_id;
END $$

-- DELETE --
DELIMITER $$
DROP PROCEDURE IF EXISTS deleteEspecialidadeClinica;
CREATE PROCEDURE deleteEspecialidadeClinica(
    IN p_id INT
)
BEGIN
    DELETE FROM tbl_especialidade_clinica WHERE id = p_id;
END $$




-- PROCEDURE ROTINA --
-- INSERT --
DELIMITER $$
DROP PROCEDURE IF EXISTS insertRotina;
CREATE PROCEDURE insertRotina (
    IN p_titulo VARCHAR(100),
    IN p_data DATE,
    IN p_cor CHAR(10),
    IN p_id_user INT
)
BEGIN
    INSERT INTO tbl_rotina (titulo, data_rotina, cor, id_user)
    VALUES (p_titulo, p_data, p_cor, p_id_user);

    SELECT LAST_INSERT_ID() AS id_rotina;
END $$



-- UPDATE --
DELIMITER $$
DROP PROCEDURE IF EXISTS updateRotina;
CREATE PROCEDURE updateRotina (
    IN p_id_rotina INT,
    IN p_titulo VARCHAR(100),
    IN p_data DATE,
    IN p_cor CHAR(10)
)
BEGIN
    UPDATE tbl_rotina
    SET titulo = p_titulo,
        data_rotina = p_data,
        cor = p_cor
    WHERE id_rotina = p_id_rotina;
END $$


-- DELETE --
DELIMITER $$
DROP PROCEDURE IF EXISTS deleteRotina;
CREATE PROCEDURE deleteRotina (
    IN p_id_rotina INT
)
BEGIN
    DELETE FROM tbl_rotina
    WHERE id_rotina = p_id_rotina;
END $$

-- PROCEDURE ROTINA --
-- INSERT --

DELIMITER $$
DROP PROCEDURE IF EXISTS insertRotinaItem;
CREATE PROCEDURE insertRotinaItem (
    IN p_id_rotina INT,
    IN p_titulo VARCHAR(100),
    IN p_descricao TEXT,
    IN p_data DATE,
    IN p_hora TIME
)
BEGIN
    INSERT INTO tbl_rotina_item (id_rotina, titulo, descricao, data_rotina, hora)
    VALUES (p_id_rotina, p_titulo, p_descricao, p_data, p_hora);

    SELECT LAST_INSERT_ID() AS id_item;
END $$

-- UPDATE --
DELIMITER $$
DROP PROCEDURE IF EXISTS updateRotinaItem;
CREATE PROCEDURE updateRotinaItem (
    IN p_id_item INT,
    IN p_titulo VARCHAR(100),
    IN p_descricao TEXT,
    IN p_data DATE,
    IN p_hora TIME
)
BEGIN
    UPDATE tbl_rotina_item
    SET titulo = p_titulo,
        descricao = p_descricao,
        data_rotina = p_data,
        hora = p_hora
    WHERE id_item = p_id_item;
END $$

-- DELETE --

DELIMITER $$
DROP PROCEDURE IF EXISTS deleteRotinaItem;
CREATE PROCEDURE deleteRotinaItem (
    IN p_id_item INT
)
BEGIN
    DELETE FROM tbl_rotina_item
    WHERE id_item = p_id_item;
END $$

DELIMITER ;
