/// <reference path="../interfaces.ts"/>
namespace heroes.people {
  export class PeopleService {
    static $inject: string[] = ['$http'];

    constructor(private $http: ng.IHttpService) {}

    getAllPeople(): ng.IPromise<Person[]> {
      return this.$http
        .get<Person[]>('./assets/data.json', { cache: true })
        .then(resp => resp.data);
    }

    getPerson(id: string): ng.IPromise<Person | undefined> {
      return this.getAllPeople().then((people: Person[]) =>
        people.find((person: Person) => person.id === id),
      );
    }
  }
}
