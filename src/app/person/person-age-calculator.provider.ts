namespace heroes.person {
  class PersonAgeCalculator {
    constructor(private defaultAge: number) {}

    /*
     * @override
     */
    toString() {
      return this.defaultAge.toFixed(3);
    }
  }
  export class PersonAgeCalculatorProvider implements ng.IServiceProvider {
    private defaultAge: number = 0;

    $get = [
      'defaultAge',
      (defaultAge: number): PersonAgeCalculator => {
        return new PersonAgeCalculator(defaultAge);
      },
    ];
    setDefaultAge(defaultAge: number) {
      this.defaultAge = defaultAge;
    }
  }
}
