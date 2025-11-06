if (!nome.match(/^[A-Za-zÀ-ÿ\s]+$/)) return res.status(400).json({ erro: "Nome inválido" });
if (!telefone.match(/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/)) return res.status(400).json({ erro: "Telefone inválido" });
if (!cpf.match(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/)) return res.status(400).json({ erro: "CPF inválido" });