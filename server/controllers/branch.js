import model from "../models";

const { Branch, Bank, BankBranch } = model;

class Branches {
  static fetch(req, res) {
    const ifsc_code = req.params.ifsc;
    return BankBranch.findByPk(ifsc_code).then(branchData => {
      res.status(200).send({
        success: true,
        message: "Branch Successfully Found",
        branches: branchData
      });
    });
  } 

  static fetchAll(req, res) {
    const bank_name = req.query.bank_name;
    const city = req.query.city;
    const limit = req.query.limit;
    const offset = req.query.offset;
    return BankBranch.findAll({
      where: {
        bank_name: bank_name,
        city: city
      },
      limit: limit,
      offset: offset
    }).then(branchData => {
      res.status(200).send({
        success: true,
        message: "Bank Branches Successfully Found",
        count: branchData.length,
        branches: branchData
      });
    });
  }
}

export default Branches;
