export class SolveLog {
    public id: number;
    public time: number;
    public dnf: boolean | string;
    public showPlusTwo: boolean = false;
    // public sessionId: number;
    // public userId: number | null;

    constructor(solve: Partial<SolveLog> ) {
        this.id = Number(solve.id);
        this.time = Number(solve.time);
        this.dnf = Boolean(solve.dnf);
        this.showPlusTwo = Boolean(solve.showPlusTwo);
        // this.sessionId = Number(solve.sessionId);
        // this.userId = Number(solve.userId);
    }
}
