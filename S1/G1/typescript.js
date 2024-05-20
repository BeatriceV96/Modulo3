var User = /** @class */ (function () {
    function User(_nome, _cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    User.prototype.ricarica = function (n) {
        this.credito += n;
    };
    return User;
}());
