export class SolveLog {
    public id: number;
    public sessionId: number;
    public userId: number | null;
    public time: number;
    public dnf: boolean | string;

    constructor(solve: Partial<SolveLog> ) {
        this.id = Number(solve.id);
        this.sessionId = Number(solve.sessionId);
        this.userId = Number(solve.userId);
        this.time = Number(solve.time);
        this.dnf = Boolean(solve.dnf);
    }
}
