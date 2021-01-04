class Personne {
    nom;
    prenom;
    age;
    constructor(nom, prenom,age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    afficherNomComplet() {
        return this.nom + " " + this.prenom;
    }
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getPrenom() {
        return this.prenom;
    }
    setPrenom(prenom) {
        this.prenom = prenom;
    }
    afficherPersonne(){
        return this.afficherNomComplet() + " " + this.age;
    }
}
perso = new Personne("nom1","prenom1", 25);
perso2 = new Personne("nom2","prenom2", 37);
console.log(perso2.age);
perso2.setAge(39);
console.log(perso2.getAge());
console.log(perso.afficherNomComplet());
console.log(perso.afficherPersonne());
document.write(perso.getAge());
document.write(perso.afficherPersonne());

