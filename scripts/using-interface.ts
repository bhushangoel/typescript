interface IEngine {
    start(callback: (startStatus: boolean,
                     engineType: string) => void): void;
    stop(callback: (stopStatus: boolean,
                    engineType: string) => void): void;
}

class Engine implements IEngine {
    constructor(public horsePower: number, public engineType: string) {

    }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000)
    }

    stop(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000)
    }

}