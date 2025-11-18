CREATE TABLE tbl_chamada_video (
    id_chamada INT AUTO_INCREMENT PRIMARY KEY,
    nome_chamada VARCHAR(100) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tbl_chamada_participante (
    id_rel INT AUTO_INCREMENT PRIMARY KEY,
    id_chamada INT NOT NULL,
    id_user INT NOT NULL,

    CONSTRAINT FK_CHAMADA_REL
        FOREIGN KEY (id_chamada)
        REFERENCES tbl_chamada_video(id_chamada)
        ON DELETE CASCADE,

    CONSTRAINT FK_CHAMADA_USER
        FOREIGN KEY (id_user)
        REFERENCES tbl_user(id_user)
        ON DELETE CASCADE
);

CREATE EVENT IF NOT EXISTS limpar_chamadas_antigas
ON SCHEDULE EVERY 1 DAY
DO
    DELETE FROM tbl_chamada_video 
    WHERE criado_em < NOW() - INTERVAL 5 DAY;


///////////////////
DELIMITER $$

CREATE PROCEDURE visualizar_chamada_video (IN p_id_chamada INT)
BEGIN
    SELECT 
        cv.id_chamada,
        cv.nome_chamada,
        cv.data_criacao,
        u1.id_user AS usuario_1_id,
        u1.nome_user AS usuario_1_nome,
        u1.email AS usuario_1_email,
        u2.id_user AS usuario_2_id,
        u2.nome_user AS usuario_2_nome,
        u2.email AS usuario_2_email
    FROM chamada_video cv
    LEFT JOIN tbl_user u1 ON u1.id_user = cv.user_1_id
    LEFT JOIN tbl_user u2 ON u2.id_user = cv.user_2_id
    WHERE cv.id_chamada = p_id_chamada;
END $$

DELIMITER ;
