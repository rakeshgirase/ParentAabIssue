import { Observable } from "tns-core-modules/data/observable";

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    allPeople: { name: string, title: string, imageSrc: string }[] = [
        { name: "Jane McDonald", title: "Developer Advocate", imageSrc: "https://placem.at/people?random=11&w=500&txt=0" },
        { name: "Steven Philips", title: "Social Media Coordinator", imageSrc: "https://placem.at/people?random=2&w=500&txt=0" },
        { name: "Mary Landow", title: "Product Marketing Manager", imageSrc: "https://placem.at/people?random=3&w=500&txt=0" },
        { name: "Sam", title: "Company Dog", imageSrc: "https://placem.at/people?random=4&w=500&txt=0" },
        { name: "Abby Keefer", title: "Customer Success Manager", imageSrc: "https://placem.at/people?random=5&w=500&txt=0" },
        { name: "Michelle Rodgers", title: "VP Engineering", imageSrc: "https://placem.at/people?random=6&w=500&txt=0" },
        { name: "Lucy Gold", title: "Marketing Intern", imageSrc: "https://placem.at/people?random=77&w=500&txt=0" },
        { name: "Jerry Kramer", title: "Senior Engineer", imageSrc: "https://placem.at/people?random=99&w=500&txt=0" },
        { name: "Kelna Cuevas", title: "Principal Product Manager", imageSrc: "https://placem.at/people?random=55&w=500&txt=0" },
        { name: "Sierra Riley", title: "Sales Coordinator", imageSrc: "https://placem.at/people?random=44&w=500&txt=0" },
        { name: "Lilly Morris", title: "Engineering Intern", imageSrc: "https://placem.at/people?random=123&w=500&txt=0" },
        { name: "Ariel Rhodes", title: "Customer Success Manager", imageSrc: "https://placem.at/people?random=33&w=500&txt=0" }
    ];

    private _people = this.allPeople;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
        this.set("people", this._people);
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value);
        }
    }

    onTap() {
        this._counter--;
        this.updateMessage();
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = "Hoorraaay! You unlocked the NativeScript clicker achievement!";
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}
