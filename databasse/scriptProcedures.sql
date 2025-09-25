-- SEXO

-- INSERT
DELIMITER $
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
END $ 

-- DELETE

DELIMITER $
CREATE PROCEDURE deleteSexo(
	IN p_id int
)
BEGIN
	DELETE FROM tbl_sexo 
    WHERE id_sexo = p_id;
END$

-- UPDATE

DELIMITER $
CREATE PROCEDURE updateSexo(
	IN p_id int,
	IN p_sexo varchar(100)
)
BEGIN
	UPDATE tbl_sexo 
    SET sexo = p_sexo
    WHERE id_sexo = p_id;
END$