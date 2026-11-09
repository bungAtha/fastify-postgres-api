
export const findAll = (pg) => {
  return pg.query('SELECT * FROM users')
}

export const getById = (pg, id) => {
    return pg.query('SELECT * FROM users WHERE id = $1', [id])
}

export const create = (pg, name, email) => {
  return pg.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  )
}

export const update = (pg, id, name, email) => {
  return pg.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id]
  )
}

export const remove = (pg, id) => {
  return pg.query(
    'DELETE FROM users WHERE id = $1 RETURNING *',
    [id]
  )
}