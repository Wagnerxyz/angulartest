var faker = require('faker')
faker.locale = "zh_CN"

function generateEmployees() {
  var employees = []
  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email()
    var image = faker.image.avatar()
    employees.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "image": image
    })
  }

  const custBaseInfo = {
    custName: faker.name.findName(),
    custSex: '男',
    custPhone: faker.phone.phoneNumber()
  }
  const custMarketInfo = {
    product: faker.commerce.product(),
    pageName: faker.internet.domainName(),
    triggerTime: faker.date.past(),
    cashLine: faker.finance.amount()
  }

  return {
    "employees": employees, "getCustInfo": {
      "ret": "0",
      "errMsg": null,
      "errCode": null,
      "data": custBaseInfo
    },
    "getMarketInfo": {
      "ret": "0",
      "errMsg": null,
      "errCode": null,
      "data": custMarketInfo
    },
    "connection": {
      "status": "connectionWaeak"
    }
  }
}





module.exports = generateEmployees