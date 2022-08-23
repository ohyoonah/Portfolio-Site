import { CertificateModel } from "../schemas/certificate";

class Certificate {
  static async create({ newCertificate }) {
    const createdNewCertificate = await CertificateModel.create(newCertificate);
    return createdNewCertificate;
  }

  static async findAllByUserId({ user_id }) {
    const certificates = await CertificateModel.find({ author: user_id });
    return certificates;
  }

  static async findOneById({ certificateId }) {
    const foundCertificate = await CertificateModel.findOne({
      id: certificateId,
    });
    return foundCertificate;
  }

  static async update({ certificateId, fieldToUpdate, newValue }) {
    const filter = { id: certificateId };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedCertificate = await CertificateModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedCertificate;
  }
}

export { Certificate };
