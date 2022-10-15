import { faker } from "@faker-js/faker";

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        long: number
    }

    constructor() {
        this.companyName = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            long: parseFloat(faker.address.longitude())
        }
    }

    markerContent() {
        return `
        <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h2>Company Info: ${this.catchPhrase}</h2>
        </div>
        `
    }

}