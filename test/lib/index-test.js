const sut = require("../../lib");

describe(__filename, function () {
  it("should have temperature", function () {
    sut.should.have.property("temperature");
    sinon.match.object.test(sut.temperature).should.be.true;
  });

  it("should have torque", function () {
    sut.should.have.property("torque");
    sinon.match.object.test(sut.torque).should.be.true;
  });
});
