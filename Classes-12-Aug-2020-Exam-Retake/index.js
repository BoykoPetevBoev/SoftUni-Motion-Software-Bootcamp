class Hall {
    constructor(capacity, name) {
        this.capacity = Number(capacity);
        this.name = name;
        this.events = [];
    }
    hallEvent(title) {
        if (this.events.includes(title)) {
            throw new Error('This event is already added!');
        }
        this.events.push(title);
        return 'Event is added.';
    }
    close() {
        this.events.length = 0;
        return `${this.name} hall is closed.`
    }
    toString() {
        let result = `${this.name} hall - ${this.capacity}`;
        if (this.events.length !== 0) {
            result += `\nEvents: ${this.events.join(', ')}`;
        }
        return result;
    }
}

class MovieTheater extends Hall {
    constructor(capacity, name, screenSize) {
        super(capacity, name);
        this.screenSize = screenSize || '';
    }
    close() {
        let result = super.close();
        result += ' Аll screenings are over.';
        return result;
    }
    toString() {
        let result = super.toString();
        result += `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`;
        return result;
    }
}

class ConcertHall extends Hall {
    constructor(capacity, name) {
        super(capacity, name);
        this.performers = [];
    }
    hallEvent(title, performers) {
        const result = super.hallEvent(title);
        this.performers = performers;
        return result;
    }
    close() {
        let result = super.close();
        result += ' Аll performances are over.';
        return result;
    }
    toString() {
        let result = super.toString();
        if (this.events.length !== 0) {
            result += `\nPerformers: ${this.performers.join(', ')}.`;
        }
        return result;
    }
}

let hall = new Hall(20, 'Main');
console.log(hall.hallEvent('Breakfast Ideas'));
console.log(hall.hallEvent('Annual Charity Ball'));
console.log(hall.toString());
console.log(hall.close());

let movieHall = new MovieTheater(10, 'Europe', '10m');
console.log(movieHall.hallEvent('Top Gun: Maverick'));
console.log(movieHall.toString());
console.log(movieHall.close());

let concert = new ConcertHall(5000, 'Diamond');
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());
