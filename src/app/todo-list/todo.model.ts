export class Todo {
    constructor(title: string) {
        this.title = title || '';
    }
    get done(): boolean {
        return this.completed;
    }
    getTitle(): string {
        return this.title;
    }
    private title = "";
    private completed = false;

    toggleCompletion(): void {
        this.completed = !this.completed;
        // console.log(this.completed);
    }
    private editMode = false;
    get editing(): boolean {
        return this.editMode;
    }
    set editable(bl: boolean) {
        this.editMode = bl;
    }
    setTitle(title: string): void {
        this.title = title;
    }
}
