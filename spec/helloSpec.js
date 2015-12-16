describe("Hello", function(){
    var request = require("request");
    var base_url = "http://localhost:8080/";

    describe("GET /", function() {
        it("returns status code 200", function(done) {
            request(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("returns 'Hello, this is Dog.' as body", function(done) {
            request(base_url, function(error, response, body) {
                expect(body).toBe('Hello, this is Dog.');
                done();
            });
        });
    });
});
