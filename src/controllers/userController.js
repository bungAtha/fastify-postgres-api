import * as userModel from "../models/userModel.js";

export const getUsers = (request, reply) => {
  userModel
    .findAll(request.server.pg)
    .then((result) => {
      reply.send(result.rows);
    })
    .catch((err) => {
      request.log.error(err);
      reply.code(500).send({ error: "Gagal mengambil data user" });
    });
};

export const getUserById = (request, reply) => {
  const { id } = request.params;

  userModel
    .getById(request.server.pg, id)
    .then((user) => {
      if (!user) {
        reply.code(404).send({ error: "User tidak ditemukan" });
        return;
      }
      reply.send(user);
    })
    .catch((err) => {
      request.log.error(err);
      reply.code(500).send({ error: "Gagal mengambil data user" });
    });
};

export const createUser = (request, reply) => {
  const { name, email } = request.body;

  userModel
    .create(request.server.pg, name, email)
    .then((result) => {
      reply.code(201).send(result.rows[0]);
    })
    .catch((err) => {
      request.log.error(err);
      reply.code(500).send({ error: "Gagal menyimpan data user" });
    });
};

export const updateUser = (request, reply) => {
  const { id } = request.params;
  const { name, email } = request.body;

  userModel
    .update(request.server.pg, id, name, email)
    .then((result) => {
      if (result.rows.length === 0) {
        reply.code(404).send({ error: "User tidak ditemukan" });
        return;
      }
      reply.send(result.rows[0]);
    })
    .catch((err) => {
      request.log.error(err);
      reply.code(500).send({ error: "Gagal memperbarui data user" });
    });
};

export const deleteUser = (request, reply) => {
  const { id } = request.params;

  userModel
    .remove(request.server.pg, id)
    .then((result) => {
      if (result.rows.length === 0) {
        reply.code(404).send({ error: "User tidak ditemukan" });
        return;
      }
      reply.send({
        message: "User berhasil dihapus",
        deletedUser: result.rows[0],
      });
    })
    .catch((err) => {
      request.log.error(err);
      reply.code(500).send({ error: "Gagal menghapus data user" });
    });
};
