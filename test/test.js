import {AA} from '../js/pp';

describe("HomePage Component", () => {
    describe("getData", () => {
        let rep;

        beforeEach(function() {
            rep = new AA()
        });

        it("should render with data props", () => {
            expect(rep.fun1("aa")).to.equal("haha");
        });

        it("should render with data props2", () => {
            expect(rep.fun1("bb")).to.equal("xixi");
        });

        it("should render with data props3", () => {
            expect(rep.fun1("few")).to.equal("hehe");
        });
    });
});
