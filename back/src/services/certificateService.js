import { Certificate, User } from "../db";

class certificateService {
  static async addCertificate({
    userId,
    certificateId,
    title,
    description,
    getDate,
  }) {
    const newCertificate = {
      userId,
      certificateId,
      title,
      description,
      getDate,
    };

    const createdNewCertificate = await Certificate.create({ newCertificate });
    createdNewCertificate.errorMessage = null;
    return createdNewCertificate;
  }

  static async findCertificatesByUserId({ userId }) {
    const foundCertificates = await Certificate.findAllByUserId({
      userId,
    });
    return foundCertificates;
  }

  static async findOneByCertificateId({ certificateId }) {
    const foundOneCertificate = await Certificate.findOneByCertificateId({
      certificateId,
    });
    return foundOneCertificate;
  }

  // 수정관련 작성
  static async updateCertificate({ certificateId, toUpdate }) {
    let certificate = await Certificate.findOneByCertificateId({
      certificateId,
    });
    if (!certificate) {
      const errorMessage =
        "해당 자격증을 찾을 수 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    if (toUpdate.title) {
      const fieldToUpdate = "title";
      const newValue = toUpdate.title;
      certificate = await Certificate.update({
        certificateId,
        fieldToUpdate,
        newValue,
      });
    }

    if (toUpdate.description) {
      const fieldToUpdate = "description";
      const newValue = toUpdate.description;
      certificate = await Certificate.update({
        certificateId,
        fieldToUpdate,
        newValue,
      });
    }

    if (toUpdate.getDate) {
      const fieldToUpdate = "getDate";
      const newValue = toUpdate.getDate;
      certificate = await Certificate.update({
        certificateId,
        fieldToUpdate,
        newValue,
      });
    }

    return certificate;
  }
}

export { certificateService };